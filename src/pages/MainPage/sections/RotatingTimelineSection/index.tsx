import React, { FC, memo, useEffect, useRef, useState } from "react";

import { DataItem } from "@/features/events/types";
import { gsap } from "gsap";
import { ROTATION_INDEX } from "./constants.";
import {
  StyledAdditionalControlsButtons,
  StyledCircleWrapper,
  StyledDateTitles,
  StyledPoint,
  StyledPointText,
  StyledRotatingTimelineSection,
  StyledTitleText,
} from "./styles";

const initialPositions = [
  { top: "10%", left: "80%" },
  { top: "50%", left: "100%" },
  { top: "90%", left: "80%" },
  { top: "90%", left: "20%" },
  { top: "50%", left: "0%" },
  { top: "10%", left: "20%" },
];

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
    //if (index === activeIndex) return;

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

  return (
    <StyledRotatingTimelineSection {...restProps}>
      <StyledCircleWrapper ref={circleRef}>
        {positions.map((pos, index) => {
          const isActive = index === activeIndex;
          const rotation = index * ROTATION_INDEX;

          return (
            <StyledPoint
              key={index}
              className={`point-${index}`}
              style={{ top: pos.top, left: pos.left }}
              $isActive={isActive}
              onClick={() => handleClick(index)}
            >
              <StyledPointText
                $isActive={isActive}
                $rotation={rotation}
                $activeIndex={activeIndex}
                $index={index}
              >
                {index + 1}
                <StyledTitleText $isActive={isActive}>{title}</StyledTitleText>
              </StyledPointText>
            </StyledPoint>
          );
        })}
      </StyledCircleWrapper>
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
