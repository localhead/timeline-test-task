import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit/Typography";
import styled from "styled-components";

export const StyledSlideEventCard = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 40px;
  gap: 10px;
  max-width: 80%;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTitle = styled(Typography).attrs({
  size: 25,
  color: "primaryBlueLight",
  forwardedAs: "span",
  nowrap: true,
})`
  font-family: Bebas Neue, Sans-Serif;

  ${media.down("desktopMedium")} {
    font-size: 20px;
  }
`;

export const StyledDescription = styled(Typography).attrs({
  size: 20,
  color: "dark0",
  ellipsis: true,
  lines: 3,
  maxLines: 3,
  lineHeightMultiplier: 1.5,
})`
  line-height: 30px;

  ${media.down("desktopMedium")} {
    font-size: 16px;
    line-height: 24px;
  }
`;
