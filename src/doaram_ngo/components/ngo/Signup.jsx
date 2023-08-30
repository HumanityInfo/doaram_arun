import React from "react";
import { NavLink } from "react-router-dom";
import BoyImage from "../../assets/da_img/login1.png";
// import "../../assets/scss/style.scss";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Registration() {
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
                <NavLink to="/signin" className="text-white font14">
                  Already User?
                  <span
                    className="text-warning text-sm toolTip top  "
                    data-tip="Login in with your existing account"
                  >
                    &nbsp;<b>Sign In</b>
                  </span>
                </NavLink>
              </div>

              <div className="input-group">
                <span className="d-input-group-text">
                  <i
                    className="fa fa-user-circle themeCol-pink"
                    aria-hidden="true"
                  ></i>
                </span>
                <div className="form-floating  border-0">
                  <select
                    name="selLoginas"
                    id="selLoginas"
                    className="form-control w-100  border-0"
                  >
                    <option value="NGO">NGO</option>
                    <option value="Corporate">CORPORATE</option>
                    <option value="Individual">INDIVIDUAL</option>
                  </select>
                  <label for="selLoginas">Login as</label>
                </div>
                <span className="d-input-group-text border-0"></span>
              </div>
            </div>

            <div className="row"></div>
            <div className="input-group">
              <span className="d-input-group-text">
                <i
                  className="fa fa-envelope  themeCol-pink"
                  aria-hidden="true"
                ></i>
              </span>
              <div className="form-floating  border-0">
                <input
                  type="text"
                  className="form-control w-100  border-0"
                  id="txtlogemail"
                  name="txtlogemail"
                  placeholder="example@gmail.com"
                />
                <label for="txtlogemail">Email</label>
              </div>
              <span className="d-input-group-text border-0"></span>
            </div>

            <div className="text-danger errors para"></div>
            <div className="input-group">
              <span className="d-input-group-text">
                <i className="fa fa-key themeCol-pink" aria-hidden="true"></i>
              </span>
              <div className="form-floating  border-0">
                <input
                  className="form-control w-100  border-0"
                  id="txtlogpassword"
                  name="txtlogpassword"
                  placeholder="*************"
                />
                <label for="txtlogpassword">Password</label>
              </div>
              <span className="d-input-group-text border-0"></span>
            </div>
            <div className="text-danger errors para"></div>
            <div className="input-group">
              <span className="d-input-group-text">
                <i className="fa fa-key  themeCol-pink" aria-hidden="true"></i>
              </span>
              <div className="form-floating  border-0">
                <input
                  className="form-control w-100  border-0"
                  id="txtlogconpassword"
                  name="txtlogconpassword"
                  data-pass="txtlogpassword"
                  placeholder="*************"
                />
                <label for="txtlogconpassword">Confirm Password</label>
              </div>
              <span className="d-input-group-text border-0"></span>
            </div>
            <div className="text-danger errors para"></div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="chktermscond"
                  id="chktermscond"
                />
                <label className="form-label" for="chktermscond">
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
                <div className="text-danger errors para"></div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="chkupdate"
                  id="chkupdate"
                />
                <label className="form-label" for="chkupdate">
                  <span className="font14">
                    Keep me posted on updates from DoAram
                  </span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <p className="font16 text-danger b" id="signupmessage"></p>
              <div className="d-flex  justify-content-center">
                <button
                  type="button"
                  className="bg-yellowgra loginbtn"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
