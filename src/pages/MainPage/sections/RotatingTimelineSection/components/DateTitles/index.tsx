import { gsap } from "gsap";
import React, { FC, memo, useEffect, useState } from "react";
import { StyledDateTitles, StyledTitle } from "./styles";

export interface DateTitlesProps {
  className?: string;
  style?: React.CSSProperties;

  from: string;
  till: string;
}

const _DateTitles: FC<DateTitlesProps> = (props) => {
  const { from, till, ...restProps } = props;

  const [currentValueFrom, setCurrentValueFrom] = useState<string>(from);
  const [currentValueTill, setCurrentValueTill] = useState<string>(till);

  useEffect(() => {
    gsap.to(
      { value: currentValueFrom },
      {
        value: from,
        duration: 1,
        ease: "power1.out",
        onUpdate: function () {
          setCurrentValueFrom(Math.round(this.targets()[0].value).toString());
        },
      }
    );
    gsap.to(
      { value: currentValueTill },
      {
        value: till,
        duration: 1,
        ease: "power1.out",
        onUpdate: function () {
          setCurrentValueTill(Math.round(this.targets()[0].value).toString());
        },
      }
    );
  }, [from]);

  return (
    <StyledDateTitles {...restProps}>
      <StyledTitle $color="blue">{currentValueFrom}</StyledTitle>
      <StyledTitle $color="pink">{currentValueTill}</StyledTitle>
    </StyledDateTitles>
  );
};

export const DateTitles = memo(_DateTitles);
