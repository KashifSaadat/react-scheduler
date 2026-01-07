import { PendingTileUpdate } from "@/types/global";

export type ConfirmDialogProps = {
  isOpen: boolean;
  pendingUpdate: PendingTileUpdate | null;
  onConfirm: () => void;
  onCancel: () => void;
  dateFormat?: string;
  timeFormat?: string;
};

