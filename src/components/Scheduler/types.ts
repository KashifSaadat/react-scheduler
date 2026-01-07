import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  TileUpdatePayload
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

/**
 * Handler type for search value changes
 */
export type SearchChangeHandler = (value: string) => void;

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
  /**
   * Controlled search value. When provided, the search input becomes controlled.
   * The component will display this value and call onSearchChange when user types.
   */
  searchValue?: string;
  /**
   * Callback fired when the search value changes (user types in search box).
   * Required when searchValue is provided for controlled mode.
   * Also fires in uncontrolled mode if provided (useful for tracking).
   */
  onSearchChange?: SearchChangeHandler;
  /**
   * Default search value for uncontrolled mode.
   * Only used on initial mount. Ignored if searchValue is provided.
   */
  defaultSearchValue?: string;
};

export type StyledOutsideWrapperProps = {
  $showScroll: boolean;
};
