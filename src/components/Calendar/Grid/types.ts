import { PaginatedSchedulerData, PendingTileUpdate, SchedulerProjectData } from "@/types/global";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  editable?: boolean;
  onTileDragEnd?: (update: PendingTileUpdate) => void;
};

export type StyledSpanProps = {
  $position: "left" | "right";
};
