import { ThemeProvider } from "styled-components";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "@/components";
import CalendarProvider from "@/context/CalendarProvider";
import LocaleProvider from "@/context/LocaleProvider";
import { darkTheme, GlobalStyle, theme } from "@/styles";
import { Config, PendingTileUpdate, TileUpdatePayload } from "@/types/global";
import { outsideWrapperId } from "@/constants";
import { SchedulerProps } from "./types";
import { StyledInnerWrapper, StyledOutsideWrapper } from "./styles";
import ConfirmDialog from "../ConfirmDialog";
import Toast from "../Toast";

const Scheduler = ({
  data,
  config,
  startDate,
  onRangeChange,
  onVisibleViewportChange,
  onZoomChange,
  onTileClick,
  onFilterData,
  onClearFilterData,
  onItemClick,
  onTileUpdate,
  isLoading,
  searchValue,
  onSearchChange,
  defaultSearchValue
}: SchedulerProps) => {
  const appConfig: Config = useMemo(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: false,
      showTooltip: true,
      translations: undefined,
      dateFormat: "dddd DD.MM.YYYY",
      timeFormat: "HH:00",
      editable: false,
      ...config
    }),
    [config]
  );

  const outsideWrapperRef = useRef<HTMLDivElement>(null);
  const [topBarWidth, setTopBarWidth] = useState(outsideWrapperRef.current?.clientWidth);
  const defaultStartDate = useMemo(() => dayjs(startDate), [startDate]);
  const [themeMode, setThemeMode] = useState<"light" | "dark">(appConfig.defaultTheme ?? "light");
  const toggleTheme = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  // State for edit confirmation and undo
  const [pendingUpdate, setPendingUpdate] = useState<PendingTileUpdate | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastConfirmedUpdate, setLastConfirmedUpdate] = useState<PendingTileUpdate | null>(null);

  const currentTheme = themeMode === "light" ? theme : darkTheme;
  const customColors = appConfig.theme ? appConfig.theme[currentTheme.mode] : {};
  const mergedTheme = {
    ...currentTheme,
    colors: {
      ...currentTheme.colors,
      ...customColors
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (outsideWrapperRef.current) {
        setTopBarWidth(outsideWrapperRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle tile drag end - show confirmation dialog
  const handleTileDragEnd = useCallback((update: PendingTileUpdate) => {
    setPendingUpdate(update);
    setShowConfirmDialog(true);
  }, []);

  // Confirm the update
  const handleConfirmUpdate = useCallback(() => {
    if (pendingUpdate && onTileUpdate) {
      const payload: TileUpdatePayload = {
        id: pendingUpdate.id,
        startDate: pendingUpdate.startDate,
        endDate: pendingUpdate.endDate
      };
      onTileUpdate(payload);
      setLastConfirmedUpdate(pendingUpdate);
      setShowToast(true);
    }
    setShowConfirmDialog(false);
    setPendingUpdate(null);
  }, [pendingUpdate, onTileUpdate]);

  // Cancel the update
  const handleCancelUpdate = useCallback(() => {
    setShowConfirmDialog(false);
    setPendingUpdate(null);
  }, []);

  // Undo the last update
  const handleUndo = useCallback(() => {
    if (lastConfirmedUpdate && onTileUpdate) {
      const undoPayload: TileUpdatePayload = {
        id: lastConfirmedUpdate.id,
        startDate: lastConfirmedUpdate.originalStartDate,
        endDate: lastConfirmedUpdate.originalEndDate
      };
      onTileUpdate(undoPayload);
    }
    setLastConfirmedUpdate(null);
  }, [lastConfirmedUpdate, onTileUpdate]);

  // Dismiss toast
  const handleDismissToast = useCallback(() => {
    setShowToast(false);
    setLastConfirmedUpdate(null);
  }, []);

  if (!outsideWrapperRef.current) null;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mergedTheme}>
        <LocaleProvider lang={appConfig.lang} translations={appConfig.translations}>
          <CalendarProvider
            data={data}
            isLoading={!!isLoading}
            config={appConfig}
            onRangeChange={onRangeChange}
            onVisibleViewportChange={onVisibleViewportChange}
            onZoomChange={onZoomChange}
            defaultStartDate={defaultStartDate}
            onFilterData={onFilterData}
            onClearFilterData={onClearFilterData}
          >
            <StyledOutsideWrapper
              $showScroll={!!data.length}
              id={outsideWrapperId}
              ref={outsideWrapperRef}
              className="scheduler-outside-wrapper"
            >
              <StyledInnerWrapper className="scheduler-inner-wrapper">
                <Calendar
                  data={data}
                  onTileClick={onTileClick}
                  topBarWidth={topBarWidth ?? 0}
                  onItemClick={onItemClick}
                  toggleTheme={toggleTheme}
                  editable={appConfig.editable}
                  onTileDragEnd={handleTileDragEnd}
                  searchValue={searchValue}
                  onSearchChange={onSearchChange}
                  defaultSearchValue={defaultSearchValue}
                />
              </StyledInnerWrapper>
            </StyledOutsideWrapper>
            <ConfirmDialog
              isOpen={showConfirmDialog}
              pendingUpdate={pendingUpdate}
              onConfirm={handleConfirmUpdate}
              onCancel={handleCancelUpdate}
              dateFormat={appConfig.dateFormat}
              timeFormat={appConfig.timeFormat}
            />
            <Toast
              isVisible={showToast}
              message="Schedule updated successfully"
              onUndo={handleUndo}
              onDismiss={handleDismissToast}
              duration={5000}
            />
          </CalendarProvider>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
};

export default Scheduler;
