import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  const User_Types = {
    NGO: "NGO User",
    CORP: "Corp User",
    ADMIN: "Admin User",
  };
  //Curent date for dashboard
  const current = new Date();
  const toDay = `${current.getDate()} / ${
    current.getMonth() + 1
  } / ${current.getFullYear()}`;
  return (
    <nav className="main-header navbar navbar navbar-expand navbar-white navbar-light  fixed-top fontfamily">
      <ul className="navbar-nav" style={{ marginBottom: "0px" }}>
        <li className="nav-item px-3">
          <Link
            to="#"
            className="nav-linkheadernca"
            data-widget="pushmenu"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto align-items-center">
        <li className="nav-item px-2">
          <Link
            to="#"
            className="nav-linkheadernca"
            data-widget="navbar-search"
            role="button"
          >
            <i className="fas fa-search"></i>
          </Link>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search for items here..."
                  aria-label="Search for items here..."
                />
                <div className="input-group-append">
                  <button className="btnnca btn-navbar" type="submit">
                    <i className="fas fa-search themeCol-pink"></i>
                  </button>
                  <button
                    className="btnnca btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        {props.type === User_Types.NGO ? (
          <>
            <li className="nav-item px-2">
              <div className="btn-group">
                <button
                  className="btnnca btn-pink btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                  Profile
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Logged-In Date: {toDay}</a>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/NGO_Profile">
                      Account Setting
                    </NavLink>
                  </li>
                  <li className="bg-gold">
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="bg-gold">
                    <NavLink className="dropdown-item" to="/ngosignin">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item px-2">
              <Link to="/NGO_Plan">
                {" "}
                <div className="btn-group">
                  <button
                    className="btnnca btn-gold btn-sm  d-flex  align-items-center mx-1"
                    type="button"
                  >
                    <i className="fa fa-rocket me-1" aria-hidden="true"></i>{" "}
                    Upgrade
                  </button>
                </div>
              </Link>
            </li>
          </>
        ) : null}
        {props.type === User_Types.CORP? (
          <>
            <li className="nav-item px-2">
              <div className="btn-group">
                <button
                  className="btnnca btn-pink btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                  Profile
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Logged-In Date: {toDay}</a>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/NGO_Profile">
                      Account Setting
                    </NavLink>
                  </li>
                  <li className="bg-gold">
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="bg-gold">
                    <NavLink className="dropdown-item" to="/corpsignin">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item px-2">
              <Link to="/NGO_Plan">
                {" "}
                <div className="btn-group">
                  <button
                    className="btnnca btn-gold btn-sm buttonst d-flex  align-items-center mx-1"
                    type="button"
                  >
                    <i className="fa fa-rocket me-1" aria-hidden="true"></i>{" "}
                    Upgrade
                  </button>
                </div>
              </Link>
            </li>
          </>
        ) : null}
        {props.type === User_Types.ADMIN ? (
          <>
            <li class="nav-item px-2">
              <div class="btn-group">
                <button
                  class="btnnca btn-pink btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-universal-access" aria-hidden="true"></i>{" "}
                  Administrator
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">Logged-In Date: {toDay}</a>
                  </li>
                  <li>
                    <a class="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <a class="dropdown-item">Something else here</a>
                  </li>
                  <li className="bg-gold">
                    <hr class="dropdown-divider" />
                  </li>
                  <li className="bg-gold">
                    <Link to="/adminsignin" class="dropdown-item">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </>
        ) : null}
        <li className="nav-item dropdown px-2">
          <Link to="#" className="nav-linkheadernca " data-toggle="dropdown">
            <i className="far fa-bell themeCol-pink"></i>
            <span className="btn__badge pulse-button ">4</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              15 Notifications
            </span>
            <div className="dropdown-divider"></div>
            <NavLink to="/NGO_CSR_Request" className="dropdown-item">
              <p className="font12 b">
                <i className="fas fa-caret-square-right"></i>&nbsp; Send Concept
                Note to Corporate #4321
              </p>
            </NavLink>
            <div className="dropdown-divider"></div>
            <NavLink to="/NGO_CSR_Request" className="dropdown-item">
              <p className="font12 b">
                <i className="fas fa-caret-square-right"></i>&nbsp; Upload Legal
                Documents to Corporate #4322
              </p>
            </NavLink>
            <div className="dropdown-divider"></div>
            <NavLink to="/NGO_CSR_Request" className="dropdown-item">
              <p className="font12 b">
                <i className="fas fa-caret-square-right"></i>&nbsp; Corporate
                #4323 approves Legal Documents
              </p>
            </NavLink>
            <div className="dropdown-divider"></div>
            <NavLink
              to="/Notification"
              className="dropdown-item dropdown-footer font12"
            >
              See All Notifications
            </NavLink>
          </div>
        </li>
        <li className="nav-item px-2">
          <Link
            to="#"
            className="nav-linkheadernca"
            data-widget="fullscreen"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt themeCol-pink"></i>
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link
            to="#"
            className="nav-linkheadernca"
            data-widget="control-sidebar"
            data-controlsidebar-slide="true"
            role="button"
          >
            <i className="fas fa-th-large themeCol-pink"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
