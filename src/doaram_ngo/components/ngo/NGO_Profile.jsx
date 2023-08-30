import React from "react";
import { Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";

function NGO_Profile(props) {
  return (
    <NGO_Layout type={props.type}>
    <div className="content-wrapper fontfamilynca">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Your NGO Profile</h1>
            </div>
            <div className="col-sm-6">
              <div className="nav-link d-flex justify-content-end">
                <button className="btn btnnca btn-gold btn-sm ">
                  <i className="fa fa-pencil-square-o"></i> Save NGO Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid   p-1">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Contact Person
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Banking
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="website-tab"
                data-bs-toggle="tab"
                data-bs-target="#website"
                type="button"
                role="tab"
                aria-controls="website"
                aria-selected="false"
              >
                Website
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row m-3">
                <div className="card" style={{ height: "150vh" }}>
                  <form className="  ms-5 mt-3 ">
                    <div className="mb-3 row">
                      <label htmlFor="ngoName" className="col-sm-3 form-label">
                        <span className="text-dark fw-semibold"> NGO Name</span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Registration Number
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          NGO Contact Number
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold"> Founder</span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Banner Image
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold"> About</span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold"> Address</span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="inputPassword"
                          placeholder="Building/House No"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-md-3"></div>

                      <div className="col-md-4">
                        <select
                          className="form-control w-100 da_country"
                          name="selNgoCountry"
                          id="selNgoCountry"
                        >
                          <option value="India" countryid="101">
                            India
                          </option>
                        </select>
                      </div>

                      <div className="col-md-4">
                        <select
                          className="form-control w-100 da_state"
                          name="selCorpState"
                          id="selCorpState"
                        >
                          {" "}
                          <option value="">Select State</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col-md-3"></div>

                      <div className="col-md-4">
                        <select
                          className="form-control w-100 da_cities"
                          name="selCorpCity"
                          id="selCorpCity"
                        >
                          <option value="">Select City</option>
                        </select>
                      </div>

                      <div className="col-md-4"></div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold"> Category</span>
                      </label>
                      <div className="col-sm-4">
                        <select
                          className="form-control"
                          name="selNgoCategory"
                          id="selNgoCategory"
                        >
                          <option value="">Select Category</option>
                          <option value="Advocacy">Advocacy</option>
                          <option value="Animals">Animals</option>
                          <option value="Children">Children</option>
                          <option value="Community Mobilization">
                            Community Mobilization
                          </option>
                          <option value="Cultural Heritage">
                            Cultural Heritage
                          </option>
                          <option value="Differently Abled">
                            Differently Abled
                          </option>
                          <option value="Disaster Relief Works">
                            Disaster Relief Works
                          </option>
                          <option value="Education">Education</option>
                          <option value="Elderly">Elderly</option>
                          <option value="Employment">Employment</option>
                          <option value="Environment">Environment</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Others">Others</option>
                          <option value="Rural Development">
                            Rural Development
                          </option>
                          <option value="Sustainable Livelihood ">
                            Sustainable Livelihood
                          </option>
                          <option value="Women Empowerment">
                            Women Empowerment
                          </option>
                          <option value="Donations">Donations</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact person */}
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row m-3">
                <div className="card" style={{ height: "150vh" }}>
                  <form className="  ms-5 mt-3 ">
                    <div className="mb-3 mt-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Contact Name
                        </span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control w-100 fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control w-100 fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Job Title
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100 fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your job title"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold"> Email-ID</span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100 fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Type in your e-mail address"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Contact No
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group input-group-sm ">
                          <button
                            type="button"
                            className="btn btnnca btn-default bg-light dropdown-toggle input-tgroup"
                            data-bs-toggle="dropdown"
                          >
                            IN(+91)
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            id="txtFldNGOPhone"
                            name="txtFldNGOPhone"
                            placeholder="Enter your contact No"
                            maxlength="150"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Banking */}
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row m-3">
                <div className="card" style={{ height: "150vh" }}>
                  <form className="  ms-5 mt-3 ">
                    <div className="mb-3 mt-3 row">
                      <label
                        htmlFor="FormControlInput1"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Bank Name
                        </span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your First Name"
                        />
                      </div>

                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your Last Name"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="FormControlInput2"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Account Number
                        </span>
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

                    <div className="mb-3 row">
                      <label
                        htmlFor="FormControlInput3"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Account Name
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Type in your Account Name"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="FormControlInput4"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Branch Address
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your Branch Address"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="FormControlInput5"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          IFSC Code
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control fst-italic"
                          id="inputPassword"
                          name=""
                          placeholder="Enter your IFSC Code"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="website"
              role="tabpanel"
              aria-labelledby="website-tab"
            >
              <div className="row m-3">
                <div className="card" style={{ height: "150vh" }}>
                  <form className="  ms-5 mt-3 ">
                    <div className="mb-3 mt-3 row">
                      <label
                        htmlFor="FormControlInput2"
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Website url
                        </span>
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="btn btnnca btn-gold btn-sm"
                              id="basic-addon3"
                            >
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
                        className="col-sm-3 form-label"
                      >
                        <span className="text-dark fw-semibold">
                          {" "}
                          Meta Title
                        </span>
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
              </div>
            </div>
          </div>

          {/* my work */}
        </div>
      </section>

      <aside className="control-sidebar control-sidebar-dark asidefixed rightbarnca">
        <div className="container mt-5" style={{ height: "600px !important" }}>
          <div className="row">
            <div
              className="
               mb-3 control-sidebar-dark"
            >
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text font14 pt-3 text-white">
                  <Link to="" className="text-white">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    &nbsp; &nbsp;<u>Create a cause</u>
                  </Link>{" "}
                  <br />
                  <br />
                  <Link to="" className="text-white">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    &nbsp; &nbsp;<u>View your recent donations</u>
                  </Link>{" "}
                  <br />
                  <br />
                  <Link to="" className="text-white">
                    <i className="fa fa-wrench" aria-hidden="true"></i>
                    &nbsp; &nbsp;<u>Complete or Update your NGO Profile</u>
                  </Link>
                </p>
              </div>

              <div className="card-body">
                <h5 className="card-title">Performance</h5>
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Fund Causes</th>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th scope="row">No. of Individual Donations</th>
                      <td>3456</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Individual Donations</th>
                      <td>
                        <i className="fa fa-inr"></i> 6,34,789
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Corporate Approvals</th>
                      <td>8</td>
                    </tr>
                    <tr>
                      <th scope="row">Corporate Donations</th>
                      <td>
                        <i className="fa fa-inr"></i> 3,74,234
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total amount in donations</th>
                      <td>10,04,567</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    </NGO_Layout>
  );
}

export default NGO_Profile;
