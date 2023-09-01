import React from "react";
import BoyImage from "../../assets/da_img/login1.png";
import { Link} from "react-router-dom";
// import "../../assets/scss/style.scss";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function Corp_SignUpSelector() {
  return (
    <div className="bg-light fontfamilynca">
      <div className="col-md-12 row ">
        <div className="col-md-6 signupimg" style={boyImageCom}></div>
        <div className="col-md-6 ">
          <div className="row ">
            <div className="col-12 text-center ">
              {/* <form id="msform" name="msform" method="POST" autocomplete="off">
                <ul id="signupselector">
                  <li className="active" id="account" style={{ display: "none" }}>
                    <strong>KYC</strong>
                  </li>
                  <li id="personal" style={{ display: "none" }}>
                    <strong>Verify OTP</strong>
                  </li>
                  <li id="payment" style={{ display: "none" }}>
                    <strong>PAN Details</strong>
                  </li>
                  <li id="confirm" style={{ display: "none" }}>
                    <strong>Submitted</strong>
                  </li>
                </ul>
                <p className="font16 text-danger b" id=" invDetailsmessage"></p>
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h6 className="text-start b">
                          Fill in the details of your NGO
                        </h6>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 1 - 2</h2>
                      </div>
                    </div>

                    <div className="container mt-1 mb-1 text-start">
                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b"
                        for="txtFldNGOName"
                      >
                        NGO Name
                      </label>
                      <input
                        type="text"
                        className="form-control w-100"
                        id="txtFldNGOName"
                        name="txtFldNGOName"
                        placeholder="Enter NGO Number"
                        maxlength="10"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="selNGOCategory"
                      >
                        NGO Category
                      </label>
                      <select
                        className="form-control w-100"
                        name="selNGOCategory"
                        id="selNGOCategory"
                      >
                        <option value=""> -- Select Category -- </option>
                        <option value="Elderly">Elderly</option>
                        <option value="Animals">Animals</option>
                        <option value="Children">Children</option>
                        <option value="Cultural Heritage">
                          Cultural Heritage
                        </option>
                        <option value="Education">Education</option>
                        <option value="Employment">Employment</option>
                        <option value="Environment">Environment</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Disaster Relief Works">
                          Disaster Relief Works
                        </option>
                        <option value="Others">Others</option>
                        <option value="Women Empowerment">
                          Women Empowerment
                        </option>
                        <option value="Community Mobilization">
                          Community Mobilization
                        </option>
                        <option value="Rural Development">
                          Rural Development
                        </option>
                        <option value="Sustainable Livelihood">
                          Sustainable Livelihood
                        </option>
                        <option value="Differently Abled">
                          Differently Abled
                        </option>
                        <option value="Advocacy">Advocacy</option>
                      </select>
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldNGOName"
                      >
                        NGO Email
                      </label>
                      <input
                        type="text"
                        className="form-control  w-100"
                        id="txtFldNGOEmail"
                        name="txtFldNGOEmail"
                        placeholder="Enter NGO Email"
                        maxlength="150"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldNGOPhone"
                      >
                        NGO Phone
                      </label>

                      <div className="input-group ">
                        <button
                          type="button"
                          className="btnnca btn-default bg-light dropdown-toggle input-tgroup"
                          data-bs-toggle="dropdown"
                        >
                          IN(+91)
                        </button>

                        <input
                          type="text"
                          className="form-control mobilenumberval"
                          id="txtFldNGOPhone"
                          name="txtFldNGOPhone"
                          placeholder="Enter NGO Phone"
                          maxlength="150"
                        />
                      </div>
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldNGOWebsite"
                      >
                        Website
                      </label>

                      <input
                        type="text"
                        className="form-control w-100"
                        id="txtFldNGOWebsite"
                        name="txtFldNGOWebsite"
                        placeholder="Enter NGO Website"
                        maxlength="150"
                      />

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldNGORegCertificate"
                      >
                        Registration Certification
                      </label>

                      <div className="input-group input-file">
                        <input
                          type="file"
                          className="form-control"
                          name="txtFldNGOFilename"
                          id="txtFldNGOFilename"
                          placeholder="Enter Registration Certification"
                        />
                        <span className="input-group-btn">
                          <label
                            className="btnnca btn-default"
                            type="button"
                            for="txtFldNGOFilename"
                          >
                            <i className="fa fa-upload themeCol-pink"></i>
                          </label>
                          <label
                            className="btnnca btn-default btn-reset"
                            type="button"
                          >
                            <i className="fa fa-trash themeCol-pink"></i>
                          </label>
                        </span>
                      </div>

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldNGO12aFilename"
                      >
                        12A Certificate and 80G Authorisation
                      </label>

                      <div className="input-group input-file">
                        <input
                          type="file"
                          className="form-control"
                          name="txtFldNGO12aFilename"
                          id="txtFldNGO12aFilename"
                          placeholder="Enter 12A Certificate and 80G Authorisation"
                        />
                        <span className="input-group-btn">
                          <label
                            className="btnnca btn-default"
                            type="button"
                            for="txtFldNGO12aFilename"
                          >
                            <i className="fa fa-upload themeCol-pink"></i>
                          </label>
                          <label
                            className="btnnca btn-default btn-reset"
                            type="button"
                          >
                            <i className="fa fa-trash themeCol-pink"></i>
                          </label>
                        </span>
                      </div>
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>
                    </div>
                  </div>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    name="next"
                    className=" bg-goldweb btn-sm btnborder w-25"
                  >
                    Next <i className="fa fa-arrow-right"></i>
                  </button>
                  &nbsp;&nbsp;
                </fieldset>

                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h6 className="text-start b">Fill your contact details</h6>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 2 - 2</h2>
                      </div>
                    </div>

                    <div className="container mt-3 mb-3 text-start">
                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b"
                        for="txtFldFirstName"
                      >
                        NGO Name
                      </label>
                      <input
                        type="text"
                        className="form-control w-100"
                        id="txtFldFirstName"
                        name="txtFldFirstName"
                        placeholder="Enter your first name"
                        maxlength="10"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldLastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control w-100"
                        id="txtFldLastName"
                        name="txtFldLastName"
                        placeholder="Enter your last name"
                        maxlength="10"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldJobtitle"
                      >
                        NGO Email
                      </label>
                      <input
                        type="text"
                        className="form-control  w-100"
                        id="txtFldJobtitle"
                        name="txtFldJobtitle"
                        placeholder="Enter your job title"
                        maxlength="150"
                      />
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldContact"
                      >
                        Contact no.
                      </label>

                      <div className="input-group ">
                        <button
                          type="button"
                          className="btnnca btn-default bg-light dropdown-toggle input-tgroup"
                          data-bs-toggle="dropdown"
                        >
                          IN(+91)
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          id="txtFldContact"
                          name="txtFldContact"
                          placeholder="Enter your contact no."
                          maxlength="150"
                        />
                      </div>
                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>

                      <label
                        style={{ textAlign: "left" }}
                        className="para text-start b mt-3"
                        for="txtFldEmailAddress"
                      >
                        E-mail Address
                      </label>

                      <input
                        type="text"
                        className="form-control w-100"
                        id="txtFldEmailAddress"
                        name="txtFldEmailAddress"
                        placeholder="Type in your e-mail address"
                        maxlength="150"
                      />

                      <div
                        className="text-danger errors"
                        style={{ fontSize: 15 }}
                      ></div>
                    </div>
                  </div>
                  <button
                    type="button"
                    name="previous"
                    className="previous btnnca btn-outline-secondary btn-sm w-25"
                    value="Previous"
                  >
                    {" "}
                    <i className="fa fa-arrow-left"></i>
                    &nbsp; Previous
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    name="SubmitDetail"
                    id="SubmitDetail"
                    className="btnnca btn-gold btn-sm w-25"
                  >
                    Submit <i className="fa fa-arrow-right"></i>
                  </button>
                  &nbsp;&nbsp;
                </fieldset>
              </form> */}
              <h2> signup form for Corp will be uploaded soon</h2>
              <Link to="/corpsignin">
                <button
                  type="button"
                  name="SubmitDetail"
                  id="SubmitDetail"
                  className="btnnca btn-gold btn-sm w-25"
                >
                  Submit <i className="fa fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Model popup */}
        <div className="modal fade" id="signupsubmitdiv">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-div ">
                <div className="d-flex justify-content-center">
                  <img
                    src={require("./../../assets/icons/check-icon.png")}
                    alt="check-icon"
                  />
                </div>
                <h4
                  className="modal-title text-center"
                  id="gridSystemModalLabel"
                >
                  Your Sign-Up request is submitted!
                </h4>
                <div
                  id="alertmsg"
                  className="text-dark d-flex justify-content-center text-center font12 pt-3"
                  style={{ display: "inline-block" }}
                ></div>

                <div className="modal-footer d-flex justify-content-center text-center">
                  <button type="button" className="btnnca btn-success btn-sm">
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corp_SignUpSelector;
