export type ToastProps = {
  isVisible: boolean;
  message: string;
  onUndo: () => void;
  onDismiss: () => void;
  duration?: number;
};

