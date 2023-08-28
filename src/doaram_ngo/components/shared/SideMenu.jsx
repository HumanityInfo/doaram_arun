import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./../../assets/theme/all.min.css";

function SideMenu(props) {
  console.log("sidebar", props.type);
  const User_Types = {
    NGO: "NGO User",
    CORP: "Corp User",
    ADMIN: "Admin User",
  };
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ position: "fixed" }}
    >
      <a className="brand-link">
        <img
          src={require("./../../assets/da_img/logo1.png")}
          width={100}
          height={50}
          alt="DoAram_Logo"
          className="rounded mx-auto d-block"
        />
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/Dashboard"
                >
                  <i className="nav-icon fa fa-home"></i>
                  <p> Dashboard</p>
                </NavLink>
              </li>
            </>

            {props.type === User_Types.NGO ? (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/NGO_Cause">
                    <i className="nav-icon fa fa-id-card"></i>
                    <p>Causes</p>
                  </NavLink>
                </li>
              </>
            ) : null}
            {props.type === User_Types.ADMIN ? (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Admin_Cause">
                    <i className="nav-icon fa fa-id-card"></i>
                    <p>Causes</p>
                  </NavLink>
                </li>
              </>
            ) : null}

            {props.type === User_Types.NGO ? (
              <>
                <li className="nav-item">
                  <NavLink to="/Corp_NGOs" className="nav-link">
                    <i
                      className="nav-icon fa fa-building"
                      aria-hidden="true"
                    ></i>
                    <p>Corporates</p>
                  </NavLink>
                </li>
              </>
            ) : null}
            {props.type === User_Types.NGO ? (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink to="/NGO_Profile" className="nav-link">
                    <i className="nav-icon fa fa-user" aria-hidden="true"></i>
                    <p> Profile</p>
                  </NavLink>
                </li>
              </>
            ) : null}
            {props.type === User_Types.ADMIN ? (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink to="/Admin_Profile" className="nav-link">
                    <i className="nav-icon fa fa-user" aria-hidden="true"></i>
                    <p> Profile</p>
                  </NavLink>
                </li>
              </>
            ) : null}

            {props.type === User_Types.CORP ? (
              <>
                <li className="nav-item">
                  <NavLink to="/Corp_Profile" className="nav-link">
                    <i className="nav-icon fa fa-user" aria-hidden="true"></i>
                    <p> Profile</p>
                  </NavLink>
                </li>
              </>
            ) : null}

            {props.type === User_Types.ADMIN ? (
              <li class="nav-item">
                <NavLink to="/Admin_NGO" className="nav-link">
                  <i class="nav-icon fa fa-globe" aria-hidden="true"></i>
                  <p>NGOs</p>
                </NavLink>
              </li>
            ) : null}
            {props.type === User_Types.CORP ? (
              <li class="nav-item">
                <NavLink to="/Corp_NGO" className="nav-link">
                  <i class="nav-icon fa fa-globe" aria-hidden="true"></i>
                  <p>NGOs</p>
                </NavLink>
              </li>
            ) : null}

            {props.type === User_Types.NGO || props.type === User_Types.CORP ? (
              <>
                <li className="nav-header pt-5">SUPPORT</li>
                <li className="nav-item">
                  <NavLink to="/Notification" className="nav-link">
                    <i className="far fa-bell nav-icon"></i>
                    <p>Notifications</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-cog nav-icon"></i>
                    <p>Settings</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fas fa-question-circle"></i>
                    <p>Help</p>
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideMenu;
