import { FC } from "react";
import { useLanguage } from "@/context/LocaleProvider";
import { PaginationButtonProps } from "./types";
import { StyledButton, StyledIconWrapper, StyledText, StyledWrapper } from "./styles";

const PaginationButton: FC<PaginationButtonProps> = ({
  $intent,
  onClick,
  icon,
  $isVisible,
  pageNum,
  pagesAmount
}) => {
  const { loadNext, loadPrevious } = useLanguage();

  const buttonText =
    $intent === "next"
      ? `${loadNext} ${pageNum + 2}/${pagesAmount}`
      : `${loadPrevious} ${pageNum}/${pagesAmount}`;

  return (
    <StyledWrapper $intent={$intent} className="pagination-button-wrapper">
      <StyledButton onClick={onClick} $isVisible={$isVisible} className="pagination-button">
        {icon && <StyledIconWrapper className="pagination-button-icon">{icon}</StyledIconWrapper>}
        <StyledText className="pagination-button-text">{buttonText}</StyledText>
      </StyledButton>
    </StyledWrapper>
  );
};

export default PaginationButton;
