import { media } from "@features/adaptive/breakpoints";
import { colors } from "@utils/colors";
import { zIndexes } from "@utils/zIndexes";
import styled from "styled-components";
import { MainTitle } from "./components/MainTitle";
import { SliderSection } from "./sections/SliderSection";

export const StyledMainPage = styled.div`
  padding-left: 322px;
  padding-right: 160px;
  height: 100vh;

  ${media.down("desktopSmall")} {
    padding: 0px 20px;
  }
`;

export const StyledMainContent = styled.div`
  border-left: 1px solid ${colors.gray3};
  border-right: 1px solid ${colors.gray3};
  height: 100%;
  width: 100%;
  position: relative;

  ${media.down("desktopSmall")} {
    border-left: none;
    border-right: none;
  }
`;

export const StyledTempDiv = styled.div`
  position: absolute;
`;

const innerContentPadding = 70;

export const StyledMainTitle = styled(MainTitle)`
  position: absolute;
  top: calc(10% + 0px);
  left: ${innerContentPadding}px;

  &::before {
    content: "";
    position: absolute;
    left: -${innerContentPadding}px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(74, 116, 231, 1) 0%,
      rgba(97, 113, 223, 1) 23%,
      rgba(160, 104, 198, 1) 48%,
      rgba(195, 99, 185, 1) 76%,
      rgba(239, 93, 168, 1) 100%
    );
  }

  ${media.down("desktopSmall")} {
    left: 0px;
    &::before {
      content: "";
      display: none;
    }
  }
`;

export const StyledBackgroundInnerBorders = styled.span`
  background: ${colors.gray3};
  position: absolute;

  z-index: ${zIndexes.above1};
`;

export const StyledBackgroundInnerBorderHorizontal = styled(
  StyledBackgroundInnerBorders
)`
  height: 1px;

  width: 100%;

  top: 50%;
  transform: translate(0%, -0%);
`;

export const StyledBackgroundInnerBorderVertical = styled(
  StyledBackgroundInnerBorders
)`
  height: 100%;

  width: 1px;

  top: 0%;
  left: 50%;
  transform: translate(0%, -0%);

  z-index: ${zIndexes.above1};
`;

export const StyledSliderSection = styled(SliderSection)`
  position: absolute;
  width: calc(100% - ${innerContentPadding}px);
  bottom: 0%;
  left: ${innerContentPadding}px;

  ${media.down("desktopSmall")} {
    left: 0px;
    width: 100%;
    bottom: 0%;
    border-top: 1px solid ${colors.gray3};
    padding-top: 28px;

    padding-bottom: 100px;
  }

  ${media.down("tablet")} {
    // mobile

    width: 100%;
    bottom: 0%;
  }
`;
