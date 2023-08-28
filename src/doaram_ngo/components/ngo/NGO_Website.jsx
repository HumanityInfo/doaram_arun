import React from "react";
import { NavLink } from "react-router-dom";

function NGO_Banking() {
  return (
    <div className="content-wrapper fontfamilynca">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Your Performance</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb breadcrumbncafloat-sm-right">
                <li className="breadcrumb-item">
                  <Link to="#">NGO</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row mb-0">
            <div className="col-sm-9">
              <h4 className="m-0">Your NGO Profile</h4>
            </div>

            <div className="col-sm-3">
              <nav className="nav mt-0">
                <NavLink
                  className="nav-link d-flex justify-content-end"
                  aria-current="page"
                  to="/CreateCause"
                >
                  <button type="button" className="btn btnnca btn-gold p-1">
                    <span className="me-2" style={{ fontSize: "14px" }}>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Edit&nbsp;&nbsp;&nbsp;
                  </button>
                </NavLink>
              </nav>
            </div>
          </div>

          {/* my work */}
          <div className="row mt-0">
            <div className="col-md-9">
              <nav className="nav mt-0">
                <NavLink
                  className="nav-item nav-link fs-6"
                  activeClassName="headermenu"
                  to="/NGO_Profile"
                >
                  Details
                </NavLink>
                <NavLink
                  className="nav-item nav-link fs-6"
                  activeClassName="headermenu"
                  to="/NGO_ContactPerson"
                >
                  Contact Person
                </NavLink>
                <NavLink
                  className="nav-item nav-link fs-6"
                  activeClassName="headermenu"
                  to="/NGO_Banking"
                >
                  Banking
                </NavLink>
                <NavLink
                  className="nav-item nav-link fs-6"
                  activeClassName="headermenu"
                  to="/NGO_Website"
                >
                  Website
                </NavLink>
              </nav>
            </div>

            <div className="col-md-3"></div>
          </div>

          {/* my work */}
        </div>
      </section>

      <div className="row">
        <form>
          <div className="mb-3 mt-3 row">
            <label
              htmlFor="FormControlInput2"
              className="col-sm-3 col-form-label ms-5 fw-bold"
            >
              <span className="me-2" style={{ fontSize: "14px" }}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
              Website url
            </label>
            <div className="col-sm-8">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-gold" id="basic-addon3">
                    doaram/
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control fst-italic"
                  id="basic-url"
                  name=""
                  aria-describedby="basic-addon3"
                  placeholder="New_NGO_event_xyz"
                />
              </div>
            </div>
          </div>

          <div className="mb-3 mt-3 row">
            <label
              htmlFor="FormControlInput2"
              className="col-sm-3 col-form-label ms-5 fw-bold"
            >
              <span className="me-2" style={{ fontSize: "14px" }}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
              Meta Title
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control fst-italic"
                id="inputPassword"
                name=""
                placeholder="Enter your Account Number"
              />
            </div>
          </div>
        </form>
      </div>

      <aside className="control-sidebar control-sidebar-dark">
        <div className="container" style={{ height: "600px !important" }}>
          <div className="row">
            <div className="card cardnca mb-3 control-sidebar-dark">
              <div className="card-body">
                <div className="input-group mb-3">
                  <button className="btn btnnca btn-outline-secondary" type="button">
                    <i className="fa fa-user-circle"></i>
                  </button>
                  <select
                    className="form-select btn-outline-light btn-sm dropdown-toggle "
                    id="inputGroupSelect03"
                    aria-label="Example select with button addon"
                  >
                    <option selected className="">
                      Profile
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <Link to="#" className="nav-link" data-toggle="dropdown">
                    <i className="far fa-bell themeCol-white"></i>
                  </Link>
                </div>

                <h3 className="text-light">Quick Links</h3>
                <h5 className="text-light mb-3">
                  <i className="far fa-bell themeCol-white"></i>
                  &nbsp;&nbsp;&nbsp; Create a New Cause
                </h5>

                <h5 className="text-light mb-1">
                  <i className="far fa-bell themeCol-white"></i>
                  &nbsp;&nbsp;&nbsp; View recent donations
                </h5>

                <h5 className="text-light mb-1">
                  <i className="far fa-bell themeCol-white"></i>
                  &nbsp;&nbsp;&nbsp; Complete your NGO profile
                </h5>

                <h3 className="text-light">Performance</h3>
                <table>
                  <thead>
                    <th></th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Fund Causes</th>
                      <td>6</td>
                    </tr>

                    <tr>
                      <th>No.of Individual Donations</th>
                      <td>3456</td>
                    </tr>

                    <tr>
                      <th>Total Individual Donations</th>
                      <td>₹ 6,34,789</td>
                    </tr>

                    <tr>
                      <th>Corporate Approvals</th>
                      <td>8</td>
                    </tr>

                    <tr>
                      <th>Corporate Donations</th>
                      <td>₹ 3,74,234</td>
                    </tr>

                    <tr>
                      <th>Total amount in donations</th>
                      <td>₹ 10,04,567</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card-body"></div>

              <div className="card-footer">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col pt-1">
                        <i className="fa box-org"></i>
                      </div>
                      <div className="col">Corporates</div>
                    </div>

                    <div className="row">
                      <div className="col pt-1">
                        <i className="fa box-pink"></i>
                      </div>
                      <div className="col">Individuals</div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <canvas
                      id="pieChart"
                      style={{
                        minHeight: "250px",
                        height: "250px",
                        maxHeight: "250px",
                        maxWidth: "100%",
                      }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default NGO_Banking;
