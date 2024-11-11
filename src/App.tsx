import { AdaptiveContext } from "@features/adaptive/components/AdaptiveContext";
import { MainPage } from "@pages/MainPage";
import { GlobalStyle } from "@utils/globalStyle";
import React from "react";

export const App: React.FC = () => {
  return (
    <div className="App">
      <AdaptiveContext>
        <GlobalStyle />
        <MainPage />
      </AdaptiveContext>
    </div>
  );
};
