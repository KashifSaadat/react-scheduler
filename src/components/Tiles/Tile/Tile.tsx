import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { applyPixelDeltaToDate, snapDateToGrid } from "@/utils/getDateFromPixels";
import {
  StyledDescription,
  StyledResizeHandle,
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper
} from "./styles";
import { DragState, TileProps } from "./types";

const DRAG_THRESHOLD = 5; // Minimum pixels before starting a drag

const initialDragState: DragState = {
  isDragging: false,
  dragType: null,
  startX: 0,
  startY: 0,
  currentDeltaX: 0,
  originalStartDate: new Date(),
  originalEndDate: new Date()
};

const Tile: FC<TileProps> = ({ row, data, zoom, onTileClick, editable = false, onTileDragEnd }) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  const { colors } = useTheme();
  const [dragState, setDragState] = useState<DragState>(initialDragState);
  const dragStartedRef = useRef(false);
  const clickPrevented = useRef(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, dragType: "move" | "resize-left" | "resize-right") => {
      if (!editable) return;

      e.preventDefault();
      e.stopPropagation();

      setDragState({
        isDragging: false, // Will become true after threshold
        dragType,
        startX: e.clientX,
        startY: e.clientY,
        currentDeltaX: 0,
        originalStartDate: data.startDate,
        originalEndDate: data.endDate
      });

      dragStartedRef.current = false;
      clickPrevented.current = false;
    },
    [editable, data.startDate, data.endDate]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragState.dragType) return;

      const deltaX = e.clientX - dragState.startX;
      const deltaY = e.clientY - dragState.startY;

      // Check if we've exceeded the drag threshold
      if (!dragStartedRef.current) {
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance < DRAG_THRESHOLD) return;

        dragStartedRef.current = true;
        clickPrevented.current = true;
        setDragState((prev) => ({ ...prev, isDragging: true }));
      }

      setDragState((prev) => ({ ...prev, currentDeltaX: deltaX }));
    },
    [dragState.dragType, dragState.startX, dragState.startY]
  );

  const handleMouseUp = useCallback(() => {
    if (!dragState.dragType) return;

    if (dragStartedRef.current && dragState.currentDeltaX !== 0 && onTileDragEnd) {
      let newStartDate = dragState.originalStartDate;
      let newEndDate = dragState.originalEndDate;

      switch (dragState.dragType) {
        case "move":
          newStartDate = applyPixelDeltaToDate(dragState.originalStartDate, dragState.currentDeltaX, zoom);
          newEndDate = applyPixelDeltaToDate(dragState.originalEndDate, dragState.currentDeltaX, zoom);
          break;
        case "resize-left":
          newStartDate = applyPixelDeltaToDate(dragState.originalStartDate, dragState.currentDeltaX, zoom);
          // Ensure start doesn't go past end
          if (newStartDate >= dragState.originalEndDate) {
            newStartDate = new Date(dragState.originalEndDate.getTime() - 3600000); // 1 hour before
          }
          break;
        case "resize-right":
          newEndDate = applyPixelDeltaToDate(dragState.originalEndDate, dragState.currentDeltaX, zoom);
          // Ensure end doesn't go before start
          if (newEndDate <= dragState.originalStartDate) {
            newEndDate = new Date(dragState.originalStartDate.getTime() + 3600000); // 1 hour after
          }
          break;
      }

      // Snap to grid
      newStartDate = snapDateToGrid(newStartDate, zoom);
      newEndDate = snapDateToGrid(newEndDate, zoom);

      onTileDragEnd({
        id: data.id,
        startDate: newStartDate,
        endDate: newEndDate,
        originalStartDate: dragState.originalStartDate,
        originalEndDate: dragState.originalEndDate,
        title: data.title,
        subtitle: data.subtitle
      });
    }

    setDragState(initialDragState);
    dragStartedRef.current = false;
  }, [dragState, zoom, onTileDragEnd, data.id]);

  // Add global mouse event listeners when dragging
  useEffect(() => {
    if (dragState.dragType) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragState.dragType, handleMouseMove, handleMouseUp]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (clickPrevented.current) {
        e.preventDefault();
        e.stopPropagation();
        clickPrevented.current = false;
        return;
      }
      onTileClick?.(data);
    },
    [onTileClick, data]
  );

  // Calculate visual offset during drag
  let visualX = x;
  let visualWidth = width;

  if (dragState.isDragging) {
    switch (dragState.dragType) {
      case "move":
        visualX = x + dragState.currentDeltaX;
        break;
      case "resize-left":
        visualX = x + dragState.currentDeltaX;
        visualWidth = width - dragState.currentDeltaX;
        break;
      case "resize-right":
        visualWidth = width + dragState.currentDeltaX;
        break;
    }
  }

  return (
    <StyledTileWrapper
      style={{
        left: `${visualX}px`,
        top: `${y}px`,
        backgroundColor: `${data.bgColor ?? colors.defaultTile}`,
        width: `${Math.max(visualWidth, 20)}px`,
        color: getTileTextColor(data.bgColor ?? "")
      }}
      onClick={handleClick}
      onMouseDown={(e) => handleMouseDown(e, "move")}
      className="tile-wrapper"
      $isDragging={dragState.isDragging}
      $editable={editable}
    >
      {editable && (
        <>
          <StyledResizeHandle
            $position="left"
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, "resize-left");
            }}
            className="tile-resize-handle-left"
          />
          <StyledResizeHandle
            $position="right"
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, "resize-right");
            }}
            className="tile-resize-handle-right"
          />
        </>
      )}
      <StyledTextWrapper className="tile-text-wrapper">
        <StyledStickyWrapper className="tile-sticky-wrapper">
          <StyledText $bold="600" className="tile-title">
            {data.title}
          </StyledText>
          <StyledText className="tile-subtitle">{data.subtitle}</StyledText>
          <StyledDescription className="tile-description">{data.description}</StyledDescription>
        </StyledStickyWrapper>
      </StyledTextWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
