import { FC, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import { ConfirmDialogProps } from "./types";
import {
  StyledOverlay,
  StyledDialog,
  StyledTitle,
  StyledTileInfo,
  StyledTileTitle,
  StyledTileSubtitle,
  StyledContent,
  StyledChangeRow,
  StyledLabel,
  StyledDateDisplay,
  StyledOldDate,
  StyledArrow,
  StyledNewDate,
  StyledButtonGroup,
  StyledCancelButton,
  StyledConfirmButton
} from "./styles";

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  pendingUpdate,
  onConfirm,
  onCancel,
  dateFormat = "MMM D, YYYY",
  timeFormat = "HH:mm"
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
      } else if (e.key === "Enter") {
        onConfirm();
      }
    },
    [onCancel, onConfirm]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !pendingUpdate) return null;

  const formatDate = (date: Date) => {
    const d = dayjs(date);
    return `${d.format(dateFormat)} ${d.format(timeFormat)}`;
  };

  const startChanged =
    pendingUpdate.startDate.getTime() !== pendingUpdate.originalStartDate.getTime();
  const endChanged =
    pendingUpdate.endDate.getTime() !== pendingUpdate.originalEndDate.getTime();

  return (
    <>
      <StyledOverlay onClick={onCancel} />
      <StyledDialog role="dialog" aria-modal="true" aria-labelledby="confirm-dialog-title">
        <StyledTitle id="confirm-dialog-title">Confirm Schedule Change</StyledTitle>
        <StyledTileInfo>
          <StyledTileTitle>{pendingUpdate.title}</StyledTileTitle>
          {pendingUpdate.subtitle && (
            <StyledTileSubtitle>{pendingUpdate.subtitle}</StyledTileSubtitle>
          )}
        </StyledTileInfo>
        <StyledContent>
          {startChanged && (
            <StyledChangeRow>
              <StyledLabel>Start:</StyledLabel>
              <StyledDateDisplay>
                <StyledOldDate>{formatDate(pendingUpdate.originalStartDate)}</StyledOldDate>
                <StyledArrow>→</StyledArrow>
                <StyledNewDate>{formatDate(pendingUpdate.startDate)}</StyledNewDate>
              </StyledDateDisplay>
            </StyledChangeRow>
          )}
          {endChanged && (
            <StyledChangeRow>
              <StyledLabel>End:</StyledLabel>
              <StyledDateDisplay>
                <StyledOldDate>{formatDate(pendingUpdate.originalEndDate)}</StyledOldDate>
                <StyledArrow>→</StyledArrow>
                <StyledNewDate>{formatDate(pendingUpdate.endDate)}</StyledNewDate>
              </StyledDateDisplay>
            </StyledChangeRow>
          )}
        </StyledContent>
        <StyledButtonGroup>
          <StyledCancelButton onClick={onCancel} type="button">
            Cancel
          </StyledCancelButton>
          <StyledConfirmButton onClick={onConfirm} type="button" autoFocus>
            Confirm
          </StyledConfirmButton>
        </StyledButtonGroup>
      </StyledDialog>
    </>
  );
};

export default ConfirmDialog;

