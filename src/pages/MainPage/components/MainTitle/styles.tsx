import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit/Typography";
import styled from "styled-components";

export const StyledMainTitle = styled(Typography).attrs({
  forwardedAs: "h1",
  size: 56,
  color: "dark0",
})`
  ${media.down("desktopFullHD")} {
    // desktopMedium
    font-size: 48px;
  }
  ${media.down("desktopMedium")} {
    // desktopSmall
    font-size: 42px;
  }
  ${media.down("desktopSmall")} {
    //mobile
    font-size: 20px;
  }
  ${media.down("tablet")} {
    //mobile
    font-size: 20px;
  }
`;
