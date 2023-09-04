import React from "react";
import { NavLink } from "react-router-dom";
// import "../../assets/scss/style.scss";

function ForgotPassword() {
  return (
    <>
      <div className="col-md-12 row ">
        <div className="d-flex  justify-content-center">
          <div className="row col-md-6 mt-2 ">
            <div className="card pt-2">
              <NavLink to="/ngosignin" className="nav-link text-end mb-3">
                <button className="btnnca btn-info btn-sm  " type="button">
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
                  <div class="form-card" style={{ minHeight: "60vh" }}>
                    <div class="row p-3">
                      <div class="col-10">
                        <h6 class="text-start">NGO Authorized Email Id</h6>
                      </div>
                      <div class="col-2">
                        <h2 class="steps">Step 1 - 3</h2>
                      </div>
                    </div>

                    <div class="container mt-3 mb-3 text-start">
                      <input
                        type="text"
                        class="form-control w-100"
                        id="txtFldNGOName"
                        name="txtFldNGOName"
                        placeholder="Enter Your Email Id"
                        maxlength="150"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      >
                        {/* {this.state.errors.permantPANNo} */}
                      </div>
                    </div>
                  </div>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    name="next"
                    class="next btnnca btn-gold btn-sm "
                    // onClick={this.validate}
                  >
                    Verify Now <i className="fa fa-arrow-right"></i>
                  </button>
                </fieldset>

                <fieldset>
                  <div class="form-card" style={{ minHeight: "60vh" }}>
                    <div class="row p-3">
                      <div class="text-end">
                        <h2 class="steps">Step 2 - 3</h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6 class="text-center b">
                          Your verification link has been sent to your
                          registered Email Id
                        </h6>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    name="previous"
                    class="previous btnnca btn-outline-secondary btn-sm "
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
                    class="next btnnca btn-gold btn-sm "
                    // onClick={this.validate}
                  >
                    Next <i className="fa fa-arrow-right"></i>
                  </button>
                  &nbsp;&nbsp;
                </fieldset>
                <fieldset>
                  <div class="form-card" style={{ minHeight: "60vh" }}>
                    <div class="row p-3">
                      <div class="col-10">
                        <h6 class="text-start b">Enter Your New Password</h6>
                      </div>
                      <div class="col-2">
                        <h2 class="steps">Step 3 - 3</h2>
                      </div>
                    </div>

                    <div class="container mt-3 mb-3 text-start">
                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b"
                        for="txtfldnewpassword"
                      >
                        Enter New Password
                      </label>

                      <div class="input-group mb-3">
                        <input
                          // type={
                          //   this.state.txtfldnewpassword ? "text" : "password"
                          // }
                          className="form-control"
                          id="txtfldnewpassword"
                          name="txtfldnewpassword"
                          // onChange={this.handleLogChange}
                          placeholder="*************"
                        />
                        <span
                          class="input-group-text"
                          id="basic-addon2"
                          // onClick={this.togglePasswordVisibility}
                        >
                          <i
                            // className={
                            //   "fa " +
                            //   (this.state.txtfldnewpassword
                            //     ? "fa-eye"
                            //     : "fa-eye-slash") +
                            //   " themeCol-orange"
                            // }
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      >
                        {/* {this.state.errors.permantPANNo} */}
                      </div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtfldconfpassword"
                      >
                        Confirm Password
                      </label>
                      <div class="input-group mb-3">
                        <input
                          // type={
                          //   this.state.txtfldconfpassword ? "text" : "password"
                          // }
                          className="form-control"
                          id="txtfldconfpassword"
                          name="txtfldconfpassword"
                          // value={this.state.input.txtfldconfpassword}
                          // onChange={this.handleLogChange}
                          placeholder="*************"
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            id="basic-addon2"
                            // onClick={this.toggleconPasswordVisibility}
                          >
                            <i
                              // className={
                              //   "fa " +
                              //   (this.state.txtfldconfpassword
                              //     ? "fa-eye"
                              //     : "fa-eye-slash") +
                              //   " themeCol-orange"
                              // }
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </div>

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      >
                        {/* {this.state.errors.permantPANNo} */}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    name="previous"
                    class="previous btnnca btn-outline-secondary btn-sm "
                    value="Previous"
                  >
                    {" "}
                    <i className="fa fa-arrow-left"></i>
                    &nbsp; Previous
                  </button>
                  &nbsp;&nbsp;
                  {/* <a href="/NGODashboard"> */}
                  <button
                    type="button"
                    name="SubmitDetail"
                    id="SubmitDetail"
                    class="next btnnca btn-gold btn-sm "
                    // onClick={this.finalSubmit}
                  >
                    Submit <i className="fa fa-arrow-right"></i>
                  </button>
                  {/* </a> */}
                  &nbsp;&nbsp;
                  {/* <input
                      type="button"
                      name="next"
                      class="next  btnnca btn-dark btn-sm"
                      value="Submit"
                      // onClick={this.saveInvestorInfo}
                    /> */}
                </fieldset>

                <fieldset>
                  <div class="form-card" style={{ minHeight: "60vh" }}>
                    <div class="row">
                      <div class="col">
                        <h6 class="text-center b">
                          Your Password has been successfully changed!!!
                        </h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="text-center b">
                        <NavLink to="/ngosignin" class="btnnca btn-gold btn-sm">
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
    </>
  );
}

export default ForgotPassword;
