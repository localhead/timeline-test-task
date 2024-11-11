import { media } from "@features/adaptive/breakpoints";
import { Typography } from "@packages/uiKit/Typography";
import styled from "styled-components";

export const StyledMainTitle = styled(Typography).attrs({
  forwardedAs: "h1",
  size: 56,
  color: "dark0",
})`
  ${media.down("desktopSmall")} {
    font-size: 40px;
  }
  ${media.down("laptop")} {
    font-size: 35px;
  }
  ${media.down("tablet")} {
    font-size: 20px;
  }
`;
