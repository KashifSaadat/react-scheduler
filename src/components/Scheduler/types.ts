import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  TileUpdatePayload
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type SchedulerProps = {
  data: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onVisibleViewportChange?: (viewport: ParsedDatesRange) => void;
  onZoomChange?: (zoom: 0 | 1 | 2) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  /**
   * Callback when a tile is updated via drag or resize.
   * Only called when config.editable is true.
   * Returns the tile id, new start date, and new end date.
   */
  onTileUpdate?: (payload: TileUpdatePayload) => void;
};

export type StyledOutsideWrapperProps = {
  $showScroll: boolean;
};
