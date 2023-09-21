import React, { useState, setState } from "react";
import BoyImage from "../../assets/da_img/login1.png";
import DataService from "../../service/DataService";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { json, useNavigate } from "react-router-dom";
import { NavLink, Navigate } from "react-router-dom";
const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function Admin_Login() {
  const navigate = useNavigate();

  const onsubmit = (values) => {
    navigate("/adminDashboard");
  };
  return (
    <>
      <div className="bg_dtheme fontfamilynca">
        <div className="row ">
          <div className="col-md-6  signupimg" style={boyImageCom}></div>

          <div className="col-md-6 mb-5 signin">
            <Form
              layout="vertical"
              autoComplete="off"
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
                  <div className="form-floating  border-0 mb-3">
                    <Form.Item name="loginas" label="Login as" values={"NGO"}>
                      <span className="loginas-span">Admin</span>
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
                <div className="form-floating  border-0 mb-1">
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Email is required" },
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

              <div className="input-group">
                <span className="d-input-group-text">
                  <i className="fa fa-key themeCol-pink" aria-hidden="true"></i>
                </span>
                <div className="form-floating  border-0">
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      { required: true, message: "Password is required" },
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

              {/* <div className="row">
                <div className="col">
                  <div className="form-check">
                    <Form.Item name="rememberme" valuePropName="checked">
                      <Checkbox className="link-light font14 ">
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
              </div> */}

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

              {/* <div className="row">
                <div className="col text-center">
                  <span className="link-light font14 ">Not a member yet?</span>
                  <NavLink className="link-warning font14 " to="/Signup">
                    &nbsp; Sign up Now
                  </NavLink>
                </div>
              </div> */}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_Login;
