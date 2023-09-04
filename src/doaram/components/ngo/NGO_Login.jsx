import React, { useState, setState } from "react";
import BoyImage from "../../assets/da_img/login1.png";
import DataService from "../../service/DataService";

import Moment from "moment";
import $ from "jquery";

import { NavLink } from "react-router-dom";
const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function NGO_Login() {
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`; //mysql insert date format
  const formatDate = Moment("12/09/2002").format("YYYY-MM-DD"); //2002-12-09
  const datetime = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}  ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`; //mysql insert date format

  const formatDatetime = Moment("12/09/2002 10:10:10").format(
    "YYYY-MM-DD hh:mm:ss"
  );

  const input = {};
  const errors = {};
  const [updated, setupdated] = useState({});
  const userId = null;
  const password = null;

  const handleLogChange = (event) => {
    event.preventDefault();
    input[event.target.name] = event.target.value;
    console.log(input);
  };
  const validateLogin = (event) => {
    event.preventDefault();
    let errors = {};
    let loginFormData = {
      userId: $("#logemail").val(),
      userName: "",
      password: window.encrypt($("#logpassword").val()),
      termsConditions: "Y",
      systemUpdateCommunication: "",
      userType: "",
      userRole: "",
      associatedEntity: "",
      status: "Active",
      createdDate: Moment("12/09/2002").format("YYYY-MM-DD"),
      comments: "",
      passwordSetTime: Moment("12/09/2002").format("YYYY-MM-DD"),
    };

    if (validate()) {
      console.log("api")
      //window.showLoader();
      let errorMsg = null;
      DataService.create("/login", loginFormData)
        .then((response) => {
          window.showLoader();
          let logSts =
            response.data.requestMap.ResponseWrapper.message.messageType;
          errorMsg = response.data.requestMap.MessageDetails.responseMessage;

          if (logSts == "Success") {
            window.toastr.success("Successfully Logged In");

            // User Cred details and UserActityDetails
            sessionStorage.setItem(
              "sessUsername",
              response.data.requestMap.UserCred.userName
            );
            sessionStorage.setItem(
              "sessEmail",
              response.data.requestMap.UserCred.userId
            );
            sessionStorage.setItem(
              "sessUserId",
              response.data.requestMap.UserCred.userId
            );
            sessionStorage.setItem(
              "sessRole",
              response.data.requestMap.UserCred.userRole
            );
            sessionStorage.setItem(
              "sessAssEntity",
              response.data.requestMap.UserCred.associatedEntity
            );
            sessionStorage.setItem(
              "sesscreatedDate",
              response.data.requestMap.UserCred.createdDate
            );
            sessionStorage.setItem(
              "sessLastLoginDate",
              response.data.requestMap.UserActivityAudit.lastBackendActivityTime
            );
            //USerRoleMapping DEtails
            sessionStorage.setItem(
              "sessRoleCanView",
              response.data.requestMap.UserRoleAuthMapping.viewAuth
            );
            sessionStorage.setItem(
              "sessRoleCanCreate",
              response.data.requestMap.UserRoleAuthMapping.createAuth
            );
            sessionStorage.setItem(
              "sessRoleCanUpdate",
              response.data.requestMap.UserRoleAuthMapping.updateAuth
            );
            sessionStorage.setItem(
              "sessRoleCanDelete",
              response.data.requestMap.UserRoleAuthMapping.deleteAuth
            );
            sessionStorage.setItem(
              "sessRoleCanServices",
              response.data.requestMap.UserRoleAuthMapping.services
            );

            window.sessionSetting(sessionStorage);

            window.location.href = "/NGO_Dashboard"; //to redirect to normal links
          } else {
            errors["logpassword"] = errorMsg;
            window.toastr.error(errorMsg);
            $("#logemail").val("");
            $("#logpassword").val("");

            // this.setState({
            //   errors: errors,
            // });
          }
        })
        .catch((e) => {
          window.showLoader();
          errors["logpassword"] = errorMsg;
          window.toastr.error(errorMsg);
          $("#logemail").val("");
          $("#logpassword").val("");
          // this.setState({
          //   errors: errors,
          //});
        });
    }
  };

  const validate = () => {
    let isValid = true;
    // let errors = {};
    console.log(input);

    if (window.isEmpty($("#logemail").val())) {
      isValid = false;
      errors["logemail"] = "Please enter your Email Address.";
      //$("#logemail").focus();
    }

    if (window.isEmpty($("#logpassword").val())) {
      isValid = false;
      errors["logpassword"] = "Please enter your Password.";
      // $("#logpassword").focus();
    }
    console.log("errors", errors);
    setupdated(errors);

    return isValid;
  };

  return (
    <>
      <div className="bg_dtheme fontfamilynca">
        <div className="row ">
          <div className="col-md-6 signupimg" style={boyImageCom}></div>

          <div className="col-md-6 mb-5">
            <form
              autoComplete="off"
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
                <small className="text-white font20 text-sm ">
                  Let's Do Aram
                </small>
                <br />

                <div className="input-group mt-3">
                  <span className="d-input-group-text">
                    <i
                      className="fa fa-user-circle themeCol-pink"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div className="form-floating  border-0">
                    <select className="form-control w-100  border-0">
                      <option value="NGO">NGO</option>
                    </select>
                    <label htmlFor="loginas">Login as</label>
                  </div>
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
                    value={input.logemail}
                    onChange={handleLogChange}
                    placeholder="example@gmail.com"
                  />
                  <label htmlFor="logemail">NGO Authorised Email Id : </label>
                </div>
              </div>

              <div className="text-danger errors para">
                <p>{updated.logemail}</p>
              </div>

              <div className="input-group mt-0">
                <span className="d-input-group-text">
                  <i className="fa fa-key themeCol-pink" aria-hidden="true"></i>
                </span>
                <div className="form-floating  border-0">
                  <input
                    // type={this.state.passwordVisible ? "text" : "password"}
                    className="form-control w-100  border-0"
                    id="logpassword"
                    name="logpassword"
                    value={input.logpassword}
                    onChange={handleLogChange}
                    placeholder="*************"
                  />
                  <label htmlFor="logpassword">Password :</label>
                </div>
                <span
                  className="d-input-group-text border-0"
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
                <p> {updated.logpassword}</p>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="rememberchk"
                      id="rememberchk"
                      // onChange={this.handleChkChange}
                    />
                    <label className="form-label" htmlFor="rememberchk">
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
                <NavLink to="">
                  <div className="d-flex  justify-content-center">
                    <button
                      type="button"
                      className="bg-yellowgra loginbtn"
                      onClick={validateLogin}
                    >
                      Log in
                    </button>
                  </div>
                </NavLink>
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
    </>
  );
}

export default NGO_Login;
