import React, { FC, PropsWithChildren, memo } from "react";

import { StyledContainer } from "./styles";

export interface ContainerProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const _Container: FC<ContainerProps> = (props) => {
  const { children, ...restProps } = props;

  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export const Container = memo(_Container);
