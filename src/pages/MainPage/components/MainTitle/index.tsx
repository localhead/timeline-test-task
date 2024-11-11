import React, { FC, PropsWithChildren, memo } from "react";

import { StyledMainTitle } from "./styles";

export interface MainTitleProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const _MainTitle: FC<MainTitleProps> = (props) => {
  const { children, ...restProps } = props;

  return <StyledMainTitle {...restProps}>{children}</StyledMainTitle>;
};

export const MainTitle = memo(_MainTitle);
