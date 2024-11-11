import React, { FC, memo, useState } from "react";

import { Container } from "@components/Container";
import { mockData } from "../../features/events/constants";

import { useGetWindowWidth } from "@features/adaptive/hooks/useGetWindowWidth";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { RotatingTimelineSection } from "./sections/RotatingTimelineSection";
import {
  StyledBackgroundInnerBorderHorizontal,
  StyledBackgroundInnerBorderVertical,
  StyledMainContent,
  StyledMainPage,
  StyledMainTitle,
  StyledSliderSection,
  StyledTempDiv,
} from "./styles";

export interface MainPageProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MainPage: FC<MainPageProps> = (props) => {
  const { ...restProps } = props;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const selectedDataItem = mockData.find((item) => item.id === activeIndex);
  const selectedDataItemContent = selectedDataItem && selectedDataItem.content;

  const widthType = useWindowWidth();

  const { windowWidth } = useGetWindowWidth();

  const isMobile = widthType === "mobile";

  return (
    <Container>
      <StyledMainPage {...restProps}>
        <StyledMainContent>
          <StyledTempDiv>
            {windowWidth} {widthType}
          </StyledTempDiv>

          <StyledMainTitle>
            Исторические <br />
            даты
          </StyledMainTitle>
          <RotatingTimelineSection
            data={selectedDataItem}
            onChange={setActiveIndex}
            activeIndex={activeIndex}
          />
          {!isMobile && (
            <>
              <StyledBackgroundInnerBorderHorizontal />
              <StyledBackgroundInnerBorderVertical />
            </>
          )}

          <StyledSliderSection data={selectedDataItemContent} />
        </StyledMainContent>
      </StyledMainPage>
    </Container>
  );
};

export const MainPage = memo(_MainPage);
