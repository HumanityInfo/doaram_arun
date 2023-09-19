import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoyImage from "../../assets/da_img/login1.png";
import { NavLink } from "react-router-dom";
import { Form, Input, Button, Select, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UploadService from "../../service/file-upload.service";
import { Modal } from "antd";
import $ from "jquery";

import {
  LinkedinOutlined,
  UploadOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const OPTIONS = [
  "Elderly",
  "Animals",
  "Children",
  "Cultural Heritage",
  "Education",
  "Employment",
  "Environment",
  "Disaster Relief Works",
  "Others",
  "Women Empowerment",
  "Community Mobilization",
  "Rural Development",
  "Sustainable Livelihood",
  "Differently Abled",
  "Advocacy",
];

function SignUpSelectors() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const userCred = $.parseJSON(sessionStorage.getItem("da_userCred"));
  // console.log("session", userCred);

  const onsubmit = (values) => {
  
// console.log((values.ngoProfile.category).toString());

window.showLoader();
    const ngoProfile = {
      id: "",
      name: values.ngoProfile.name,
      category: (values.ngoProfile.category).toString(),
      about: values.ngoProfile.about,
      history: values.ngoProfile.history,
      vision: values.ngoProfile.vision,
      mission: values.ngoProfile.mission,
      geoFocus: "<GEO_FOCUS>",
      staticWebPageLink: "",
      membership: "NGO_SILVER",
      certIncorpRoc: values.ngoProfile.certIncorpRoc.file.originFileObj.name,
      moaAoa: values.ngoProfile.moaAoa.file.originFileObj.name,
      regTrustDeed: values.ngoProfile.regTrustDeed.file.originFileObj.name,
      pan: values.ngoProfile.pan.file.originFileObj.name,
      tan: values.ngoProfile.tan.file.originFileObj.name,
      csrForm1: values.ngoProfile.csrForm1.file.originFileObj.name,
      cert12a: values.ngoProfile.cert12a.file.originFileObj.name,
      cert80g: values.ngoProfile.cert80g.file.originFileObj.name,
      certFcra: values.ngoProfile.certFcra.file.originFileObj.name,
      itrForm: values.ngoProfile.itrForm.file.originFileObj.name,
      form10B: values.ngoProfile.form10B.file.originFileObj.name,
      fcraReturns: values.ngoProfile.fcraReturns.file.originFileObj.name,
      logo: values.ngoProfile.logo.file.originFileObj.name,
      micrositeImages:values.ngoProfile.micrositeImages.file.originFileObj.name,
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: "",
    };
    // console.log("profile", ngoProfile);
    const contactInfo = {
      entityId: "",
      addressLine1: values.contactInfo.addressLine1,
      addressLine2: "",
      city: "Coimbatore ",
      state: "Tamil Nadu",
      country: "India",
      pinCode: "641113",
      email: "adifederationcbe@gmail.com",
      phone: values.contactInfo.phone,
      website: values.contactInfo.website,
      facebook: values.contactInfo.facebook,
      instagram: values.contactInfo.instagram,
      linkedin: values.contactInfo.linkedin,
      twitter: values.contactInfo.twitter,
      otherlinks: "", //For now dont add anything to it
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: "",
    };
    // console.log("contact", contactInfo);

    const ngoCoordinator = {
      entityId: "",
      coordinatorEmail: values.ngoCoordinator.email,
      coordinatorName: values.ngoCoordinator.name,
      coordinatorPhone: values.ngoCoordinator.phone,
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: "",
    };
    // console.log("coordinator", ngoCoordinator);

    const bankDetail = {
      entityId: "",
      bankName: values.bankDetails.bankName,
      branchName: values.bankDetails.branchName,
      accountName: values.bankDetails.accountName,
      accountNumber: values.bankDetails.accountNumber,
      ifscCode: values.bankDetails.ifscCode,
      upiCode: values.bankDetails.upiCode,
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: "",
    };
    // console.log("bank", bankDetail);

    // Create a new FormData object to combine JSON data and files
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("userCred", JSON.stringify(userCred));
    formDataWithFiles.append("ngoProfile", JSON.stringify(ngoProfile));
    formDataWithFiles.append("contactInfo", JSON.stringify(contactInfo));
    formDataWithFiles.append("ngoCoordinator", JSON.stringify(ngoCoordinator));
    formDataWithFiles.append("bankDetails", JSON.stringify(bankDetail));

    formDataWithFiles.append(
      "certIncorpRoc",
      values.ngoProfile.certIncorpRoc.file.originFileObj
    );

    formDataWithFiles.append(
      "moaAoa",
      values.ngoProfile.moaAoa.file.originFileObj
    );
    formDataWithFiles.append(
      "regTrustDeed",
      values.ngoProfile.regTrustDeed.file.originFileObj
    );
    formDataWithFiles.append("pan", values.ngoProfile.pan.file.originFileObj);
    formDataWithFiles.append("tan", values.ngoProfile.tan.file.originFileObj);
    formDataWithFiles.append(
      "csrForm1",
      values.ngoProfile.csrForm1.file.originFileObj
    );
    formDataWithFiles.append(
      "cert12a",
      values.ngoProfile.cert12a.file.originFileObj
    );
    formDataWithFiles.append(
      "cert80g",
      values.ngoProfile.cert80g.file.originFileObj
    );
    formDataWithFiles.append(
      "certFcra",
      values.ngoProfile.certFcra.file.originFileObj
    );
    formDataWithFiles.append("logo", values.ngoProfile.logo.file.originFileObj);

    formDataWithFiles.append(
      "itrForm",
      values.ngoProfile.itrForm.file.originFileObj
    );
    formDataWithFiles.append(
      "form10B",
      values.ngoProfile.form10B.file.originFileObj
    );
    formDataWithFiles.append(
      "fcraReturns",
      values.ngoProfile.fcraReturns.file.originFileObj
    );
    formDataWithFiles.append(
      "micrositeImages",
      values.ngoProfile.micrositeImages.file.originFileObj
    );

    // // List key/value pairs
    // for (let [key, value] of formDataWithFiles.entries()) {
    //   console.log(`${key} = ${value}`); // key1 = value1, then key2 = value2
    // }

    UploadService.create("/signup", formDataWithFiles).then((response) => { 
      let logSts = response.data.message.messageType; 
      let logStsDesc = response.data.message.messageDetails[2]; 
      if (logSts == "Success") {
        window.toastr.warning("Profile creation request received successfully"); 
        navigate("/accounts/account_verify/"); 
        window.hideLoader();
      } else {
        window.toastr.danger(logStsDesc);
        navigate("/ngosignin");
        window.hideLoader(); 
      }
    });
  };
  const validatePhoneNumber = (rule, value) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!value || phoneNumberRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit phone number!");
  };
  const movetohome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg_dtheme"> 
        <Modal
          closeIcon={null}
          open={isModalOpen}
          //style={{ top: 20 }}
          // onOk={handleOk}
          // onCancel={handleCancel}
          footer={null}
        >
          <div className="d-flex justify-content-center mb-4">
            <img
              src={require("./../../assets/icons/check-icon.png")}
              alt="check-icon"
            />
          </div>
          <p>
            {" "}
            A verification link has been sent to your registered NGO authorized
            email id
          </p>
          <div className="d-flex justify-content-center mb-2">
            <Button type="primary" onClick={movetohome}>
              Home
            </Button>
          </div>
        </Modal>
        <div className="col-md-12" style={{ marginLeft: "0px" }}>
          <div className="">
            <div className="row text-center">
              <h6 className="b text-white">
                Fill in the details of your NGO
                <br />
                <small className="text-danger steps b  text-warning">
                  * Denotes Mandatory fields.
                </small>
              </h6>
            </div>
            <Form
              //layout="vertical"
              onFinish={onsubmit}
              name="validateOnly"
              labelCol={{ span: 7 }}
              //autoComplete="off"
            >
              <div class="col-md-12 card p-0">
                <div class="row">
                  <div
                    className="col-md-6"
                    style={{ borderRight: "1px solid #f3f3f3" }}
                  >
                    <fieldset>
                      <div className=" p-0">
                        <div className="container mt-1 mb-1 g-1 pt-2 text-start">
                          {/* Name of NGO*/}
                          <legend className="para b themeCol-orange mx-3">
                            NGO Information:{" "}
                          </legend>
                          <div className="row mb-3">
                            <div>
                              <Form.Item
                                className="para b themeCol-orange"
                                name={["ngoProfile", "name"]}
                                label="NGO Name"
                                values={"NGO"}
                                //colon={false}
                                rules={[
                                  {
                                    required: true,
                                    message: "NGO name is required",
                                  },
                                ]}
                              >
                                <Input
                                  size="medium"
                                  placeholder="Name of  the NGO"
                                />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item
                                className="para b themeCol-orange"
                                name={["contactInfo", "phone"]}
                                label="Contact No"
                                values={"NGO"}
                                //colon={false}
                                rules={[
                                  {
                                    required: true,
                                    message: "Contact number is required",
                                  },
                                  {
                                    validator: validatePhoneNumber,
                                  },
                                ]}
                              >
                                <Input
                                  size="medium"
                                  type="number"
                                  placeholder="Contact Number"
                                />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item
                                className="para b themeCol-orange"
                                name={["contactInfo", "addressLine1"]}
                                label="Registered Address"
                                //colon={false}
                                rules={[
                                  {
                                    required: true,
                                    message: "Address is required",
                                  },
                                ]}
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
                                name={["ngoProfile", "category"]}
                                label="Category"
                                rules={[
                                  {
                                    required: true,
                                    message: "Category is required",
                                  },
                                ]}
                              >
                                <Select
                                  mode="multiple"
                                  placeholder="--NGO Category--"
                                  value={selectedItems}
                                  onChange={setSelectedItems}
                                  style={{
                                    width: "100%",
                                  }}
                                  options={filteredOptions.map((item) => ({
                                    value: item,
                                    label: item,
                                  }))}
                                />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item
                                className=""
                                name={["contactInfo", "website"]}
                                label="Website"
                                values={"NGO"}
                                requiredMark="optional"
                                rules={[
                                  {
                                    type: "url",
                                    message: "please enter correct url",
                                  },
                                ]}
                              >
                                <Input
                                  size="medium"
                                  placeholder="Website if you already have."
                                />
                              </Form.Item>
                            </div>
                            <div className="upload">
                              <Form.Item
                                className=""
                                name={["ngoProfile", "logo"]}
                                label="Logo"
                              >
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
                            <div>
                              <Form.Item
                                className=""
                                name={["contactInfo", "facebook"]}
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
                                name={["contactInfo", "instagram"]}
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
                                name={["contactInfo", "linkedin"]}
                                label="Linkedin"
                              >
                                <Input
                                  addonBefore={<LinkedinOutlined />}
                                  placeholder="LinkedIn ID"
                                />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item
                                className=""
                                name={["contactInfo", "twitter"]}
                                label="Twitter"
                              >
                                <Input
                                  addonBefore={<TwitterOutlined />}
                                  placeholder="Twitter ID"
                                />
                              </Form.Item>
                            </div>
                            {/* Dont use this for now
                             <div>
                              <Form.Item
                                className=""
                                name={["contactInfo", "otherlinks"]}
                                label="Other links"
                              >
                                <Input
                                  addonBefore={<LinkOutlined />}
                                  placeholder="Other Links(Optional)"
                                />
                              </Form.Item>
                            </div> */}
                            {/* *************************ngoCoordinator********************** */}
                            <legend className="para b themeCol-orange mx-4">
                              NGO Coordinator Information:{" "}
                            </legend>
                            <div>
                              <Form.Item
                                name={["ngoCoordinator", "name"]}
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
                                name={["ngoCoordinator", "phone"]}
                                label="Mobile"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Coordinator phone number is required",
                                  },
                                  {
                                    validator: validatePhoneNumber,
                                  },
                                ]}
                              >
                                <Input
                                  size="medium"
                                  type="number"
                                  placeholder="NGO Coordinator Mobile Numner"
                                />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item
                                name={["ngoCoordinator", "email"]}
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
                            {/* **********genenral info*********** */}
                            <legend className="para b themeCol-orange mx-4">
                              General NGO Information:{" "}
                            </legend>
                            <div>
                              <Form.Item
                                className="para b themeCol-orange"
                                name={["ngoProfile", "about"]}
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
                                name={["ngoProfile", "history"]}
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
                              <Form.Item
                                name={["ngoProfile", "vision"]}
                                label="  Vision"
                              >
                                <Input.TextArea
                                  showCount
                                  maxLength={150}
                                  style={{ height: 130, resize: "none" }}
                                  placeholder="  Vision of the NGO (In 150 words)"
                                />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item
                                name={["ngoProfile", "mission"]}
                                label="  Mission"
                              >
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
                                name={["ngoProfile", "geoFocus"]}
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
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <div className=" p-0">
                        {/* *****************Certificate***************** */}
                        <div className="container mt-1 mb-1 g-1 pt-2 text-start">
                          <legend className="para b themeCol-orange mx-2">
                            Copy of below Certificates to be uploaded:{" "}
                          </legend>
                          <div className="upload">
                            <Form.Item
                              className=""
                              name={["ngoProfile", "certIncorpRoc"]}
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
                              name={["ngoProfile", "moaAoa"]}
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
                              name={["ngoProfile", "regTrustDeed"]}
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
                              name={["ngoProfile", "pan"]}
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
                              name={["ngoProfile", "tan"]}
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
                              name={["ngoProfile", "cert12a"]}
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
                              name={["ngoProfile", "cert80g"]}
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
                              name={["ngoProfile", "csrForm1"]}
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
                              name={["ngoProfile", "certFcra"]}
                              label=" FCRA Reg."
                            >
                              <Upload maxCount={1}>
                                <Button block icon={<UploadOutlined />}>
                                  Click to upload
                                </Button>
                              </Upload>
                            </Form.Item>
                          </div>
                          <legend className="para b themeCol-orange">
                            Only for available Years. Upload all 3 years
                            together.
                          </legend>
                          <div className="upload">
                            <Form.Item
                              className=""
                              name={["ngoProfile", "itrForm"]}
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
                              name={["ngoProfile", "form10B"]}
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
                              name={["ngoProfile", "fcraReturns"]}
                              label=" FCRA Returns of last three FYs"
                            >
                              <Upload maxCount={3}>
                                <Button block icon={<UploadOutlined />}>
                                  Click to upload
                                </Button>
                              </Upload>
                            </Form.Item>
                          </div>
                          {/* ************Bank Details************ */}
                          <legend className="para b themeCol-orange">
                            Banking Information:{" "}
                          </legend>
                          <div>
                            <Form.Item
                              name={["bankDetails", "bankName"]}
                              label=" Bank Name"
                              rules={[
                                {
                                  required: true,
                                  message: " Bank name is required",
                                },
                              ]}
                            >
                              <Input
                                size="medium"
                                placeholder="Your Bank Name"
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name={["bankDetails", "accountName"]}
                              label="Account Name"
                              rules={[
                                {
                                  required: true,
                                  message: " Account  name is required",
                                },
                              ]}
                            >
                              <Input
                                size="medium"
                                placeholder="Your Account Name"
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name={["bankDetails", "branchName"]}
                              label="Branch Name"
                              rules={[
                                {
                                  required: true,
                                  message: " Branch name is required",
                                },
                              ]}
                            >
                              <Input
                                size="medium"
                                placeholder="Your Branch Name"
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name={["bankDetails", "accountNumber"]}
                              label=" Account Number"
                              rules={[
                                {
                                  required: true,
                                  message: "  Account Number is required",
                                },
                              ]}
                            >
                              <Input
                                size="medium"
                                type="number"
                                placeholder="Your  Account Number"
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name={["bankDetails", "ifscCode"]}
                              label="IFSC Code"
                              rules={[
                                {
                                  required: true,
                                  message: "IFSC Code is required",
                                },
                              ]}
                            >
                              <Input
                                size="medium"
                                placeholder="Your IFSC Code"
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name={["bankDetails", "upiCode"]}
                              label=" UPI Code"
                              rules={[
                                {
                                  required: true,
                                  message: "  UPI Code is required",
                                },
                              ]}
                            >
                              <Input
                                size="medium"
                                placeholder="Your  UPI Code"
                              />
                            </Form.Item>
                          </div>

                          <div class="row">
                            <div class="row">
                              <div class="col text-end">
                                <NavLink to="/Signup">
                                  <Button
                                    name="signupback"
                                    class="btnnca"
                                    style={{ width: "90px" }}
                                  >
                                    {" "}
                                    <i className="fa fa-arrow-left mx-2"></i>
                                    Back
                                  </Button>
                                </NavLink>
                              </div>
                              &nbsp;&nbsp;
                              <div class="col">
                                {/* <NavLink to="/ngosignin"> */}
                                <Button
                                  htmlType="submit"
                                  className="btnnca btn-gold signupbtn"
                                  style={{ width: "90px" }}
                                >
                                  Submit{" "}
                                  <i className="fa fa-arrow-right mx-2"></i>
                                </Button>
                                {/* </NavLink> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUpSelectors;
