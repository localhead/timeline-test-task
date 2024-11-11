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

export const StyledCircleWrapper = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;

  border: 1px solid ${colors.gray0};
  z-index: ${zIndexes.above3};
`;

export const StyledPoint = styled.div<{ $isActive: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
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
          width: 56px;
          height: 56px;
        `
      : css`
          background-color: ${colors.dark0};
          border: transparent;
          color: transparent;
          width: 6px;
          height: 6px;
        `}

  &:hover {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray1};
    color: ${colors.dark0};
    width: 56px;
    height: 56px;
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
`;
