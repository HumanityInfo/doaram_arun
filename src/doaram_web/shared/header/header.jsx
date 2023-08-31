import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import "./header.css"

function Header() {
  // const [activeRoute, setActiveRoute] = useState("/blog");
  //console.log(activeRoute);

  return (
    <div className="header">
      <body>
        {/* <!-- Topbar Start -->  */}

        <div className="container-fluid bg-goldweb px-0">
          <div className="row g-0 d-none d-lg-flex">
            <div className="col-lg-6 ps-5 text-start">
              <div className="h-100 d-inline-flex align-items-center text-white">
                <span>Follow Us:&nbsp;</span>
                <Link
                  to="https://twitter.com/DoAramDoGood/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.facebook.com/DoAramDoGood/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="https://www.youtube.com/@doaramdogood"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/doaramofficial/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-instagram"></i>
                </Link>

                <Link
                  to="https://www.linkedin.com/company/doaramoffical/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  to="https://www.tumblr.com/blog/doaramdogood"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-tumblr"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                <span className="fs-5 fw-bold me-2">
                  <i className="fa fa-envelop me-2"></i>Mail:
                </span>
                <span className="fs-5 fw-bold">info@doaram.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Topbar End -->

         <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light w-100 mb-3  sticky-top py-0 pe-5">
          <Link to="/" className="navbar-brand ps-5 m-2">
            <img src="imges/logo.png" alt="" className="logo" />
          </Link>
          <button
            type="button"
            className="navbar-toggler me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center "
            id="navbarCollapse"
          >
            <div className="navbar-nav">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/corporate" className="nav-item nav-link">
                Corporate Solutions
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="/insight"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  NGO
                </NavLink>
                <div className="dropdown-menu bg-light m-0">
                  <NavLink to="/insight" className="dropdown-item">
                    Power of Insights
                  </NavLink>
                  <NavLink to="/registeredngo" className="dropdown-item">
                    Registered NGO's
                  </NavLink>
                  <NavLink to="/listedngo" className="dropdown-item">
                    Listed NGO's
                  </NavLink>
                </div>
              </div>
              <NavLink to="/individuals" className="nav-item nav-link ">
                Individuals
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="/blog"
                  // to={activeRoute}
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Resources
                </NavLink>
                <div className="dropdown-menu bg-light m-0">
                  <NavLink
                    to="/blog"
                    className="dropdown-item"
                    // activeClassName="active"
                    // onClick={() => setActiveRoute("/blog")}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/faq"
                    // to={activeRoute}
                    className="dropdown-item"
                    // activeClassName="active"
                    // onClick={() => setActiveRoute("/faq")}
                  >
                    FAQ's
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>
            <div className="px-4">
              <div className="btn-group ">
                <button
                  className="btn dropdown-toggle btn-outline-warning"
                  type="button"
                  id="defaultDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Login
                </button>
                <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                  <li>
                    <a className="dropdown-item ngoPanel">
                      {" "}
                      <Link to="/ngosignin">NGO</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item corpPanel">
                      <Link to="/corpsignin">Corporate</Link>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item adminPanel">
                      <Link to="adminsignin">Admin</Link>
                    </a>
                  </li>
                </ul>
              </div>
              <a className="ngoPanel ms-1">
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- Navbar End --> */}
      </body>
    </div>
  );
}

export default Header;
