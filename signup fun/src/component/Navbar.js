import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo center">
            Logo
          </Link>
          <ul className="right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <button className="btn red">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
