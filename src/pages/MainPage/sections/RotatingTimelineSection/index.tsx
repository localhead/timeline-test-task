import React, { FC, memo, useEffect, useRef, useState } from "react";

import { DataItem } from "@/features/events/types";
import { useWindowWidth } from "@features/adaptive/useWindowWidth";
import { gsap } from "gsap";
import { ROTATION_INDEX, initialPositions } from "./constants";
import { useGetPositionsItems } from "./hooks/useGetPositionsItems";
import {
  StyledAdditionalControlsButtons,
  StyledCircleWrapper,
  StyledDateTitles,
  StyledRotatingTimelineSection,
} from "./styles";

export interface RotatingTimelineSectionProps {
  className?: string;
  style?: React.CSSProperties;

  data: DataItem;
  activeIndex: number;
  onChange: (index: number) => void;
}

const _RotatingTimelineSection: FC<RotatingTimelineSectionProps> = (props) => {
  const { data, onChange, activeIndex, ...restProps } = props;
  const circleRef = useRef<HTMLDivElement>(null);

  const [positions] = useState(initialPositions);

  const [currentRotation, setCurrentRotation] = useState(0);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;

    const pointsCount = positions.length;
    const clockwiseSteps = (index - activeIndex + pointsCount) % pointsCount;
    const counterClockwiseSteps =
      (activeIndex - index + pointsCount) % pointsCount;

    const rotationSteps =
      clockwiseSteps <= counterClockwiseSteps
        ? clockwiseSteps
        : -counterClockwiseSteps;

    const angleToRotate = rotationSteps * ROTATION_INDEX;

    onChange(index);

    const newRotation = currentRotation - angleToRotate;
    setCurrentRotation(newRotation);

    gsap.to(circleRef.current, {
      rotate: newRotation,
      duration: 1,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    handleClick(activeIndex);
  }, [activeIndex]);

  const title = data && data.title;
  const dateFrom = data && data.dateFrom;
  const dateTill = data && data.dateTill;

  const positionsLength = positions.length;

  const items = useGetPositionsItems(
    positions,
    activeIndex,
    handleClick,
    title
  );

  const widthType = useWindowWidth();
  const isMobile = widthType === "mobile";

  return (
    <StyledRotatingTimelineSection {...restProps}>
      {!isMobile && (
        <StyledCircleWrapper ref={circleRef}>{items}</StyledCircleWrapper>
      )}
      <StyledAdditionalControlsButtons
        activeIndex={activeIndex}
        indexLength={positionsLength}
        onNextPosition={() => handleClick(activeIndex + 1)}
        onPrevPosition={() => handleClick(activeIndex - 1)}
      />
      {data && <StyledDateTitles from={dateFrom} till={dateTill} />}
    </StyledRotatingTimelineSection>
  );
};

export const RotatingTimelineSection = memo(_RotatingTimelineSection);
