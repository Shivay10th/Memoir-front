import { Button, IconButton } from "@mui/material";
import {
  HeaderWrapper,
  NavBar,
  NavigationLink,
  NavSidBar,
} from "./Header.style";
import { CloseIcon, MenuIcon } from "@/assets/icons";
import { useCallback, useState } from "react";
import { ROUTES_PATH } from "../core";
import { useAuth } from "@/hooks";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleSideBar = useCallback(() => {
    setOpenMenu((previous) => !previous);
  }, []);
  const { isAuthenticated, logOut } = useAuth();

  return (
    <HeaderWrapper>
      <NavBar>
        <div>hello</div>
        <IconButton className="icon-button" onClick={toggleSideBar}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <NavSidBar openMenu={openMenu}>
          {!isAuthenticated ? (
            <>
              <NavigationLink onClick={toggleSideBar} to={ROUTES_PATH.LOGIN}>
                Login
              </NavigationLink>
              <NavigationLink onClick={toggleSideBar} to={ROUTES_PATH.SIGN_UP}>
                Sign Up
              </NavigationLink>
            </>
          ) : (
            <Button
              onClick={() => {
                logOut();
                toggleSideBar();
              }}
            >
              LogOut
            </Button>
          )}
        </NavSidBar>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
