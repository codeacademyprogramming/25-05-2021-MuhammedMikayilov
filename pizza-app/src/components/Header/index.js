import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
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
                <span className="nav-link">Payments</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  About us
                </span>
              </li>

              <li className="nav-item">
                <span className="nav-link" href="#">
                  Contacts
                </span>
              </li>
            </ul>
          </div>
          <span className="navbar-brand m-0" href="#">
            <img
              src={process.env.PUBLIC_URL + "/imgs/logo.png"}
              alt="logo"
              className="img-fluid"
            />
          </span>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mr-1">
                <span className="nav-link active" href="#">
                  Daily 11am - 9pm
                </span>
              </li>
              <li className="nav-item mx-1">
                <span className="nav-link" href="#">
                  <div className="icon-phone">
                    <img
                      src={process.env.PUBLIC_URL + "/imgs/icon/phone.png"}
                      alt="phone icon"
                      className="img-fluid"
                    />
                  </div>
                </span>
              </li>
              <li className="nav-item ml-1">
                <span className="nav-link text-bold" href="#">
                  0 800 33 08 98
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
