import React, { useState, setState, useEffect } from "react";
import BoyImage from "../../assets/da_img/login1.png";
import DataService from "../../service/DataService";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { json, useNavigate } from "react-router-dom";
import { NavLink, Navigate } from "react-router-dom";
import { HomeFilled, HomeOutlined } from "@ant-design/icons";
import UploadService from "../../service/file-upload.service";

import Moment from "moment";
import $ from "jquery";

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

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function NGO_Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Load initial values from localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      form.setFieldsValue({
        email: savedUsername,
        password: savedPassword,
        remember: true,
      });
    }
  }, []);
  const onsubmit = (values) => {
     // window.showLoader();
    // Save username and password to localStorage if "Remember Me" is checked
    if (values.remember) {
      localStorage.setItem("username", values.email);
      localStorage.setItem("password", values.password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    const userCredLogin = {
      userId: values.email,
      userName: "",
      password: values.password,
      termsConditions: "Y", // Based on the selection on the sign up screen
      systemUpdateCommunication: "Email",
      userType: "NGO", // For this release this will be NGO
      userRole: "NGO_SILVER", // In the beginning this will be NGO_SILVER
      associatedEntity: "",
      status: "",
      comments: "",
      passwordSetTime: "",
      numLogin: 0,
      lastLoginTime: "",
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: ""
    };

    console.log("alert json"+userCredLogin);
    // Create a new FormData object to combine JSON data and files
    const formDataLogin = new FormData();
    formDataLogin.append("userCred", JSON.stringify(userCredLogin)); 

    UploadService.create("/login", formDataLogin).then((response) => {
     
      let logSts = response.data.message.messageType; 
      let logStsDesc = response.data.message.messageDetails[2]; 
      // console.log("log",logSts);

      if (logSts == "SUCCESS") {
        window.toastr.warning("login Sucesss"); 
        navigate("/ngoDashboard");
      } else {
        window.toastr.warning(logStsDesc); 
      }
    });
  };

  return (
    <>
      <div className="bg_dtheme fontfamilynca  col-md-12 row">
        <div className="row ">
          <div className="col-md-6  signupimg" style={boyImageCom}></div>

          <div className="col-md-6 mb-5 signin">
            <NavLink to="/">
              <HomeFilled className="homeicon" />
            </NavLink>
            <Form
              form={form}
              layout="vertical"
              initialValues={{ remember: true }} 
              onFinish={onsubmit}
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
                <small className="text-white font20 text-sm">
                  Let's Do Aram
                </small>
                <br />

                <div className="input-group mt-5">
                  <span className="d-input-group-text">
                    <i
                      className="fa fa-user-circle themeCol-pink"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div className="form-floating  border-0">
                    <Form.Item name="loginas" label="Login as" values={"NGO"}>
                      <span className="loginas-span">NGO</span>
                    </Form.Item>
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
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "email is required" },
                      {
                        type: "email",
                        message: "Enter valid email address",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="doaram@gmail.com" bordered={false} />
                  </Form.Item>
                </div>
                <span className="d-input-group-text border-0"></span>
              </div>

              <div className="text-danger errors para"></div>

              <div className="input-group">
                <span className="d-input-group-text">
                  <i className="fa fa-key themeCol-pink" aria-hidden="true"></i>
                </span>
                <div className="form-floating  border-0">
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      { required: true, message: "password is required" },
                      // { min: 9, message: "Minimum length 9" },
                      // { max: 15, message: "Maximum lenth is 15" },
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder="Password" bordered={false} />
                  </Form.Item>
                </div>
                <span className="d-input-group-text border-0"></span>
              </div>
              <div className="text-danger errors para"></div>
              <div className="row">
                <div className="col">
                  <div className="form-check">
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox
                        className="link-light font14 "
                        valuePropName="checked"
                      >
                        Remember me
                      </Checkbox>
                    </Form.Item>
                  </div>
                </div>
                <div className="col text-end mt-1">
                  <NavLink
                    className="link-light font14 b "
                    to="/ForgotPassword"
                  >
                    Forgot Password?
                  </NavLink>
                </div>
              </div>

              <div className="col-12">
                <p className="font16 text-danger b" id="logmessage"></p>
                <div className="d-flex  justify-content-center">
                  {/* <NavLink to="/ngoDashboard"> */}
                  <Button htmlType="submit" className="bg-yellowgra loginbtn">
                    Log in
                  </Button>
                  {/* </NavLink> */}
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
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NGO_Login;
