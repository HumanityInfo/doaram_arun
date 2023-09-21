import React from "react";
import { Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";
import { Form, Input, Button, Select, Checkbox, Upload, Row, Col } from "antd";
import { json, useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
function Admin_Profile(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Your NGO Profile</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid   p-1">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="ngoprofile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Admin Profile
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="coordinator-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Add user
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="ngoprofile-tab"
              >
                <div className="row m-3">
                  <div className="card">hello</div>
                </div>
              </div>

              {/* ---------Coordinator Details--------------- */}
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="coordinator-tab"
              >
                <div className="row m-3">
                  <div className="card" style={{ height: "73vh" }}>
                    <Form
                      autoComplete="off"
                      labelCol={{ span: 4 }}
                      wrapperCol={{
                        span: 17,
                      }}
                      className="ms-5 mt-3"
                    >
                      <div>
                        <Form.Item
                          name="firstname"
                          label="First Name"
                          rules={[
                            {
                              required: true,
                              message: "Fisrt name required",
                            },
                          ]}
                        >
                          <Input size="medium" placeholder="First Name" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="lastname"
                          label="Last Name"
                          rules={[
                            {
                              required: true,
                              message: "Last name is required",
                            },
                          ]}
                        >
                          <Input size="medium" placeholder="Last Name" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="email"
                          label="Email-ID"
                          rules={[
                            {
                              required: true,
                              message: "email is required",
                            },
                            {
                              type: "email",
                              message: "Enter valid email",
                            },
                          ]}
                        >
                          <Input
                            size="medium"
                            placeholder="Enter Email address"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="phone"
                          label="Phone"
                          rules={[
                            {
                              required: true,
                              message: "contact number is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input
                            addonBefore="IN(+91)"
                            size="medium"
                            placeholder="Enter Contact number"
                          />
                        </Form.Item>
                      </div>
                      <div className="admin">
                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            { required: true, message: "password is required" },
                            { min: 9, message: "Minimum length 9" },
                            { max: 15, message: "Maximum lenth is 15" },
                          ]}
                          hasFeedback
                        >
                          <Input.Password
                            placeholder="Password"
                           
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="confirmpassword"
                          label="Confirm Password"
                          dependencies={["password"]}
                          rules={[
                            {
                              required: true,
                              message: "Password",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  "Password Does not match"
                                );
                              },
                            }),
                          ]}
                          hasFeedback
                        >
                          <Input.Password
                            placeholder="Confirm Password"
                           
                          />
                        </Form.Item>
                      </div>
                      <div>
                              <Form.Item
                                className="para b themeCol-orange"
                                name="role"
                                label="Role"
                              >
                                <Select
                                  showSearch
                                  placeholder="-- -- Select Role -- --"
                                  optionFilterProp="children"
                                  options={[]}
                                />
                              </Form.Item>
                            </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NGO_Layout>
  );
}

export default Admin_Profile;
