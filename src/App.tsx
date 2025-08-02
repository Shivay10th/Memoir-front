import { BrowserRouter } from "react-router-dom";
import { Router, ROUTES_PATH, Toast } from "@/components";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./redux/core/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={ROUTES_PATH.BASE}>
          <CssBaseline />
          <Toast />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
