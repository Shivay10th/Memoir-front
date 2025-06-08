import { BrowserRouter } from "react-router-dom";
import { Router, ROUTES_PATH } from "@/components";

export const App = () => {
  return (
    <BrowserRouter basename={ROUTES_PATH.BASE}>
      <Router />
    </BrowserRouter>
  );
};
