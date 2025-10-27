import dayjs from "dayjs";
import { outsideWrapperId, leftColumnWidth, weekWidth, dayWidth, zoom2ColumnWidth } from "@/constants";
import { ParsedDatesRange } from "./getDatesRange";

/**
 * Calculates the visible viewport (what's currently on screen) based on scroll position
 * @param date - The center date of the full navigable range
 * @param zoom - The current zoom level (0=weeks, 1=days, 2=hours)
 * @returns The visible date range currently on screen
 */
export const getVisibleViewport = (date: dayjs.Dayjs, zoom: number): ParsedDatesRange => {
  const outsideWrapper = document.getElementById(outsideWrapperId);
  if (!outsideWrapper) {
    // Fallback to a reasonable default if wrapper not found
    return {
      startDate: date.subtract(2, zoom === 2 ? "hours" : zoom === 1 ? "days" : "weeks").toDate(),
      endDate: date.add(2, zoom === 2 ? "hours" : zoom === 1 ? "days" : "weeks").toDate()
    };
  }

  const scrollLeft = outsideWrapper.scrollLeft;
  const wrapperWidth = outsideWrapper.clientWidth;
  const componentWidth = wrapperWidth - leftColumnWidth;

  // Get the width of each column based on zoom level
  let columnWidth: number;
  let timeUnit: "weeks" | "days" | "hours";
  
  switch (zoom) {
    case 1:
      columnWidth = dayWidth;
      timeUnit = "days";
      break;
    case 2:
      columnWidth = zoom2ColumnWidth;
      timeUnit = "hours";
      break;
    default:
      columnWidth = weekWidth;
      timeUnit = "weeks";
      break;
  }

  // Calculate how many columns are visible
  const visibleColumns = Math.ceil(componentWidth / columnWidth);
  
  // Calculate the offset from the center date based on scroll position
  // The canvas is 3x wider than the viewport, so we need to account for that
  const totalCanvasWidth = componentWidth * 3; // screenWidthMultiplier = 3
  const totalColumns = Math.ceil(totalCanvasWidth / columnWidth);
  const centerColumnIndex = Math.floor(totalColumns / 2);
  
  // Calculate which column is at the left edge of the viewport
  const leftmostColumnIndex = Math.floor(scrollLeft / columnWidth);
  
  // Calculate the offset from center
  const offsetFromCenter = leftmostColumnIndex - centerColumnIndex + Math.floor(visibleColumns / 2);
  
  // Calculate visible start and end dates
  const visibleStartDate = date.add(offsetFromCenter - Math.floor(visibleColumns / 2), timeUnit);
  const visibleEndDate = date.add(offsetFromCenter + Math.ceil(visibleColumns / 2), timeUnit);

  return {
    startDate: visibleStartDate.toDate(),
    endDate: visibleEndDate.toDate()
  };
};
