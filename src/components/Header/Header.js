import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies, searchMovies } from "../../redux/actions/MovieAction";

function Header() {
  const dispatch = useDispatch();

  const search = (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(searchMovies(word));
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={require("../../assets/imgs/logo624.png")}
            width="180"
            height="30"
            alt=""
          />
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-4" aria-current="page" href="#">
                Catalog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">
                Pricing plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-felx align-items-center">
            <div className="input-group parent d-felx align-items-center">
              <input
                onChange={(e) => search(e.target.value)}
                placeholder="I'm looking for..."
                type="text"
                className="form-control input border-0"
              />
              <svg
                className="search"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
              </svg>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
