import { FC, useEffect, useState, useCallback } from "react";
import { ToastProps } from "./types";
import {
  StyledToastWrapper,
  StyledToast,
  StyledMessage,
  StyledUndoButton,
  StyledDismissButton,
  StyledProgressBar
} from "./styles";

const Toast: FC<ToastProps> = ({
  isVisible,
  message,
  onUndo,
  onDismiss,
  duration = 5000
}) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      setShouldRender(false);
      setIsLeaving(false);
      onDismiss();
    }, 250);
  }, [onDismiss]);

  const handleUndo = useCallback(() => {
    onUndo();
    handleDismiss();
  }, [onUndo, handleDismiss]);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsLeaving(false);

      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, handleDismiss]);

  if (!shouldRender) return null;

  return (
    <StyledToastWrapper $isLeaving={isLeaving}>
      <StyledToast>
        <StyledMessage>{message}</StyledMessage>
        <StyledUndoButton onClick={handleUndo} type="button">
          Undo
        </StyledUndoButton>
        <StyledDismissButton onClick={handleDismiss} type="button" aria-label="Dismiss">
          ×
        </StyledDismissButton>
        <StyledProgressBar $duration={duration} />
      </StyledToast>
    </StyledToastWrapper>
  );
};

export default Toast;

