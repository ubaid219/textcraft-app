import React from "react";
import textcraft from "./textcraft.png"

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand mx-5"
            style={{ fontSize: "30px" }}
            
          >
         <img src={textcraft} style={{height:"38px"}}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } mx-5`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.labelText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
