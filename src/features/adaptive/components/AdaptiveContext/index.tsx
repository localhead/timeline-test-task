import { Breakpoints, WindowResolutions } from "@features/adaptive/breakpoints";
import { useWindow } from "@features/adaptive/hooks/useWindow";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const getWindowWidth = (windowWidthPx: number): WindowResolutions => {
  switch (true) {
    case windowWidthPx >= Breakpoints.desktopFullHD:
      return "desktopFullHD";
    case windowWidthPx >= Breakpoints.desktopMedium:
      return "desktopMedium";
    case windowWidthPx >= Breakpoints.desktopSmall:
      return "desktopSmall";
    default:
      return "mobile";
  }
};

const Context = createContext<{
  windowWidth: WindowResolutions;
}>({
  windowWidth: "desktopMedium",
});

interface AdaptiveContextProps extends PropsWithChildren {}

export const AdaptiveContext: FC<AdaptiveContextProps> = ({ children }) => {
  const window = useWindow();

  const initialWidth = window ? window.innerWidth : Breakpoints.desktopMedium;

  const [windowWidth, setWindowWidth] = useState<WindowResolutions>(
    getWindowWidth(initialWidth)
  );

  useEffect(() => {
    if (!window) return;

    const handleResize = () => {
      const newWidth = getWindowWidth(window.innerWidth);
      setWindowWidth(newWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window]);

  const value = useMemo(() => ({ windowWidth }), [windowWidth]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAdaptiveContext = () => useContext(Context);
