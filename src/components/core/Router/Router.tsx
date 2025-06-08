import { Route, Routes } from "react-router-dom";
import { ROUTES_PATH } from "./Router.data";
import { AuthRoute } from "./ProtectedRoute";
import { CustomEditor, Layout } from "@/components";
import { Home, Login, SignUp } from "@/screens";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES_PATH.BASE} element={<Layout />}>
        <Route element={<Home />} />
        <Route path={ROUTES_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTES_PATH.SIGN_UP} element={<SignUp />} />
        <Route element={<AuthRoute />}>
          <Route path={ROUTES_PATH.EDITOR} element={<CustomEditor />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default Router;
