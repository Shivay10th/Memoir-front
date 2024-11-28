import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { Container } from "../styles/Container.styled";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
