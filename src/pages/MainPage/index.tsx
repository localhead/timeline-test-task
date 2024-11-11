import React, { FC, memo, useState } from "react";

import { Container } from "@components/Container";
import { mockData } from "../../features/events/constants";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { RotatingTimelineSection } from "./sections/RotatingTimelineSection";
import {
  StyledBackgroundInnerBorderHorizontal,
  StyledBackgroundInnerBorderVertical,
  StyledMainContent,
  StyledMainPage,
  StyledMainTitle,
  StyledSliderSection,
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

  const window = useWindowWidth();

  console.log(window);

  return (
    <Container>
      <StyledMainPage {...restProps}>
        <StyledMainContent>
          <StyledMainTitle>
            Исторические <br />
            даты
          </StyledMainTitle>
          <RotatingTimelineSection
            data={selectedDataItem}
            onChange={setActiveIndex}
            activeIndex={activeIndex}
          />
          <StyledBackgroundInnerBorderHorizontal />
          <StyledBackgroundInnerBorderVertical />
          <StyledSliderSection data={selectedDataItemContent} />
        </StyledMainContent>
      </StyledMainPage>
    </Container>
  );
};

export const MainPage = memo(_MainPage);
