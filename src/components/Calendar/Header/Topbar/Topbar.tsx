import { useTheme } from "styled-components";
import { FC, MouseEventHandler } from "react";
import { Icon, IconButton, Toggle } from "@/components";
import { useCalendar } from "@/context/CalendarProvider";
import { useLanguage } from "@/context/LocaleProvider";
import {
  NavigationWrapper,
  Wrapper,
  NavBtn,
  Today,
  Zoom,
  Filters,
  OptionsContainer
} from "./styles";
import { TopbarProps } from "./types";

const Topbar: FC<TopbarProps> = ({ width, showThemeToggle, toggleTheme }) => {
  const { topbar } = useLanguage();
  const {
    data,
    config,
    handleGoNext,
    handleGoPrev,
    handleGoToday,
    zoomIn,
    zoomOut,
    isNextZoom,
    isPrevZoom,
    handleFilterData,
    onClearFilterData
  } = useCalendar();
  const { colors } = useTheme();
  const { filterButtonState = -1 } = config;

  const handleClearFilters: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onClearFilterData?.();
  };

  return (
    <Wrapper width={width} className="topbar-wrapper">
      <Filters className="topbar-filters">
        {filterButtonState >= 0 && (
          <IconButton
            $variant={filterButtonState ? "filled" : "outlined"}
            iconName="filter"
            width="16"
            height="16"
            onClick={handleFilterData}
          >
            {topbar.filters}
            {!!filterButtonState && (
              <span onClick={handleClearFilters}>
                <Icon iconName="close" height="16" width="16" fill={colors.textSecondary} />
              </span>
            )}
          </IconButton>
        )}
      </Filters>
      <NavigationWrapper className="topbar-navigation">
        <NavBtn disabled={!data?.length} onClick={handleGoPrev} className="topbar-nav-prev">
          <Icon iconName="arrowLeft" height="15" fill={colors.textPrimary} />
          {topbar.prev}
        </NavBtn>
        <Today onClick={handleGoToday} className="topbar-today">{topbar.today}</Today>
        <NavBtn disabled={!data?.length} onClick={handleGoNext} className="topbar-nav-next">
          {topbar.next}
          <Icon iconName="arrowRight" height="15" fill={colors.textPrimary} />
        </NavBtn>
      </NavigationWrapper>
      <OptionsContainer className="topbar-options">
        {showThemeToggle && <Toggle toggleTheme={toggleTheme} />}
        <Zoom className="topbar-zoom">
          {topbar.view}
          <IconButton
            isDisabled={!isPrevZoom}
            onClick={zoomOut}
            $isFullRounded
            iconName="subtract"
            width="14"
          />
          <IconButton
            isDisabled={!isNextZoom}
            onClick={zoomIn}
            $isFullRounded
            iconName="add"
            width="14"
          />
        </Zoom>
      </OptionsContainer>
    </Wrapper>
  );
};
export default Topbar;
