import { NavLink, useNavigate } from "react-router-dom";
import { authService } from "../../services/auth/authService";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <NavLink to={""}>Home</NavLink>
        {!authService.isAuthenticated() && (
          <>
            <NavLink to={"login"}>Login</NavLink>
            <NavLink to="signup">Sign Up</NavLink>
          </>
        )}
        {authService.isAuthenticated() && (
          <>
            <NavLink to={"editor"}>Create Blog</NavLink>
            <button
              onClick={() => {
                localStorage.removeItem("auth_token");
                navigate("/");
              }}
            >
              Log Out
            </button>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
