import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <h1>Welcome To My Calculator App!</h1>
      <nav className="calculator-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/list">Previous Calculations</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
