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
  position: relative;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .icon-button {
    padding: 0;
    svg {
      width: 24px;
      height: 24px;
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
  @media screen and (min-width: 480px) {
    height: 4rem;
    & .icon-button {
      display: none;
    }
  }
`;

export const BrandLogo = styled.div``;

export const NavBar = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "openMenu",
})<NavMenuProp>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 3.5rem;
  left: 0;
  z-index: ${NavZIndex};
  width: 100%;
  gap: 20px;
  padding: 20px 20px;
  background-color: #fff;
  opacity: ${({ openMenu }) => (openMenu ? 1 : 0)};
  font-size: 14px;
  @media screen and (min-width: 480px) {
    position: static;
    opacity: 1;
    flex-direction: row;
    width: max-content;
    padding: 0;
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

  @media screen and (min-width: 480px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    border: none;
  }
`;
