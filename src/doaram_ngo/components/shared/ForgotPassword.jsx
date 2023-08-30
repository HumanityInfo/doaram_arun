import React from "react";
import { NavLink } from "react-router-dom";
// import "../../assets/scss/style.scss";

function ForgotPassword() {
  return (
    <div>
      <div className="col-md-12 row fontfamilynca">
        <div className="d-flex  justify-content-center">
          <div className="row col-md-6 mt-2 ">
            <div className="card cardnca pt-2">
              <NavLink to="/" className="nav-link text-end mb-3">
                <button className="btn btnnca btn-info btn-sm  " type="button">
                  <i className="fa fa-arrow-left"></i> Back To Login
                </button>
              </NavLink>

              <form id="msform">
                <ul id="signupselector">
                  <li className="active" id="account">
                    <strong>Forgot Password</strong>
                  </li>
                  <li id="personal">
                    <strong>Verify your Email</strong>
                  </li>
                  <li id="payment">
                    <strong>Change Password</strong>
                  </li>
                  <li id="confirm">
                    <strong>Submitted</strong>
                  </li>
                </ul>
                <p className="font16 text-danger b" id=" invDetailsmessage"></p>

                <fieldset>
                  <div className="form-card" style={{ minHeight: "60vh" }}>
                    <div className="row p-3">
                      <div className="col-10">
                        <h6 className="text-start">Enter Your Email Address</h6>
                      </div>
                      <div className="col-2">
                        <h2 className="steps">Step 1 - 3</h2>
                      </div>
                    </div>

                    <div className="container mt-3 mb-3 text-start">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="txtFldNGOName"
                        name="txtFldNGOName"
                        placeholder="Enter Your Email Address"
                        maxlength="150"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>
                    </div>
                  </div>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    name="next"
                    className="next btn btnnca btn-gold btn-sm "
                  >
                    Next <i className="fa fa-arrow-right"></i>
                  </button>
                </fieldset>

                <fieldset>
                  <div className="form-card" style={{ minHeight: "60vh" }}>
                    <div className="row p-3">
                      <div className="col-10">
                        <h6 className="text-start b">
                          Enter the Four digit code send to your Email Address
                        </h6>
                      </div>
                      <div className="col-2">
                        <h2 className="steps">Step 2 - 3</h2>
                      </div>
                    </div>

                    <div className="container mt-3 mb-3 text-start">
                      <div
                        id="otp"
                        className="otpnumber d-flex flex-row justify-content-center mt-2"
                      >
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="first"
                          maxlength="1"
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="second"
                          maxlength="1"
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="third"
                          maxlength="1"
                        />
                        <input
                          className="m-2 text-center form-control rounded"
                          type="text"
                          id="fourth"
                          maxlength="1"
                        />
                      </div>
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>
                    </div>
                  </div>
                  <button
                    type="button"
                    name="previous"
                    className="previous btn btnnca btn-outline-secondary btn-sm "
                    value="Previous"
                  >
                    {" "}
                    <i className="fa fa-arrow-left"></i>
                    &nbsp; Previous
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    name="next"
                    className="next btn btnnca btn-gold btn-sm "
                  >
                    Next <i className="fa fa-arrow-right"></i>
                  </button>
                  &nbsp;&nbsp;
                </fieldset>
                <fieldset>
                  <div className="form-card" style={{ minHeight: "60vh" }}>
                    <div className="row p-3">
                      <div className="col-10">
                        <h6 className="text-start b">Enter Your New Password</h6>
                      </div>
                      <div className="col-2">
                        <h2 className="steps">Step 3 - 3</h2>
                      </div>
                    </div>

                    <div className="container mt-3 mb-3 text-start">
                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b"
                        for="txtfldnewpassword"
                      >
                        Enter New Password
                      </label>

                      <div className="input-group mb-3">
                        <input
                          className="form-control"
                          id="txtfldnewpassword"
                          name="txtfldnewpassword"
                          placeholder="*************"
                        />
                        <span className="input-group-text" id="basic-addon2"></span>
                      </div>

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtfldconfpassword"
                      >
                        Confirm Password
                      </label>
                      <div className="input-group mb-3">
                        <input
                          className="form-control"
                          id="txtfldconfpassword"
                          name="txtfldconfpassword"
                          placeholder="*************"
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text"
                            id="basic-addon2"
                          ></span>
                        </div>
                      </div>

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>
                    </div>
                  </div>
                  <button
                    type="button"
                    name="previous"
                    className="previous btn btnnca btn-outline-secondary btn-sm "
                    value="Previous"
                  >
                    {" "}
                    <i className="fa fa-arrow-left"></i>
                    &nbsp; Previous
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    name="SubmitDetail"
                    id="SubmitDetail"
                    className="next btn btnnca btn-gold btn-sm "
                  >
                    Submit <i className="fa fa-arrow-right"></i>
                  </button>
                  &nbsp;&nbsp;
                </fieldset>

                <fieldset>
                  <div className="form-card" style={{ minHeight: "60vh" }}>
                    <div className="row">
                      <div className="col">
                        <h6 className="text-center b">
                          Your Password has been successfully changed!!!
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-center b">
                        <NavLink to="/" className="btn btnnca btn-gold btn-sm">
                          Login Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
