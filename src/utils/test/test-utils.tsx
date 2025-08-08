import { store } from "@/redux/core/store";
import { PropsWithChildren } from "react";
import { theme } from "@/theme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { mockServer } from "./mock-server";

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

beforeAll(() => {
  mockServer.listen();
});
afterEach(() => {
  mockServer.resetHandlers();
});
afterAll(() => {
  mockServer.close();
});

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export { store };
export { customRender as render };
