export type WindowResolutions =
  | "desktopFullHD"
  | "desktopMedium"
  | "desktopSmall"
  | "laptop"
  | "tablet"
  | "mobile";

export enum Breakpoints {
  mobile = 0,
  tablet = 600,
  laptop = 1024,
  desktopSmall = 1200,
  desktopMedium = 1540,
  desktopFullHD = 1980,
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
