import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CustomEditor from "./components/CustomEditor/CustomEditor";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Layout from "./components/Layout/layout";
import SignUp from "./screens/SignUp";
import { AuthRoute } from "./routes/routes";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
        <Route element={<AuthRoute requiredAuth={true} />}>
          <Route path="/editor" element={<CustomEditor />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
