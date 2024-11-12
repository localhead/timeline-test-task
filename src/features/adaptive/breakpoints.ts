export type WindowResolutions =
  | "desktopFullHD"
  | "desktopMedium"
  | "desktopSmall"
  | "tablet"
  | "mobile";

export enum Breakpoints {
  mobile = 0,
  tablet = 600,
  desktopSmall = 1250,
  desktopMedium = 1540,
  desktopFullHD = 1919,
}

export const media = {
  breakpoints: Breakpoints,
  up: (value: keyof typeof Breakpoints | number): string => {
    const breakpoint = typeof value === "number" ? value : Breakpoints[value];

    return `@media screen and (min-width: ${breakpoint}px)`;
  },
  down: (value: keyof typeof Breakpoints | number): string => {
    const breakpoint = typeof value === "number" ? value : Breakpoints[value];

    return `@media screen and (max-width: ${breakpoint}px)`;
  },
};
