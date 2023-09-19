import React from "react";
import { Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";
import { Form, Input, Button, Select, Checkbox, Upload, Row, Col } from "antd";
import { json, useNavigate } from "react-router-dom";
import {
  LinkedinOutlined,
  UploadOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkOutlined,
  
} from "@ant-design/icons";

function NGO_Profile(props) {
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
                  NGO Profile
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="ngocontact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Contact Info
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
                  Coordinator
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="banking-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bank"
                  type="button"
                  role="tab"
                  aria-controls="bank"
                  aria-selected="false"
                >
                  Bank Details
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
                  <div className="card">
                    <Form
                      autoComplete="off"
                      labelCol={{ span: 4 }}
                      wrapperCol={{
                        span: 17,
                      }}
                      //onFinish={onsubmit}
                      className="ms-5 mt-3"
                    >
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="name"
                          label="NGO Name"
                          rules={[
                            {
                              required: true,
                              message: "NGO name is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="Name of  the NGO" />
                        </Form.Item>
                      </div>

                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name=" category"
                          label="Category"
                          rules={[
                            {
                              required: true,
                              message: "Category is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select placeholder="-Select Category-"></Select>
                        </Form.Item>
                      </div>

                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="about"
                          label="About"
                          //colon={false}
                          rules={[
                            {
                              required: true,
                              message: "About is required",
                            },
                          ]}
                        >
                          <Input.TextArea
                            showCount
                            maxLength={250}
                            style={{ height: 150, resize: "none" }}
                            placeholder="About the NGO (In 250 words)"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="history"
                          label=" Brief History"
                          //colon={false}
                          rules={[
                            {
                              required: true,
                              message: " Brief History is required",
                            },
                          ]}
                        >
                          <Input.TextArea
                            showCount
                            maxLength={250}
                            style={{ height: 150, resize: "none" }}
                            placeholder=" Brief History of the NGO (In 250 words)"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item name="vision" label="  Vision">
                          <Input.TextArea
                            showCount
                            maxLength={150}
                            style={{ height: 130, resize: "none" }}
                            placeholder="  Vision of the NGO (In 150 words)"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item name="mission" label="  Mission">
                          <Input.TextArea
                            showCount
                            maxLength={100}
                            style={{ height: 130, resize: "none" }}
                            placeholder="  Mission of the NGO (In 100 words)"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="geoFocus"
                          label="Geography"
                        >
                          <Select
                            showSearch
                            placeholder="-- -- Geographic Focus of the activity -- --"
                            optionFilterProp="children"
                            options={[]}
                          />
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="certIncorpRoc"
                          label="Incorporation from ROC"
                          rules={[
                            {
                              required: true,
                              message: "Incorporation  is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="moaAoa"
                          label="MOA / AOA"
                          rules={[
                            {
                              required: true,
                              message: "MOA  is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="regTrustDeed"
                          label="  Registered Trust Deed"
                          rules={[
                            {
                              required: true,
                              message: "Trust Deed  is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>

                      <div className="upload">
                        <Form.Item
                          className=""
                          name="pan"
                          label="PAN"
                          rules={[
                            {
                              required: true,
                              message: "TAN  is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>

                      <div className="upload">
                        <Form.Item
                          className=""
                          name="tan"
                          label="TAN"
                          rules={[
                            {
                              required: true,
                              message: "TAN  is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="cert12a"
                          label=" 12A Cert."
                          rules={[
                            {
                              required: true,
                              message: "12A Certificate is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="cert80g"
                          label=" 80G Cert."
                          rules={[
                            {
                              required: true,
                              message: "80G certificate  is required",
                            },
                          ]}
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="csrForm1"
                          label=" CSR Form 1."
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="certFcra"
                          label=" FCRA Reg."
                        >
                          <Upload maxCount={1}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>

                      <div className="upload">
                        <Form.Item
                          className=""
                          name="itrForm"
                          label="  ITR of last three AYs"
                        >
                          <Upload maxCount={3}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="form10B"
                          label=" Form 10B of last three AYs"
                        >
                          <Upload maxCount={3}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name="fcraReturns"
                          label=" FCRA Returns of last three FYs"
                        >
                          <Upload maxCount={3}>
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item className="" name="logo" label="Logo">
                          <Upload maxCount={1} listType="picture">
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <div className="upload">
                        <Form.Item
                          className=""
                          name={["ngoProfile", "micrositeImages"]}
                          label="MicrositeImages"
                        >
                          <Upload maxCount={3} listType="picture">
                            <Button block icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>

              {/* Contact person */}
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="ngocontact-tab"
              >
                <div className="row m-3">
                  <div className="card">
                    <Form
                      autoComplete="off"
                      labelCol={{ span: 4 }}
                      wrapperCol={{
                        span: 17,
                      }}
                      //onFinish={onsubmit}
                      className="ms-5 mt-3"
                    >
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="addressLine1"
                          label="Address"
                          rules={[
                            {
                              required: true,
                              message: " Address is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.TextArea
                            //showCount
                            style={{ height: 100, resize: "none" }}
                            placeholder="Registered Address"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name=" city"
                          label="City"
                          rules={[
                            {
                              required: true,
                              message: "City is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select placeholder="-Select City-"></Select>
                        </Form.Item>
                      </div>

                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="state"
                          label="State"
                          rules={[
                            {
                              required: true,
                              message: "State is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select placeholder="-Select State-"></Select>
                        </Form.Item>
                      </div>

                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="country"
                          label="Country"
                          rules={[
                            {
                              required: true,
                              message: "Country is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select placeholder="-Select Country-"></Select>
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="pinCode"
                          label="PinCode"
                          rules={[
                            {
                              required: true,
                              message: "PinCode is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="PinCode of NGO" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="email"
                          label="Email"
                          rules={[
                            {
                              required: true,
                              message: "Email is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="Email of NGO" />
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
                            placeholder="Contact number of NGO"
                          />
                        </Form.Item>
                      </div>

                      <div>
                        <Form.Item
                          className="para b themeCol-orange"
                          name="website"
                          label="Website"
                        >
                          <Input size="medium" placeholder="Website URL" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className=""
                          name="facebook"
                          label="Facebook"
                        >
                          <Input
                            addonBefore={<FacebookOutlined />}
                            placeholder="FaceBook ID"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className=""
                          name="instagram"
                          label="Instagram"
                        >
                          <Input
                            addonBefore={<InstagramOutlined />}
                            placeholder="Instagram ID"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className=""
                          name="linkedin"
                          label="Linkedin"
                        >
                          <Input
                            addonBefore={<LinkedinOutlined />}
                            placeholder="LinkedIn ID"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item className="" name="twitter" label="Twitter">
                          <Input
                            addonBefore={<TwitterOutlined />}
                            placeholder="Twitter ID"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          className=""
                          name="otherlinks"
                          label="Other links"
                        >
                          <Input
                            addonBefore={<LinkOutlined />}
                            placeholder="Other Links(Optional)"
                          />
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>

              {/* Banking */}
              <div
                class="tab-pane fade"
                id="bank"
                role="tabpanel"
                aria-labelledby="banking-tab"
              >
                <div className="row m-3">
                  <div className="card" style={{ height: "73vh" }}>
                    <Form
                      autoComplete="off"
                      labelCol={{ span: 4 }}
                      wrapperCol={{
                        span: 17,
                      }}
                      //onFinish={onsubmit}
                      className="ms-5 mt-3"
                    >
                      <div>
                        <Form.Item
                          name="bankName"
                          label=" Bank Name"
                          rules={[
                            {
                              required: true,
                              message: " Bank name is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="Your Bank Name" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="accountName"
                          label="Account Name"
                          rules={[
                            {
                              required: true,
                              message: " Account  name is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input
                            size="medium"
                            placeholder="Your Account Name"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="branchName"
                          label="Branch Name"
                          rules={[
                            {
                              required: true,
                              message: " Branch name is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="Your Branch Name" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="accountNumber"
                          label=" Account Number"
                          rules={[
                            {
                              required: true,
                              message: "  Account Number is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input
                            size="medium"
                            placeholder="Your  Account Number"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="ifscCode"
                          label="IFSC Code"
                          rules={[
                            {
                              required: true,
                              message: "IFSC Code is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="Your IFSC Code" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="upiCode"
                          label="UPI Code"
                          rules={[
                            {
                              required: true,
                              message: "UPI Code is required",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input size="medium" placeholder="Your UPI Code" />
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
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
                          name="coordinatorName"
                          label="Name"
                          rules={[
                            {
                              required: true,
                              message: "Coordinator name is required",
                            },
                          ]}
                        >
                          <Input
                            size="medium"
                            placeholder="NGO Coordinator Name"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="coordinatorPhone"
                          label="Mobile"
                          rules={[
                            {
                              required: true,
                              message: "Coordinator phone number is required",
                            },
                          ]}
                        >
                          <Input
                            size="medium"
                            placeholder="NGO Coordinator Mobile Numner"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name="coordinatorEmail"
                          label="Email"
                          rules={[
                            {
                              required: true,
                              message: "Coordinator email is required",
                            },
                            {
                              type: "email",
                              message: "Enter valid email",
                            },
                          ]}
                        >
                          <Input
                            size="medium"
                            placeholder="NGO Coordinator Email"
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

export default NGO_Profile;
