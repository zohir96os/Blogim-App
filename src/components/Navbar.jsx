import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container header-container">
        <header>
          <div className="logo">
            <Link to={"/"}>Blogim</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/create"}>Create</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
