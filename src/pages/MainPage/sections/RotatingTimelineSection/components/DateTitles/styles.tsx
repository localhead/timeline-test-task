import { Typography } from "@packages/uiKit/Typography";
import { colors } from "@utils/colors";
import { zIndexes } from "@utils/zIndexes";
import styled from "styled-components";

export const StyledDateTitles = styled.div`
  display: flex;
  gap: 80px;
  z-index: ${zIndexes.above2};
`;

export const StyledTitle = styled(Typography).attrs({
  forwardedAs: "span",
  size: 200,
  weight: 700,
})<{ $color: "blue" | "pink" }>`
  color: ${({ $color }) => getColor($color)};
  letter-spacing: -3px;
  user-select: none;
`;

const getColor = ($color: "blue" | "pink") => {
  switch ($color) {
    case "pink":
      return colors.primaryPink;
    case "blue":
    default:
      return colors.primaryBlue;
  }
};
