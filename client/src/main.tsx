import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import GlobalContextProvider from "./context/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
