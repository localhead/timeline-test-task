import React, { FC, memo } from "react";

import {
  StyledAdditionalControlsButtons,
  StyledCaretButton,
  StyledCaretButtonContainer,
  StyledCaretNextButton,
  StyledCaretPreviousButton,
  StyledIndexStatusContainer,
} from "./styles";

export interface AdditionalControlsButtonsProps {
  className?: string;
  style?: React.CSSProperties;

  activeIndex: number;
  indexLength: number;
  onNextPosition: () => void;
  onPrevPosition: () => void;
}

const _AdditionalControlsButtons: FC<AdditionalControlsButtonsProps> = (
  props
) => {
  const {
    activeIndex,
    indexLength,
    onPrevPosition,
    onNextPosition,
    ...restProps
  } = props;

  const caretStroke = 2;

  const isPreviousButtonDisabled = activeIndex === 0;
  const isNextButtonDisabled = activeIndex + 1 === indexLength;

  const onNextClickHandler = () => {
    if (isNextButtonDisabled) return;

    onNextPosition();
  };

  const onPreviousClickHandler = () => {
    if (isPreviousButtonDisabled) return;

    onPrevPosition();
  };

  return (
    <StyledAdditionalControlsButtons {...restProps}>
      <StyledIndexStatusContainer>
        {`0${activeIndex + 1} / 0${indexLength}`}
      </StyledIndexStatusContainer>
      <StyledCaretButtonContainer>
        <StyledCaretButton
          $isDisabled={isPreviousButtonDisabled}
          onClick={onPreviousClickHandler}
        >
          <StyledCaretPreviousButton strokeWidth={caretStroke} />
        </StyledCaretButton>
        <StyledCaretButton
          $isDisabled={isNextButtonDisabled}
          onClick={onNextClickHandler}
        >
          <StyledCaretNextButton strokeWidth={caretStroke} />
        </StyledCaretButton>
      </StyledCaretButtonContainer>
    </StyledAdditionalControlsButtons>
  );
};

export const AdditionalControlsButtons = memo(_AdditionalControlsButtons);
