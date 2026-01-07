import styled, { css } from "styled-components";
import { leftColumnWidth, tileHeight } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";
import { StyledTextProps, StyledTileWrapperProps, StyledResizeHandleProps } from "./types";

export const StyledResizeHandle = styled.div<StyledResizeHandleProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 8px;
  cursor: ew-resize;
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: 2;

  ${({ $position }) =>
    $position === "left"
      ? css`
          left: 0;
          border-radius: 4px 0 0 4px;
        `
      : css`
          right: 0;
          border-radius: 0 4px 4px 0;
        `}

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $position }) => ($position === "left" ? "left: 2px;" : "right: 2px;")}
    width: 4px;
    height: 24px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
  }
`;

export const StyledTileWrapper = styled.button<StyledTileWrapperProps>`
  ${marginPaddingReset}
  height: ${tileHeight}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  cursor: ${({ $editable }) => ($editable ? "grab" : "pointer")};
  transition: box-shadow 0.15s ease, transform 0.1s ease;
  user-select: none;

  ${({ $isDragging }) =>
    $isDragging &&
    css`
      cursor: grabbing;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
      z-index: 100;
      opacity: 0.9;
    `}

  ${({ $editable }) =>
    $editable &&
    css`
      &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

        ${StyledResizeHandle} {
          opacity: 1;
        }
      }
    `}
`;

export const StyledTextWrapper = styled.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
  pointer-events: none;
`;

export const StyledText = styled.p<StyledTextProps>`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  font-weight: ${({ $bold }) => ($bold ? "600" : "400")};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;

export const StyledDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;

export const StyledStickyWrapper = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 16}px;
  overflow: hidden;
`;
