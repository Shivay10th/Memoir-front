import { Outlet } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "../styles/Global.style";
import { NavBar } from "../Navbar/Header.style";
import Header from "../Navbar/Header";
const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
