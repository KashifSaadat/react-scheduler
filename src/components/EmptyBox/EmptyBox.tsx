import { useLanguage } from "@/context/LocaleProvider";
import EmptyBoxSvg from "./empty-box.svg?react";
import { StyledText, StyledWrapper } from "./styles";
const EmptyBox = () => {
  const { feelingEmpty } = useLanguage();
  return (
    <StyledWrapper className="empty-box-wrapper">
      <EmptyBoxSvg />
      <StyledText className="empty-box-text">{feelingEmpty}</StyledText>
    </StyledWrapper>
  );
};

export default EmptyBox;
