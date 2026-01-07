import { PaginatedSchedulerData, PendingTileUpdate, SchedulerProjectData } from "@/types/global";
import React from "react";

export type TilesProps = {
  zoom: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  editable?: boolean;
  onTileDragEnd?: (update: PendingTileUpdate) => void;
};

export type PlacedTiles = React.ReactElement[];
