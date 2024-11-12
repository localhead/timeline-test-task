import { media } from "@features/adaptive/breakpoints";
import { colors } from "@utils/colors";
import styled, { keyframes } from "styled-components";

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

  .custom-pagination {
    position: absolute;

    display: flex;
    justify-content: center;
    width: 100%;

    ${media.down("desktopSmall")} {
      // for tablet
      bottom: calc(10%);
    }
  }

  .custom-pagination .swiper-pagination-bullet {
    background-color: ${colors.gray0};
    opacity: 0.7;
    width: 6px;
    height: 6px;
    margin: 0 4px;
    transition: opacity 0.3s, background-color 0.3s;
  }

  .custom-pagination .swiper-pagination-bullet-active {
    background-color: ${colors.dark0};
    opacity: 1;
  }
`;

export const StyledCustomPagination = styled.div``;
