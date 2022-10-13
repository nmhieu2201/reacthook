import React from "react";
import { NavLink } from "react-router-dom";
export default function HeaderHome() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="">
        CyberSoft
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              React Hook
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="usestatedemo">
                Use State
              </NavLink>
              <NavLink className="dropdown-item" to="useeffectdidmountdemo">
                Use Effect DidMout
              </NavLink>
              <NavLink className="dropdown-item" to="useeffectunmout">
                Use Effect Unmount
              </NavLink>
              <NavLink className="dropdown-item" to="useeffectdidupdate">
                Use Effect Did Update
              </NavLink>
              <NavLink className="dropdown-item" to="hookusecallback">
                Use CallBack Demo
              </NavLink>
              <NavLink className="dropdown-item" to="usememodemo">
                Use Memo Demo
              </NavLink>
              <NavLink className="dropdown-item" to="userefdemo">
                Use Ref Demo
              </NavLink>
              <NavLink className="dropdown-item" to="useredux">
                Use Redux Demo
              </NavLink>
              <NavLink className="dropdown-item" to="profile">
                Profile
              </NavLink>
              <NavLink className="dropdown-item" to="search">
                Search
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
