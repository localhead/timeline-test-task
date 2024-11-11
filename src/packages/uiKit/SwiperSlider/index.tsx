import React, { FC, ReactNode, memo, useEffect, useState } from "react";

import { StyledSwiperSlider } from "./styles";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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

  const slidesPerView = 3;

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (slides !== displayedSlides) {
      setIsFadingOut(true);
      setTimeout(() => {
        setDisplayedSlides(slides);
        setIsFadingOut(false);
      }, 500);
    }
  }, [slides]);

  if (!slides && !displayedSlides) return null;

  return (
    <StyledSwiperSlider {...restProps} $isFadingOut={isFadingOut}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {displayedSlides &&
          displayedSlides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        {currentSlideIndex !== slidesPerView - 1 && <NextButton />}
      </Swiper>
    </StyledSwiperSlider>
  );
};

export const SwiperSlider = memo(_SwiperSlider);
