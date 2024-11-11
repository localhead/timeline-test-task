import { MainPage } from "@pages/MainPage";
import { GlobalStyle } from "@utils/globalStyle";
import React from "react";

export const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
};
