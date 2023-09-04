import React from "react";
import BoyImage from "../../assets/da_img/login1.png";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
// import "../../assets/scss/style.scss";

const boyImageCom = {
  backgroundImage: `url(${BoyImage}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function SignUpSelector() {
  return (
    <>
      <div className="bg_dtheme">
        <form
          id="msform"
          name="msform"
          method="POST"
          autocomplete="off"
          enctype="multipart/form-data"
        >
          <div className="col-md-12" style={{ marginLeft: "7px" }}>
            <div className="">
              <div className="row text-center mt-5">
                <h6 className="b text-white">
                  Fill in the details of your NGO
                  <br />
                  <small className="text-danger steps b  text-warning">
                    * Denotes Mandatory fields.
                  </small>
                </h6>
              </div>
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
                          <legend className="para b themeCol-orange">
                            NGO Information:{" "}
                          </legend>
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOName"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              NGO Name{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOName"
                                name="txtFldNGOName"
                                maxlength="250"
                                placeholder="Name of the NGO"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOName} */}
                          </div>
                          {/* Contact no*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldContactNo"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Contact No.{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldContactNo"
                                name="txtFldContactNo"
                                maxlength="250"
                                placeholder="Contact Number"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldContactNo} */}
                          </div>
                          {/* Registered Address*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldRegisteredAddress"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Registered Address{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                rows="4"
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldRegisteredAddress"
                                name="txtFldRegisteredAddress"
                                maxlength="500"
                                placeholder="Registered Address"
                              ></textarea>
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldRegisteredAddress} */}
                          </div>{" "}
                          {/* selNGOCategory */}
                          <div className="row mb-3">
                            <label
                              htmlfor="selNGOCategory"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Category
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-control w-100"
                                name="selNGOCategory"
                                id="selNGOCategory"
                                // value={this.state.input.selNGOCategory}
                                // onChange={this.handleForm}
                              >
                                <option value="">
                                  {" "}
                                  -- Select NGO Category --{" "}
                                </option>
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
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.selNGOCategory} */}
                          </div>
                          {/* selNGOCategory */}
                          {/* txtFldWebsite */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldWebsite"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Website
                              <small class="font10 b  text-danger">
                                <br />
                                (Optional)
                              </small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldWebsite"
                                name="txtFldWebsite"
                                maxlength="250"
                                placeholder="Website if you already have."
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldWebsite} */}
                          </div>
                          {/* txtFldWebsite */}
                          <legend className="para b themeCol-orange">
                            NGO Coordinator Information:
                          </legend>
                          {/* txtFld NGO Cordinator name */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOCorName"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Name <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOCorName"
                                name="txtFldNGOCorName"
                                maxlength="250"
                                placeholder="NGO Coordinator Name"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOCorName} */}
                          </div>
                          {/* txtFldNGOCorName */}
                          {/* txtFld NGO Cordinator Mobile */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOCorMob"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Mobile <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOCorMob"
                                name="txtFldNGOCorMob"
                                maxlength="250"
                                placeholder="NGO Coordinator Mobile Number"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOCorMob} */}
                          </div>
                          {/* txtFldNGOCorMob */}
                          {/* txtFldNGOCorEmail */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOCorEmail"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Email <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOCorEmail"
                                name="txtFldNGOCorEmail"
                                maxlength="250"
                                placeholder="NGO Coordinator Email"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOCorEmail} */}
                          </div>
                          {/* txtFldNGOCorEmail */}
                          <legend className="para b themeCol-orange">
                            General NGO Information:
                          </legend>
                          {/* txtFldNGOAbout */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOAbout"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              About
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                rows="7"
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOAbout"
                                name="txtFldNGOAbout"
                                maxlength="250"
                                placeholder="About the NGO (In 250 words)"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOCorEmail} */}
                          </div>
                          {/* txtFldNGOAbout */}
                          {/* txtFldNGOHistory */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOHistory"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Brief History
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                rows="7"
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOHistory"
                                name="txtFldNGOHistory"
                                maxlength="250"
                                placeholder="Brief History of the NGO (In 250 words)"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOHistory} */}
                          </div>
                          {/* txtFldNGOHistory */}
                          {/* txtFldNGOVision */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOVision"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Vision
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                rows="5"
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOVision"
                                name="txtFldNGOVision"
                                maxlength="250"
                                placeholder="Vision of the NGO (In 50 words)"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOVision} */}
                          </div>
                          {/* txtFldNGOVision */}
                          {/* txtFldNGOMission */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOMission"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Mission
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                rows="5"
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldNGOMission"
                                name="txtFldNGOMission"
                                maxlength="250"
                                placeholder="Mission of the NGO (In 100 words)"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOMission} */}
                          </div>
                          {/* txtFldNGOMission */}
                          {/* txtFldNGOMission */}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldNGOGeographic"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Geography
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-control w-100"
                                name="txtFldNGOGeographic"
                                id="txtFldNGOGeographic"
                                // value={this.state.input.txtFldNGOGeographic}
                                // onChange={this.handleForm}
                              >
                                <option value="">
                                  {" "}
                                  -- Geographic Focus of the activity --{" "}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldNGOGeographic} */}
                          </div>
                          {/* txtFldNGOMission */}
                        </div>
                        {/* container class*/}
                      </div>
                      {/* form card*/}
                    </fieldset>
                    {/* fieldset */}
                  </div>
                  {/* col-md-6 */}
                  <div className="col-md-6">
                    <fieldset>
                      <div className=" p-0">
                        <div className="container mt-1 mb-1 g-1 pt-2 text-start">
                          <legend className="para b themeCol-orange">
                            Copy of below Certificates to be uploaded:{" "}
                          </legend>
                          {/* txtFldCertIncROC*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldCertIncROC"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Incorporation from ROC{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldCertIncROC"
                                  placeholder="Certificate of Incorporation from ROC"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldCertIncROC"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldCertIncROC} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldCertIncROC*/}
                          {/* txtFldCertMOAAOA*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldCertMOAAOA"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              MOA / AOA{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldCertMOAAOA"
                                  placeholder="Certificate of MOM / AOA"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldCertMOAAOA"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldCertMOAAOA} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldCertMOAAOA*/}
                          {/* txtFldCertRegTruDeed*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldCertRegTruDeed"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Registered Trust Deed{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldCertRegTruDeed"
                                  placeholder="Certificate of Registered Trust Deed"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldCertRegTruDeed"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldCertRegTruDeed} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldCertRegTruDeed*/}
                          {/* txtFldCertPAN*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldCertPAN"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              PAN <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldCertPAN"
                                  placeholder="PAN"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldCertPAN"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldCertPAN} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldCertPAN*/}
                          {/* txtFldCertTAN*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldCertTAN"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              TAN <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldCertTAN"
                                  placeholder="TAN"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldCertTAN"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldCertTAN} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldCertTAN*/}
                          {/* txtFld12ACertificate*/}
                          <div className="row">
                            <label
                              htmlfor="txtFld12ACertificate"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              12A Cert.
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFld12ACertificate"
                                  placeholder="12 a certificate"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFld12ACertificate"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFld12ACertificate} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFld2ACertificate*/}
                          {/* txtFld80GCertificate*/}
                          <div className="row">
                            <label
                              htmlfor="txtFld80GCertificate"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              80G Cert.{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFld80GCertificate"
                                  placeholder="Certificate of MOM / AOA"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFld80GCertificate"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFld80GCertificate} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFld80GCertificate*/}
                          {/* txtFldCertCSRForm1*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldCertCSRForm1"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              CSR Form 1.
                              <small class="font10 b  text-danger">
                                (Only if available.)
                              </small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldCertCSRForm1"
                                  placeholder="CSR Form 1."
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldCertCSRForm1"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>
                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldCertCSRForm1} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldCertCSRForm1*/}
                          {/* txtFldFCRA*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldFCRA"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              FCRA Reg.
                              <small class="font10 b  text-danger">
                                <br />
                                (Optional)
                              </small>
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldFCRA"
                                  placeholder="Certificate of MOM / AOA"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldFCRA"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldFCRA} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldFCRA*/}
                          <legend className="para b themeCol-orange">
                            Only for available Years. Upload all 3 years
                            together.
                          </legend>
                          {/* txtFldITR*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldITR"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              ITR of last three AYs
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldITR"
                                  multiple
                                  placeholder="Certificate of MOM / AOA"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldITR"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldITR} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldITR*/}
                          {/* txtFldForm10B*/}
                          <div className="row">
                            <label
                              htmlfor="txtFldForm10B"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Form 10B of last three AYs
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldForm10B"
                                  multiple
                                  placeholder="Certificate of MOM / AOA"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldForm10B"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldForm10B} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldForm10B*/}
                          {/* txtFldFCRAReturns*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldFCRAReturns"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              FCRA Returns of last three FYs
                            </label>
                            <div className="col-sm-10">
                              <div class="input-group input-file">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="files"
                                  id="txtFldFCRAReturns"
                                  multiple
                                  placeholder="Certificate of MOM / AOA"
                                />
                                <span class="input-group-btn">
                                  <label
                                    class="btn btn-default"
                                    type="button"
                                    for="txtFldFCRAReturns"
                                  >
                                    <i className="fa fa-upload themeCol-pink"></i>
                                  </label>
                                  <label
                                    class="btn btn-default btn-reset"
                                    type="button"
                                  >
                                    <i className="fa fa-trash themeCol-pink"></i>
                                  </label>
                                </span>
                              </div>

                              <div
                                className="text-danger errors"
                                style={{ fontSize: 15 }}
                              >
                                {/* {this.state.errors.txtFldFCRAReturns} */}
                              </div>
                            </div>
                          </div>{" "}
                          {/* txtFldForm10B*/}
                          <legend className="para b themeCol-orange">
                            Banking Information:{" "}
                          </legend>
                          {/* txtFldBankName*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldBankName"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Bank Name{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldBankName"
                                name="txtFldBankName"
                                maxlength="250"
                                placeholder="Your Bank Name"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldBankName} */}
                          </div>
                          {/* txtFldBankName*/}
                          {/* txtFldAccountName*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldAccountName"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Account Name{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldAccountName"
                                name="txtFldAccountName"
                                maxlength="250"
                                placeholder="Your Account Name"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldAccountName} */}
                          </div>
                          {/* txtFldAccountName*/}
                          {/* txtFldAccountNumber*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldAccountNumber"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              Account Number{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldAccountNumber"
                                name="txtFldAccountNumber"
                                maxlength="250"
                                placeholder="Your Account Number"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldAccountNumber} */}
                          </div>
                          {/* txtFldAccountNumber*/}
                          {/* txtFldIFSCCode*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldIFSCCode"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              IFSC Code{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldIFSCCode"
                                name="txtFldIFSCCode"
                                maxlength="250"
                                placeholder="Your Account IFSC Code"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldIFSCCode} */}
                          </div>
                          {/* txtFldIFSCCode*/}
                          {/* txtFldIFSCCode*/}
                          <div className="row mb-3">
                            <label
                              htmlfor="txtFldUPICode"
                              className="col-sm-2 col-form-label col-form-label-sm para b "
                            >
                              UPI Code{" "}
                              <small className="text-danger b">*</small>
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFldUPICode"
                                name="txtFldUPICode"
                                maxlength="250"
                                placeholder="Your Account UPI Code"
                              />
                            </div>
                          </div>
                          <div className="text-danger errors para">
                            {/* {this.state.errors.txtFldUPICode} */}
                          </div>
                          {/* txtFldUPICode*/}
                          <div class="row mb-5">
                            <div class="col text-end">
                              <NavLink to="/Signup">
                                <button
                                  type="button"
                                  name="signupback"
                                  id="signupback"
                                  class="btnnca btn-outline-secondary btn-sm"
                                  value="Back"
                                >
                                  {" "}
                                  <i className="fa fa-arrow-left"></i>
                                  &nbsp; Back
                                </button>
                              </NavLink>
                            </div>
                            &nbsp;&nbsp;
                            {/* <a href="/NGODashboard"> */}
                            <div class="col">
                              <NavLink to="/ngosignin">
                                <button
                                  type="button"
                                  name="SubmitDetail"
                                  id="SubmitDetail"
                                  class="btnnca btn-gold btn-sm "
                                  // onClick={this.finalSubmit}
                                >
                                  Submit <i className="fa fa-arrow-right"></i>
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  {/* Model popup */}
                </div>
              </div>
            </div>
            <div className="modal fade" id="signupsubmitdiv">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body ">
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
                      <button type="button" className="btn btn-success btn-sm">
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpSelector;
