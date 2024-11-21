import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
