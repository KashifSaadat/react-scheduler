import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`;

export const StyledToastWrapper = styled.div<{ $isLeaving: boolean }>`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  animation: ${({ $isLeaving }) => ($isLeaving ? slideDown : slideUp)} 0.25s ease-out forwards;
`;

export const StyledToast = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: ${({ theme }) => theme.colors.tooltip};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

export const StyledMessage = styled.span`
  font-weight: 400;
`;

export const StyledUndoButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const StyledDismissButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 4px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: color 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const StyledProgressBar = styled.div<{ $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 0 0 10px 10px;
  animation: shrink ${({ $duration }) => $duration}ms linear forwards;

  @keyframes shrink {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;

