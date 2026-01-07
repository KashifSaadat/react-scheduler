import { PendingTileUpdate, SchedulerData, SchedulerItemClickData, SchedulerProjectData } from "@/types/global";
import { SearchChangeHandler } from "@/components/Scheduler/types";

export type CalendarProps = {
  data: SchedulerData;
  topBarWidth: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  toggleTheme?: () => void;
  editable?: boolean;
  onTileDragEnd?: (update: PendingTileUpdate) => void;
  /**
   * Controlled search value. When provided, the search input becomes controlled.
   */
  searchValue?: string;
  /**
   * Callback fired when the search value changes.
   */
  onSearchChange?: SearchChangeHandler;
  /**
   * Default search value for uncontrolled mode.
   */
  defaultSearchValue?: string;
};

export type StyledSpanProps = {
  $position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
