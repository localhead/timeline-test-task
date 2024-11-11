import React, { FC, memo } from "react";

import { DataContentItem } from "@/features/events/types";
import { useGetSliderEventCards } from "@features/events/hooks/useGetSliderEventCards";
import { SwiperSlider } from "@packages/uiKit/SwiperSlider";
import { StyledSliderSection } from "./styles";
//import "./styles.css";

export interface SliderSectionProps {
  className?: string;
  style?: React.CSSProperties;

  data: DataContentItem[];
}

const _SliderSection: FC<SliderSectionProps> = (props) => {
  const { data, ...restProps } = props;

  const items = data && useGetSliderEventCards(data);

  return (
    <StyledSliderSection {...restProps}>
      <SwiperSlider slides={items} />
    </StyledSliderSection>
  );
};

export const SliderSection = memo(_SliderSection);
