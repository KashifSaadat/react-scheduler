import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isBetween from "dayjs/plugin/isBetween";
import duration from "dayjs/plugin/duration";
import debounce from "lodash.debounce";
import { Coords, ZoomLevel, allZoomLevel } from "@/types/global";
import { isAvailableZoom } from "@/types/guards";
import { getDatesRange, getParsedDatesRange } from "@/utils/getDatesRange";
import { parseDay } from "@/utils/dates";
import { getCols, getVisibleCols } from "@/utils/getCols";
import {
  buttonWeeksJump,
  hoursInDay,
  outsideWrapperId,
  screenWidthMultiplier,
  zoom2ButtonJump
} from "@/constants";
import { getCanvasWidth } from "@/utils/getCanvasWidth";
import { getVisibleViewport } from "@/utils/getVisibleViewport";
import { calendarContext } from "./calendarContext";
import { CalendarProviderProps } from "./types";
dayjs.extend(weekOfYear);
dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isBetween);
dayjs.extend(duration);

type Direction = "back" | "forward" | "middle";

const CalendarProvider = ({
  data,
  children,
  isLoading,
  config,
  defaultStartDate = dayjs(),
  onRangeChange,
  onVisibleViewportChange,
  onFilterData,
  onClearFilterData
}: CalendarProviderProps) => {
  const { zoom: configZoom, maxRecordsPerPage = 50, minZoom = 0, maxZoom = allZoomLevel[allZoomLevel.length - 1] } = config;
  const [zoom, setZoom] = useState<ZoomLevel>(configZoom);
  const [date, setDate] = useState(dayjs());
  const [isInitialized, setIsInitialized] = useState(false);
  const [cols, setCols] = useState(getCols(zoom));
  const isNextZoom = zoom < maxZoom;
  const isPrevZoom = zoom > minZoom;
  const range = useMemo(() => getParsedDatesRange(date, zoom), [date, zoom]);
  const startDate = getDatesRange(date, zoom).startDate;
  const dayOfYear = dayjs(startDate).dayOfYear();
  const parsedStartDate = parseDay(startDate);
  const outsideWrapper = useRef<HTMLElement | null>(null);
  const [tilesCoords, setTilesCoords] = useState<Coords[]>([{ x: 0, y: 0 }]);

  const moveHorizontalScroll = useCallback(
    (direction: Direction, behavior: ScrollBehavior = "auto") => {
      const canvasWidth = getCanvasWidth();
      switch (direction) {
        case "back":
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 3
          });

        case "forward":
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 3
          });

        case "middle": {
          const leftOffset = canvasWidth / screenWidthMultiplier / 4; // 1/4 of component's width
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 2 - leftOffset
          });
        }

        default:
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 2
          });
      }
    },
    []
  );

  const updateTilesCoords = (coords: Coords[]) => {
    setTilesCoords(coords);
  };

  // Function to trigger visible viewport change callback
  const triggerVisibleViewportChange = useCallback(() => {
    if (onVisibleViewportChange && isInitialized) {
      const viewport = getVisibleViewport(date, zoom);
      onVisibleViewportChange(viewport);
    }
  }, [onVisibleViewportChange, date, zoom, isInitialized]);

  const loadMore = useCallback(
    (direction: Direction) => {
      const cols = getVisibleCols(zoom);
      let offset: number;
      switch (zoom) {
        case 0:
          offset = cols * 7;
          break;
        case 1:
          offset = cols;
          break;
        case 2:
          offset = Math.ceil(cols / hoursInDay);
          break;
      }
      const load = debounce(() => {
        switch (direction) {
          case "back":
            setDate((prev) => prev.subtract(offset, "days"));
            break;
          case "forward":
            setDate((prev) => prev.add(offset, "days"));
            break;
          case "middle":
            setDate(dayjs());
            break;
        }
        onRangeChange?.(range);
      }, 300);
      load();
    },
    [onRangeChange, range, zoom]
  );

  useEffect(() => {
    outsideWrapper.current = document.getElementById(outsideWrapperId);
    setCols(getCols(zoom));
  }, [zoom]);

  useEffect(() => {
    const handleResize = () => setCols(getCols(zoom));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoom]);

  // Add scroll event listener to track visible viewport changes
  useEffect(() => {
    const outsideWrapperElement = document.getElementById(outsideWrapperId);
    if (!outsideWrapperElement) return;

    const debouncedViewportChange = debounce(triggerVisibleViewportChange, 100);
    
    const handleScroll = () => {
      debouncedViewportChange();
    };

    outsideWrapperElement.addEventListener("scroll", handleScroll);
    return () => {
      outsideWrapperElement.removeEventListener("scroll", handleScroll);
      debouncedViewportChange.cancel();
    };
  }, [triggerVisibleViewportChange]);

  useEffect(() => {
    onRangeChange?.(range);
  }, [onRangeChange, range]);

  useEffect(() => {
    // when defaultStartDate changes repaint grid
    setIsInitialized(false);
  }, [defaultStartDate]);

  useEffect(() => {
    if (isInitialized) return;

    moveHorizontalScroll("middle");
    setIsInitialized(true);
    setDate(defaultStartDate);
    // Trigger initial viewport change after initialization
    setTimeout(triggerVisibleViewportChange, 500);
  }, [defaultStartDate, isInitialized, moveHorizontalScroll, triggerVisibleViewportChange]);

  const handleGoNext = () => {
    if (isLoading) return;

    setDate((prev) =>
      zoom === 2 ? prev.add(zoom2ButtonJump, "hours") : prev.add(buttonWeeksJump, "weeks")
    );
    onRangeChange?.(range);
    // Trigger viewport change after a short delay to allow scroll to complete
    setTimeout(triggerVisibleViewportChange, 400);
  };

  const handleScrollNext = useCallback(() => {
    if (isLoading) return;

    loadMore("forward");
    debounce(() => {
      moveHorizontalScroll("forward");
    }, 300)();
  }, [isLoading, loadMore, moveHorizontalScroll]);

  const handleGoPrev = () => {
    if (isLoading) return;

    setDate((prev) =>
      zoom === 2 ? prev.subtract(zoom2ButtonJump, "hours") : prev.subtract(buttonWeeksJump, "weeks")
    );
    onRangeChange?.(range);
    // Trigger viewport change after a short delay to allow scroll to complete
    setTimeout(triggerVisibleViewportChange, 400);
  };

  const handleScrollPrev = useCallback(() => {
    if (!isInitialized || isLoading) return;
    loadMore("back");
    debounce(() => {
      moveHorizontalScroll("back");
    }, 300)();
  }, [isInitialized, isLoading, loadMore, moveHorizontalScroll]);

  const handleGoToday = useCallback(() => {
    if (isLoading) return;

    loadMore("middle");
    debounce(() => {
      moveHorizontalScroll("middle", "smooth");
      // Trigger viewport change after scroll completes
      setTimeout(triggerVisibleViewportChange, 600);
    }, 300)();
  }, [isLoading, loadMore, moveHorizontalScroll, triggerVisibleViewportChange]);

  const handleGoDate = useCallback(
    (date: dayjs.Dayjs) => {
      if (isLoading) return;

      setDate(date);
      onRangeChange?.(range);
      // Trigger viewport change after a short delay
      setTimeout(triggerVisibleViewportChange, 400);
    },
    [isLoading, onRangeChange, range, triggerVisibleViewportChange]
  );

  const zoomIn = () => changeZoom(zoom + 1);

  const zoomOut = () => changeZoom(zoom - 1);

  const changeZoom = (zoomLevel: number) => {
    if (!isAvailableZoom(zoomLevel)) return;
    setZoom(zoomLevel);
    setCols(getCols(zoomLevel));
    onRangeChange?.(range);
    // Trigger viewport change after zoom change
    setTimeout(triggerVisibleViewportChange, 400);
  };

  const handleFilterData = () => onFilterData?.();

  const { Provider } = calendarContext;

  return (
    <Provider
      value={{
        data,
        config,
        handleGoNext,
        handleScrollNext,
        handleGoPrev,
        handleScrollPrev,
        handleGoToday,
        handleGoDate,
        zoomIn,
        zoomOut,
        zoom,
        isNextZoom,
        isPrevZoom,
        date,
        isLoading,
        cols,
        startDate: parsedStartDate,
        dayOfYear,
        handleFilterData,
        tilesCoords,
        updateTilesCoords,
        recordsThreshold: maxRecordsPerPage,
        onClearFilterData
      }}
    >
      {children}
    </Provider>
  );
};

const useCalendar = () => useContext(calendarContext);

export default CalendarProvider;
export { useCalendar };
