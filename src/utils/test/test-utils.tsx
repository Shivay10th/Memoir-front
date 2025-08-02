import { store } from "@/redux/core/store";
import { PropsWithChildren } from "react";
import { theme } from "@/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
