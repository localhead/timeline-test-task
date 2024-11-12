import { media } from "@features/adaptive/breakpoints";
import { CaretIcon } from "@packages/icons";
import { colors } from "@utils/colors";
import styled, { css } from "styled-components";

export const StyledAdditionalControlsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.down("desktopSmall")} {
    // small
    gap: 10px;
  }
`;

export const StyledIndexStatusContainer = styled.div`
  font-size: 20px;

  ${media.down("desktopFullHD")} {
    // medium
    font-size: 18px;
  }

  ${media.down("desktopMedium")} {
    // small
    font-size: 14px;
  }
`;

export const StyledCaretButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  ${media.down("desktopSmall")} {
    // mob and tab
    gap: 5px;
  }
`;

export const StyledCaretButton = styled.div<{ $isDisabled: boolean }>`
  color: ${colors.dark0};
  border: 1px solid ${colors.gray1};
  border-radius: 50%;

  display: flex;
  padding: 12px;
  font-size: 25px;
  cursor: pointer;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  }

  ${media.down("desktopFullHD")} {
    // medium
    padding: 10px;
    font-size: 18px;
  }

  ${media.down("desktopMedium")} {
    // small
    padding: 10px;
    font-size: 12px;
  }
  ${media.down("desktopSmall")} {
    // small
    padding: 8px;
    font-size: 8px;
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
