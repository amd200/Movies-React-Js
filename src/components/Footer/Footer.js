import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="left">
              <img
                className="mb-2"
                src={require("../../assets/imgs/logo624.png")}
                width="200"
                height="30"
              />
              <p className="text-white">
                Movies & TV Shows, Online cinema <br />
                Movie database PHP Template.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="frist">
              <h6 className="text-white">Movierocket</h6>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link p-0">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="second">
              <h6 className="text-white">Browse</h6>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link p-0">
                    Tv
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0">
                    Movies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div className="third">
              <h6 className="text-white">Help</h6>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link p-0">
                    Plans & Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link p-0">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="revsred">
          <p>© Movierocket, {currentYear} : All Rights Reserved</p>
          <p>Developed by Ahmed Mohamed.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
