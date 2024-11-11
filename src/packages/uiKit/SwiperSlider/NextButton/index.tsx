import React, { FC, memo } from "react";

import { useSwiper } from "swiper/react";
import {
  StyledBackgroundOverlay,
  StyledCaretIcon,
  StyledNextButton,
} from "./styles";

export interface NextButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

const _NextButton: FC<NextButtonProps> = (props) => {
  const swiper = useSwiper();

  const handleNextSlide = () => {
    swiper.slideNext();
  };

  return (
    <StyledNextButton onClick={handleNextSlide}>
      <StyledCaretIcon size={18} strokeWidth={2} />
      <StyledBackgroundOverlay />
    </StyledNextButton>
  );
};

export const NextButton = memo(_NextButton);
