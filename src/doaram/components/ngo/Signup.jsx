import React from "react";
import { NavLink, Link } from "react-router-dom";
import BoyImage from "../../assets/da_img/login1.png";
// import "../../assets/scss/style.scss";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Registration() {
  const passwordVisible = false;
  const conpasswordVisible = false;
  const input = {};
  const errors = {};
  const handleLogChange = (event) => {
    event.preventDefault();
    input[event.target.name] = event.target.value;
    console.log(input);
  };
  return (
    <div className="bg_dtheme fontfamilynca">
      <div className="row ">
        <div className="col-md-6  signupimg" style={boyImageCom}></div>

        <div className="col-md-6  mb-5">
          <form
            autocomplete="off"
            name="Signupform"
            id="Signupform"
            method="POST"
            className="row m-5 g-3"
            enctype="multipart/form-data"
          >
            <div className="col-12 text-center">
              <div className="col-12 text-center ">
                <img
                  src={require("./../../assets/da_img/logo1.png")}
                  width={100}
                  height={100}
                  alt="DoAram_Logo"
                  className="rounded mx-auto d-block"
                />
              </div>
              <small className="text-white font20 text-sm ">
                Let's Do Aram
              </small>
              <br />
              <div className="row text-end">
                <NavLink to="/ngosignin" className="text-white font14">
                  Already User?
                  <span
                    className="text-warning text-sm toolTip top  "
                    data-tip="Login in with your existing account"
                  >
                    &nbsp;<b>Sign In</b>
                  </span>
                </NavLink>
              </div>

              <div class="input-group">
                <span class="d-input-group-text">
                  <i
                    class="fa fa-user-circle themeCol-pink"
                    aria-hidden="true"
                  ></i>
                </span>
                <div class="form-floating  border-0">
                  <select
                    name="selLoginas"
                    id="selLoginas"
                    className="form-control w-100  border-0"
                  >
                    <option value="NGO">NGO</option>
                  </select>
                  <label htmlfor="selLoginas">Login as</label>
                </div>
              </div>
            </div>
            <div class="row mt-3 p-0"></div>
            <div class="input-group mt-0">
              <span class="d-input-group-text">
                <i class="fa fa-envelope  themeCol-pink" aria-hidden="true"></i>
              </span>
              <div class="form-floating  border-0">
                <input
                  type="text"
                  className="form-control w-100  border-0 "
                  id="txtlogemail"
                  name="txtlogemail"
                  value={input.txtlogemail}
                  onChange={handleLogChange}
                  placeholder="example@gmail.com"
                  maxlength="150"
                />
                <label htmlfor="txtlogemail">NGO Authorised Email Id :</label>
              </div>
            </div>
            <div class="row p-0">
              <small class="font10 b text-end text-white">
                * NGO Authorised Email id used for Login purpose.
              </small>
            </div>
            <div className="text-danger errors para mt-0 ">
              {/* {this.state.errors.txtlogemail} */}
            </div>
            <div class="input-group mt-0">
              <span class="d-input-group-text">
                <i class="fa fa-key themeCol-pink" aria-hidden="true"></i>
              </span>
              <div class="form-floating  border-0">
                <input
                  // type={this.state.passwordVisible ? "text" : "password"}
                  className="form-control w-100  border-0"
                  id="txtlogpassword"
                  name="txtlogpassword"
                  // value={this.state.input.txtlogpassword}
                  // onChange={this.handleForm}
                  placeholder="*************"
                />
                <label htmlfor="txtlogpassword">Password</label>
              </div>
              <span
                class="d-input-group-text border-0"
                // onClick={this.togglePasswordVisibility}
              >
                <i
                  // className={
                  //   "fa " +
                  //   (this.state.passwordVisible ? "fa-eye" : "fa-eye-slash") +
                  //   " themeCol-orange"
                  // }
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <div className="text-danger errors para">
              {/* {this.state.errors.txtlogpassword} */}
            </div>
            <div class="input-group  mt-0">
              <span class="d-input-group-text">
                <i class="fa fa-key  themeCol-pink" aria-hidden="true"></i>
              </span>
              <div class="form-floating  border-0">
                <input
                  // type={this.state.conpasswordVisible ? "text" : "password"}
                  className="form-control w-100  border-0"
                  id="txtlogconpassword"
                  name="txtlogconpassword"
                  // value={this.state.input.txtlogconpassword}
                  // onChange={this.handleForm}
                  data-pass="txtlogpassword"
                  placeholder="*************"
                />
                <label htmlfor="txtlogconpassword">Confirm Password</label>
              </div>
              <span
                class="d-input-group-text border-0"
                // onClick={this.toggleconPasswordVisibility}
              >
                <i
                  // className={
                  //   "fa " +
                  //   (this.state.conpasswordVisible
                  //     ? "fa-eye"
                  //     : "fa-eye-slash") +
                  //   " themeCol-orange"
                  // }
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <div className="text-danger errors para">
              {/* {this.state.errors.txtlogconpassword} */}
            </div>
            <div className="col-12  mt-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="chktermscond"
                  id="chktermscond"
                  // onChange={this.handleChkChange}
                />
                <label className="form-label  mt-0" htmlfor="chktermscond">
                  <NavLink
                    to="/TermsConditions"
                    className="toolTip top "
                    target="_blank"
                    data-tip="click to view our Terms and Conditions"
                  >
                    <span className="font14 text-white">
                      I accept all <u>Terms & Conditions</u>
                    </span>
                    &nbsp;
                    <span className="text-white">
                      <i className="fa fa-question-circle font12"></i>
                    </span>{" "}
                  </NavLink>
                </label>
                <div className="text-danger errors para">
                  {/* {this.state.errors.chktermscond} */}
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="chkupdate"
                  id="chkupdate"
                  // onChange={this.handleChkChange}
                />
                <label className="form-label" htmlfor="chkupdate">
                  <span class="font14">
                    Keep me posted on updates from DoAram
                  </span>
                </label>
              </div>
            </div>

            <div className="col-12  mt-0">
              <p className="font16 text-danger b" id="signupmessage"></p>
              <Link to="/SignUpSelector">
                <div className="d-flex  justify-content-center">
                  <button
                    type="button"
                    className="btnnca btn-gold col-md-5 signupbtn"
                    style={{ height: "45px" }}
                    // onClick={this.saveUser}
                  >
                    Create Account
                  </button>
                </div>
              </Link>

              {/* <Sign prop={usercred} /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
