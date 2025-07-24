import { IconButton } from "@mui/material";
import {
  HeaderWrapper,
  NavBar,
  NavigationLink,
  NavSidBar,
} from "./Header.style";
import { CloseIcon, MenuIcon } from "@/assets/icons";
import { useCallback, useState } from "react";
import { ROUTES_PATH } from "../core";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleSideBar = useCallback(() => {
    setOpenMenu((previous) => !previous);
  }, []);
  return (
    <HeaderWrapper>
      <NavBar>
        <div>hello</div>
        <IconButton className="icon-button" onClick={toggleSideBar}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <NavSidBar openMenu={openMenu}>
          <NavigationLink onClick={toggleSideBar} to={ROUTES_PATH.LOGIN}>
            Login
          </NavigationLink>
          <NavigationLink onClick={toggleSideBar} to={ROUTES_PATH.SIGN_UP}>
            Sign Up
          </NavigationLink>
        </NavSidBar>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
