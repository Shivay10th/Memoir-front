import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavZIndex = 20;

interface NavMenuProp {
  openMenu: boolean;
}
export const HeaderWrapper = styled.header`
  height: 3.5rem;
  padding: 12px 24px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
  @media screen and (min-width: 480px) {
    height: 4rem;
  }
`;

export const NavSidBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "openMenu",
})<NavMenuProp>`
  height: ${({ openMenu }) => (openMenu ? "100%" : "0")};
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  position: absolute;
  left: 0;
  padding: 20px 20px;
  width: 100%;
  top: 3.5rem;
  flex-direction: column;
  background-color: #fff;
  z-index: ${NavZIndex};
  opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
  ${({ openMenu }) => openMenu && `transform:translateX(0)`}
  transition: all 200ms ease-out;
  gap: 20px;
  font-size: 14px;
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
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  width: 100%;
  text-decoration: none;
  &.active {
    color: #fff;
    background-color: #000;
  }
`;
