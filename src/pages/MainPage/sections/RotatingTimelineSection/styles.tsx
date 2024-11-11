import { media } from "@features/adaptive/breakpoints";
import { colors } from "@utils/colors";
import { zIndexes } from "@utils/zIndexes";
import styled from "styled-components";
import { AdditionalControlsButtons } from "./components/AdditionalControlsButtons";
import { DateTitles } from "./components/DateTitles";

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
