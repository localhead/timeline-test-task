import { CaretIcon } from "@packages/icons";
import { colors } from "@utils/colors";
import { zIndexes } from "@utils/zIndexes";
import styled from "styled-components";

export const StyledNextButton = styled.div``;

export const StyledBackgroundOverlay = styled.div`
  position: absolute;
  width: 100px;
  background: ${colors.white};
  height: 100%;
  top: 0;
  right: 0;
  z-index: ${zIndexes.above3};
`;

export const StyledCaretIcon = styled(CaretIcon)`
  background: ${colors.white};
  color: ${colors.primaryBlueLight};
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  right: calc(0% + 30px);
  transform: translate(0%, -50%) rotate(270deg);

  z-index: ${zIndexes.above4};

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.5);
  }
`;
