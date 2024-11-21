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

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/editor" element={<CustomEditor />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
