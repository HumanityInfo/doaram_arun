import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BoyImage from "../../assets/da_img/login1.png";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import Moment from "moment";
import axios from "axios";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
function Registration() {
  const navigate = useNavigate();

  const onsubmit = (values) => {
    const signup = {
      userId: values.email,
      userName: "",
      password: values.password,
      termsConditions:values.agreement, // Based on the selection on the sign up screen
      systemUpdateCommunication: "Email",
      userType: "NGO", // For this release this will be NGO
      userRole: "NGO_SILVER", // In the beginning this will be NGO_SILVER
      associatedEntity: "",
      status: "Inactive",
      createdDate: "",
      comments: "",
      passwordSetTime: "",
      numLogin: 0,
      lastLoginTime: "",
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: "",
    };
    sessionStorage.removeItem("key");
    sessionStorage.clear();
    sessionStorage.setItem("da_userCred", JSON.stringify(signup));
    window.signupSession(sessionStorage);
    navigate("/SignupSelector");
  };

  return (
    <div className="bg_dtheme fontfamilynca  col-md-12 row">
      <div className="row ">
        <div className="col-md-6  signupimg" style={boyImageCom}></div>

        <div className="col-md-6  mb-5 signup">
          <Form
            layout="vertical"
            autoComplete="off"
            // onFinish={(values) => {
            //   console.log(values);
            // }}
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
                  <Form.Item name="loginas" label="Login as" values={"NGO"}>
                    <span className="loginas-span">NGO</span>
                  </Form.Item>
                </div>
                <span className="d-input-group-text border-0"></span>
              </div>
            </div>
            <div class="row mt-3 p-0"></div>
            <div class="input-group mt-0">
              <span class="d-input-group-text">
                <i class="fa fa-envelope  themeCol-pink" aria-hidden="true"></i>
              </span>
              <div class="form-floating  border-0">
                <Form.Item
                  name="email"
                  label="NGO Authorised Email Id"
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
            <div class="row p-0">
              <small class="font10 b text-end text-white">
                * NGO Authorised Email id used for Login purpose.
              </small>
            </div>

            <div class="input-group mt-0">
              <span class="d-input-group-text">
                <i class="fa fa-key themeCol-pink" aria-hidden="true"></i>
              </span>
              <div class="form-floating  border-0">
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "password is required" },
                    { min: 9, message: "Minimum length 9" },
                    { max: 15, message: "Maximum lenth is 15" },
                    // {
                    //   validator: (_, value) =>
                    //     value &&
                    //     value.includes(
                    //       "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{6,9}$/"
                    //         ? Promise.resolve()
                    //         : Promise.reject("password does not match criteria")
                    //     ),
                    // },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder="*************"
                    bordered={false}
                  />
                </Form.Item>
              </div>
              <span className="d-input-group-text border-0"></span>
            </div>

            <div class="input-group  mt-3">
              <span class="d-input-group-text">
                <i class="fa fa-key  themeCol-pink" aria-hidden="true"></i>
              </span>
              <div class="form-floating  border-0">
                <Form.Item
                  name="confirmpassword"
                  label="Confirm Password"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "confirm password is required" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Password Does not match");
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder="*************"
                    bordered={false}
                  />
                </Form.Item>
              </div>
              <span className="d-input-group-text border-0"></span>
            </div>

            <div className="col-12  mt-3">
              <div className="form-check">
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Agree Terms and Conditions "),
                    },
                  ]}
                >
                  <Checkbox>
                    <span className="font14 text-white">
                      I accept all{" "}
                      <u>
                        <NavLink to="/TermsConditions" className="text-white">
                          Terms & Conditions
                        </NavLink>
                      </u>
                    </span>
                    &nbsp;
                    <span className="text-white">
                      <i className="fa fa-question-circle font12"></i>
                    </span>{" "}
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="form-check">
                <Form.Item name="updates" valuePropName="checked">
                  <Checkbox>
                    <span class="font14 text-white">
                      Keep me posted on updates from DoAram
                    </span>
                  </Checkbox>
                </Form.Item>
              </div>
            </div>

            <div className="col-12  mt-0">
              <p className="font16 text-danger b" id="signupmessage"></p>
              {/* <Link to="/SignUpSelector"> */}
              <div className="d-flex  justify-content-center">
                <Button
                  htmlType="submit"
                  className="btnnca btn-gold col-md-5 signupbtn"
                  style={{ height: "45px" }}
                >
                  Create Account
                </Button>
              </div>
              {/* </Link> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
