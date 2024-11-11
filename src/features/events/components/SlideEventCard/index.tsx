import React, { FC, memo } from "react";

import {
  StyledDescription,
  StyledSlideEventCard,
  StyledTextContainer,
  StyledTitle,
} from "./styles";

export interface SlideEventCardProps {
  className?: string;
  style?: React.CSSProperties;

  title: string;
  description: string;
}

const _SlideEventCard: FC<SlideEventCardProps> = (props) => {
  const { title, description, ...restProps } = props;

  return (
    <StyledSlideEventCard {...restProps}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledSlideEventCard>
  );
};

export const SlideEventCard = memo(_SlideEventCard);
