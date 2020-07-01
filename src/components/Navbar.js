import React, { useState } from "react";
import NavbarContainer from "components/NavbarContainer";
import Link from "next/link";
import { useAuth } from "util/auth.js";

function Navbar(props) {
  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo"></img>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
