import dayjs from "dayjs";
import { dayWidth, minutesInHour, singleDayWidth, zoom2ColumnWidth } from "@/constants";

/**
 * Converts a pixel offset to a date change
 * This is the inverse of getTileXAndWidth calculations
 */
export const getDateChangeFromPixels = (
  pixelDelta: number,
  zoom: number
): { days: number; hours: number; minutes: number } => {
  let cellWidth: number;
  switch (zoom) {
    case 0:
      cellWidth = singleDayWidth;
      break;
    case 2:
      cellWidth = zoom2ColumnWidth;
      break;
    default:
      cellWidth = dayWidth;
  }

  if (zoom === 2) {
    // In hourly view, each cell is 1 hour
    const hours = pixelDelta / cellWidth;
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * minutesInHour);
    return { days: 0, hours: wholeHours, minutes };
  } else {
    // In day/week view, each cell is 1 day
    const days = Math.round(pixelDelta / cellWidth);
    return { days, hours: 0, minutes: 0 };
  }
};

/**
 * Applies pixel delta to a date and returns the new date
 */
export const applyPixelDeltaToDate = (
  originalDate: Date,
  pixelDelta: number,
  zoom: number
): Date => {
  const change = getDateChangeFromPixels(pixelDelta, zoom);
  let newDate = dayjs(originalDate);

  if (change.days !== 0) {
    newDate = newDate.add(change.days, "day");
  }
  if (change.hours !== 0) {
    newDate = newDate.add(change.hours, "hour");
  }
  if (change.minutes !== 0) {
    newDate = newDate.add(change.minutes, "minute");
  }

  return newDate.toDate();
};

/**
 * Snaps a date to the nearest grid cell based on zoom level
 */
export const snapDateToGrid = (date: Date, zoom: number): Date => {
  const d = dayjs(date);

  switch (zoom) {
    case 2:
      // Hourly view - snap to nearest hour
      return d.startOf("hour").toDate();
    case 1:
      // Day view - snap to start of day
      return d.startOf("day").toDate();
    case 0:
    default:
      // Week view - snap to start of day
      return d.startOf("day").toDate();
  }
};

