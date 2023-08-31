import React from "react";
import BoyImage from "../../assets/da_img/login1.png";
// import "../../assets/scss/style.scss";
import { NavLink } from "react-router-dom";
const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function NGO_Login() {
  return (
    <div className="bg_dtheme fontfamilynca">
      <div className="row ">
        <div className="col-md-6  signupimg" style={boyImageCom}></div>

        <div className="col-md-6 mb-5">
          <form
            autocomplete="off"
            name="Signupform"
            id="Signupform"
            method="POST"
            className="row m-5 g-3"
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
              <small className="text-white font20 text-sm">Let's Do Aram</small>
              <br />

              <div className="input-group mt-5">
                <span className="d-input-group-text">
                  <i
                    className="fa fa-user-circle themeCol-pink"
                    aria-hidden="true"
                  ></i>
                </span>
                <div className="form-floating  border-0">
                  <select className="form-control w-100  border-0">
                    <option value="NGO">NGO</option>
                    {/* <option value="Corporate">CORPORATE</option>
                    <option value="Individual">INDIVIDUAL</option> */}
                  </select>
                  <label for="loginas">Login as</label>
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
                  id="logemail"
                  name="logemail"
                  placeholder="example@gmail.com"
                />
                <label for="logemail">Email</label>
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
                  id="logpassword"
                  name="logpassword"
                  placeholder="*************"
                />
                <label for="logpassword">Password</label>
              </div>
              <span className="d-input-group-text border-0"></span>
            </div>
            <div className="text-danger errors para"></div>
            <div className="row">
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="rememberchk"
                    id="rememberchk"
                  />
                  <label className="form-label" for="rememberchk">
                    <span className="font14">Remember me</span>
                  </label>
                </div>
              </div>
              <div className="col text-end">
                <NavLink className="link-light font14 " to="/ForgotPassword">
                  Forgot Password?
                </NavLink>
              </div>
            </div>

            <div className="col-12">
              <p className="font16 text-danger b" id="logmessage"></p>
              <div className="d-flex  justify-content-center">
                <NavLink to="/ngoDashboard">
                  <button type="button" className="bg-yellowgra loginbtn">
                    Log in
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="row">
              <div className="col text-center">
                <span className="link-light font14 ">Not a member yet?</span>
                <NavLink className="link-warning font14 " to="/Signup">
                  &nbsp; Sign up Now
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NGO_Login;
