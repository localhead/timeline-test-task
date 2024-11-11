import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit/Typography";
import { colors } from "@utils/colors";
import { zIndexes } from "@utils/zIndexes";
import styled, { css } from "styled-components";
import { AdditionalControlsButtons } from "./components/AdditionalControlsButtons";
import { DateTitles } from "./components/DateTitles";
import { ROTATION_INDEX } from "./constants.";

export const StyledRotatingTimelineSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const radiusFullHD = 530;
const radiusMedium = 430;
const radiusSmall = 340;

export const StyledCircleWrapper = styled.div`
  position: relative;
  width: ${radiusFullHD}px;
  height: ${radiusFullHD}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;

  border: 1px solid ${colors.gray0};
  z-index: ${zIndexes.above3};

  ${media.down("desktopFullHD")} {
    // desktopMedium
    width: ${radiusMedium}px;
    height: ${radiusMedium}px;
  }
  ${media.down("desktopMedium")} {
    // desktopSmall
    width: ${radiusSmall}px;
    height: ${radiusSmall}px;
  }
`;

const pointRadiusFullHD = 56;
const pointRadiusMedium = 42;
const pointRadiusSmall = 32;

const fzRadiusFullHD = 20;
const fzRadiusMedium = 16;
const fzRadiusSmall = 14;

export const StyledPoint = styled.div<{ $isActive: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fzRadiusFullHD}px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease,
    border 0.3s ease, color 0.3s ease;

  ${({ $isActive }) =>
    $isActive
      ? css`
          border: 1px solid ${colors.gray1};
          background-color: ${colors.white};
          color: ${colors.dark0};
          width: ${pointRadiusFullHD}px;
          height: ${pointRadiusFullHD}px;
          ${media.down("desktopFullHD")} {
            // desktopMedium
            font-size: ${fzRadiusMedium}px;
            width: ${pointRadiusMedium}px;
            height: ${pointRadiusMedium}px;
          }
          ${media.down("desktopMedium")} {
            // desktopSmall
            font-size: ${fzRadiusSmall}px;
            width: ${pointRadiusSmall}px;
            height: ${pointRadiusSmall}px;
          }
        `
      : css`
          background-color: ${colors.dark0};
          border: transparent;
          color: transparent;

          width: 6px;
          height: 6px;

          ${media.down("desktopFullHD")} {
            // desktopMedium
            font-size: ${fzRadiusMedium}px;
          }
          ${media.down("desktopMedium")} {
            // desktopSmall
            font-size: ${fzRadiusSmall}px;
          }
        `}

  &:hover {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray1};
    color: ${colors.dark0};
    width: ${pointRadiusFullHD}px;
    height: ${pointRadiusFullHD}px;
    ${media.down("desktopFullHD")} {
      // desktopMedium
      font-size: 18px;
      width: ${pointRadiusMedium}px;
      height: ${pointRadiusMedium}px;
    }
    ${media.down("desktopMedium")} {
      // desktopSmall
      font-size: 14px;
      width: ${pointRadiusSmall}px;
      height: ${pointRadiusSmall}px;
    }
  }
`;

export const StyledPointText = styled.span<{
  $rotation: number;
  $isActive: boolean;
  $activeIndex: number;
  $index: number;
}>`
  user-select: none;
  ${({ $rotation, $isActive, $activeIndex, $index }) =>
    $isActive
      ? css`
          transform: rotate(${$rotation}deg);
        `
      : css`
          transform: rotate(
            ${$rotation - ($index - $activeIndex) * ROTATION_INDEX}deg
          );
        `};
`;

export const StyledTitleText = styled(Typography).attrs({
  size: 20,
  weight: 700,
})<{ $isActive: boolean }>`
  position: absolute;
  top: 0%;
  left: calc(100% + 36px);

  ${media.down("desktopFullHD")} {
    // desktopMedium
    font-size: 20px;
  }
  ${media.down("desktopMedium")} {
    // desktopSmall
    font-size: 16px;
  }

  ${({ $isActive }) =>
    $isActive
      ? css`
          opacity: 1;
          transform: translateX(0);
          transition: opacity 3s ease, transform 3s ease;
        `
      : css`
          opacity: 0;
          transform: translateX(-10px);
          transition: none;
        `}
`;

export const StyledDateTitles = styled(DateTitles)`
  position: absolute;
`;

export const StyledAdditionalControlsButtons = styled(
  AdditionalControlsButtons
)`
  position: absolute;
  left: 70px;
  top: calc(72%);
  transform: translate(0%, -75%);
  z-index: ${zIndexes.above4};
`;
