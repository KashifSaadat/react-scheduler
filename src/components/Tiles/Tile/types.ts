import { PendingTileUpdate, SchedulerProjectData } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  editable?: boolean;
  onTileDragEnd?: (update: PendingTileUpdate) => void;
};

export type StyledTextProps = {
  $bold?: string;
};

export type StyledTileWrapperProps = {
  $isDragging?: boolean;
  $editable?: boolean;
};

export type StyledResizeHandleProps = {
  $position: "left" | "right";
};

export type DragState = {
  isDragging: boolean;
  dragType: "move" | "resize-left" | "resize-right" | null;
  startX: number;
  startY: number;
  currentDeltaX: number;
  originalStartDate: Date;
  originalEndDate: Date;
};
