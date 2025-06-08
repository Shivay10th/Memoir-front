import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavMenuProp {
  openMenu: boolean;
}
export const HeaderWrapper = styled.header`
  height: 3.5rem;
  padding: 12px 24px;
  @media screen and (min-width: 480px) {
    height: 4rem;
  }
`;

export const NavSidBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "openMenu",
})<NavMenuProp>`
  position: absolute;
  left: 0;
  padding: 0 20px;
  width: 100%;
  top: 3.5rem;
  display: flex;
  opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
  ${({ openMenu }) => openMenu && `transform:translateX(0)`}
  transition: all 200ms ease-out;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .icon-button {
    padding: 0;
    svg {
      width: 24px;
      height: 24px;
      fill: #000;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  color: green;
  &.active {
    color: red;
  }
`;
