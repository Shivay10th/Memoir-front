import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <Link to={""}>Home</Link>
        {!localStorage.getItem("auth_token") && (
          <>
            <Link to={"login"}>Login</Link>
            <Link to="signup">Sign Up</Link>
          </>
        )}
        {localStorage.getItem("auth_token") && (
          <>
            <Link to={"editor"}>Create Blog</Link>
            <button
              onClick={() => {
                localStorage.removeItem("auth_token");
              }}
            >
              Log Out
            </button>
          </>
        )}
      </ul>
    </>
  );
};

export default Nav;
