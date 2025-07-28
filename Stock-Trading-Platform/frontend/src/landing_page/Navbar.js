import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link to="/" class="navbar-brand" >
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup" onClick={() => window.scrollTo(0, 0)}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product" onClick={() => window.scrollTo(0, 0)}>
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing" onClick={() => window.scrollTo(0, 0)}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support" onClick={() => window.scrollTo(0, 0)}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
