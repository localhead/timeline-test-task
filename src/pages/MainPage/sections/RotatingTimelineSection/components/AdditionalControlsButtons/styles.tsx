import { CaretIcon } from "@packages/icons";
import { colors } from "@utils/colors";
import { zIndexes } from "@utils/zIndexes";
import styled, { css } from "styled-components";

export const StyledAdditionalControlsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledIndexStatusContainer = styled.div`
  font-size: 20px;
`;

export const StyledCaretButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledCaretButton = styled.div<{ $isDisabled: boolean }>`
  color: ${colors.dark0};
  border: 1px solid ${colors.gray1};
  border-radius: 50%;
  padding: 12px;
  display: flex;
  cursor: pointer;
  z-index: ${zIndexes.above3};

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      border: 1px solid ${colors.gray0};
      color: ${colors.gray1};

      &:hover {
        box-shadow: none;
      }
    `}
`;

export const StyledCaretPreviousButton = styled(CaretIcon)`
  transform: rotate(90deg);
`;

export const StyledCaretNextButton = styled(CaretIcon)`
  transform: rotate(270deg);
`;
