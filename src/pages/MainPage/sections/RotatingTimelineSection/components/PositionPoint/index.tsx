import React, { FC, memo } from "react";

import { PositionItem } from "../../types";
import {
  StyledPointText,
  StyledPositionPoint,
  StyledTitleText,
} from "./styles";

export interface PositionPointProps {
  className?: string;
  style?: React.CSSProperties;

  index: number;
  pos: PositionItem;
  rotation: number;
  handleClick: (index: number) => void;
  activeIndex: number;
  isActive: boolean;

  title: string;
}

const _PositionPoint: FC<PositionPointProps> = (props) => {
  const {
    pos,
    index,
    isActive,
    handleClick,
    rotation,
    activeIndex,
    title,
    ...restProps
  } = props;

  const onClickHandler = () => {
    handleClick(index);
  };

  return (
    <StyledPositionPoint
      key={index}
      className={`point-${index}`}
      style={{ top: pos.top, left: pos.left }}
      $isActive={isActive}
      onClick={onClickHandler}
      {...restProps}
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
    </StyledPositionPoint>
  );
};

export const PositionPoint = memo(_PositionPoint);
