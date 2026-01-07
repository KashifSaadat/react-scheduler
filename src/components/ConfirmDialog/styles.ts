import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 9998;
  animation: ${fadeIn} 0.15s ease-out;
`;

export const StyledDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 24px;
  min-width: 360px;
  max-width: 90vw;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  animation: ${slideIn} 0.2s ease-out;
`;

export const StyledTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledTileInfo = styled.div`
  margin-bottom: 16px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
`;

export const StyledTileTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 2px;
`;

export const StyledTileSubtitle = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const StyledContent = styled.div`
  margin-bottom: 20px;
`;

export const StyledChangeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.placeholder};
  min-width: 60px;
`;

export const StyledDateDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const StyledOldDate = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.placeholder};
  text-decoration: line-through;
`;

export const StyledArrow = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;

export const StyledNewDate = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledCancelButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledConfirmButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.accent};
  color: white;

  &:hover {
    filter: brightness(1.1);
  }
`;

