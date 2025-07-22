import { FC } from "react";
import { Icon } from "@/components";
import {
  StyledImage,
  StyledImageWrapper,
  StyledInnerWrapper,
  StyledText,
  StyledTextWrapper,
  StyledWrapper
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({ id, item, rows, onItemClick }) => {
  return (
    <StyledWrapper
      title={item.title + " | " + item.subtitle}
      $clickable={typeof onItemClick === "function" ? "true" : "false"}
      rows={rows}
      onClick={() => onItemClick?.({ id, label: item })}
      className="left-column-item-wrapper"
    >
      <StyledInnerWrapper className="left-column-item-inner">
        <StyledImageWrapper className="left-column-item-image-wrapper">
          {item.icon ? (
            <StyledImage src={item.icon} alt="Icon" className="left-column-item-image"></StyledImage>
          ) : (
            <Icon iconName="defaultAvatar" />
          )}
        </StyledImageWrapper>
        <StyledTextWrapper className="left-column-item-text-wrapper">
          <StyledText $isMain className="left-column-item-title">{item.title}</StyledText>
          <StyledText className="left-column-item-subtitle">{item.subtitle}</StyledText>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default LeftColumnItem;
