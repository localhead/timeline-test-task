import React, { FC, ReactNode, memo, useEffect, useState } from "react";
import { StyledSwiperSlider } from "./styles";

import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperModule } from "swiper/types";
import { NextButton } from "./NextButton";

export interface SwiperSliderProps {
  className?: string;
  style?: React.CSSProperties;
  slides: ReactNode[];
}

const _SwiperSlider: FC<SwiperSliderProps> = (props) => {
  const { slides, ...restProps } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayedSlides, setDisplayedSlides] = useState(slides);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const width = useWindowWidth();
  const isMobile = width === "mobile";
  const isTablet = width === "tablet";

  const slidesPerView = isMobile || isTablet ? 2 : 3;

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  const swiperModules: SwiperModule[] = [];

  useEffect(() => {
    if (isMobile || isTablet) {
      swiperModules.push(Pagination);
    }
  }, []);

  useEffect(() => {
    if (slides !== displayedSlides) {
      setIsFadingOut(true);
      setTimeout(() => {
        setDisplayedSlides(slides);
        setIsFadingOut(false);
      }, 500);
    }
  }, [slides]);

  const isNextButton = currentSlideIndex !== slidesPerView - 1;

  if (!slides && !displayedSlides) return null;

  return (
    <StyledSwiperSlider {...restProps} $isFadingOut={isFadingOut}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        onSlideChange={handleSlideChange}
        className="mySwiper"
        modules={isMobile || isTablet ? [Pagination] : []}
      >
        {displayedSlides &&
          displayedSlides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        {isNextButton && !isMobile && !isTablet && <NextButton />}
      </Swiper>
      <div className="custom-pagination" />
    </StyledSwiperSlider>
  );
};

export const SwiperSlider = memo(_SwiperSlider);
