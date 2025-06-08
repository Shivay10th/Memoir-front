import { IconButton } from "@mui/material";
import {
  HeaderWrapper,
  NavBar,
  NavigationLink,
  NavSidBar,
} from "./Header.style";
import { CloseIcon, MenuIcon } from "@/assets/icons";
import { useState } from "react";
import { ROUTES_PATH } from "../core";

const Header = () => {
  // const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <HeaderWrapper>
      <NavBar>
        <div>hello</div>

        <IconButton
          className="icon-button"
          onClick={() => setOpenMenu((previous) => !previous)}
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <NavSidBar openMenu={openMenu}>
          <NavigationLink to={ROUTES_PATH.LOGIN}>Login</NavigationLink>
          <NavigationLink to={ROUTES_PATH.SIGN_UP}>Sign Up</NavigationLink>
        </NavSidBar>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
