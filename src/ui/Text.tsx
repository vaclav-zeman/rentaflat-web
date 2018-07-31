import styled, { css } from "styled-components";
import { Box } from "grid-styled";
import { ThemedProps } from "../theme";

export enum sizes {
  SMALL,
  MEDIUM,
  LARGE
}

export enum colors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WHITE = "white"
}

type fontWeights = 300 | 400 | 500 | 600 | 700;

type Props = {
  color?: colors;
  fontWeight?: fontWeights;
  size?: sizes;
};

const getSize = (size = sizes.MEDIUM) =>
  ({
    [sizes.SMALL]: [0, 1],
    [sizes.MEDIUM]: [1, 2],
    [sizes.LARGE]: [2, 3]
  }[size]);

const textModifiers = css`
  ${(p: ThemedProps<Props>) => p.fontWeight && `font-weight: ${p.fontWeight};`};
  ${(p: ThemedProps<Props>) => p.color && `color: ${p.theme[p.color]};`};
`;

export default styled(Box).attrs({
  fontSize: (p: ThemedProps<Props>) => getSize(p.size)
})`
  ${textModifiers};
`;
