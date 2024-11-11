import styled, { keyframes } from "styled-components";

// Define keyframes for the fade animations
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledSwiperSlider = styled.div<{ $isFadingOut: boolean }>`
  animation: ${({ $isFadingOut }) => ($isFadingOut ? fadeOut : fadeIn)} 0.5s
    ease;
`;
