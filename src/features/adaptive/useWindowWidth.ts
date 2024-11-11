import { WindowResolutions } from "./breakpoints";
import { useAdaptiveContext } from "./components/AdaptiveContext";

export const useWindowWidth = (): WindowResolutions => {
  const adaptive = useAdaptiveContext();

  return adaptive.windowWidth;
};
