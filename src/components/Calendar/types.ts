import { PendingTileUpdate, SchedulerData, SchedulerItemClickData, SchedulerProjectData } from "@/types/global";

export type CalendarProps = {
  data: SchedulerData;
  topBarWidth: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  toggleTheme?: () => void;
  editable?: boolean;
  onTileDragEnd?: (update: PendingTileUpdate) => void;
};

export type StyledSpanProps = {
  $position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
