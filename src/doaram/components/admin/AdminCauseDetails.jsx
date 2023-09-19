import React from "react";
import { NavLink, Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";

function AdminCauseDetails(props) {
  const CauseSubmit = () => {
    window.showCauseSubmitModel("", "/CauseDetails");
  };
  return (
    <NGO_Layout type={props.type}>
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-8 row">
                <div class="col">
                  <NavLink to="/NGO_Cause">
                    <button class="btnnca btn-info btn-sm">
                      <i class="fa fa-arrow-left"></i> Back To Cause
                    </button>
                  </NavLink>
                </div>
              </div>
              <div class="col-sm-4">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">NGO</a>
                  </li>
                  <li class="breadcrumb-item active">
                    <NavLink to="/NGO_Cause">NGO Causes</NavLink>
                  </li>
                  <li class="breadcrumb-item active">Create New Cause</li>
                </ol>
              </div>
            </div>

            <div class="row">
              <div class="col-md-8">
                <h5 class="m-0">&nbsp;Cause - Children's Library Fund</h5>
              </div>
            </div>
          </div>
        </div>
        <section class="content">
          <div class="container-fluid">
            <div class="row mt-0   p-3 mb-3">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-cause-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-causedetails"
                    type="button"
                    role="tab"
                    aria-controls="nav-causedetails"
                    aria-selected="true"
                  >
                    Cause Details
                  </button>
                  <button
                    class="nav-link corporatelinks"
                    id="nav-causedonations-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-causedonations"
                    type="button"
                    role="tab"
                    aria-controls="nav-causedonations"
                    aria-selected="true"
                  >
                    Donations
                  </button>
                  <button
                    class="nav-link"
                    id="nav-causehistory-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-causehistory"
                    type="button"
                    role="tab"
                    aria-controls="nav-causehistory"
                    aria-selected="false"
                  >
                    Cause History
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-causedetails"
                  role="tabpanel"
                  aria-labelledby="nav-causedetails"
                >
                  <div class="card">
                    <form class="  ms-5 mt-3 ">
                      <small className="text-danger steps b  text-warning">
                        * Denotes Mandatory fields.
                      </small>
                      <div class="mx-5 text-end mb-3">
                        <NavLink to="/NGO_Cause">
                          <button class="btnnca btn-gold btn-sm">
                            <i class="fa fa-pencil-square-o"></i> Submit for
                            review
                          </button>
                        </NavLink>
                      </div>

                      <div class="mb-3 row">
                        <label
                          htmlFor="selNGOCategory"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          {" "}
                          Category <small className="text-danger b">*</small>
                        </label>
                        <div class="col-sm-8">
                          <select
                            className="form-select form-control  form-select-sm"
                            id="selNGOCategory"
                            name="selNGOCategory"
                            placeholder=""
                            data-placeholder="Choose atleast one category"
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
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          htmlFor="txtNgoTitle"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          Cause Title <small className="text-danger b">*</small>
                        </label>
                        <div class="col-sm-4">
                          <input
                            type="text"
                            class="form-control"
                            id="txtNgoTitle"
                            name="txtNgoTitle"
                            placeholder="Enter Cause Title"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          htmlFor="txtNgoTitleImage"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          Campaign image
                          <span class="text-secondary font10">
                            {" "}
                            <br />( -- Optional -- )
                          </span>
                        </label>
                        <div class="col-sm-8">
                          <div class="input-group input-file">
                            <input
                              type="file"
                              class="form-control"
                              name="files"
                              id="txtFldCampaignImage"
                            />
                            <span class="input-group-btn">
                              <label
                                class="btnnca btn-default"
                                type="button"
                                for="txtFldCampaignImage"
                              >
                                <i className="fa fa-upload themeCol-pink"></i>
                              </label>
                              <label
                                class="btnnca btn-default btn-reset"
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
                            {/* {this.state.errors.permantPANNo} */}
                          </div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          htmlFor="selNGOCategory"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          {" "}
                          Fund Donations{" "}
                          <small className="text-danger b">*</small>
                        </label>
                        <div class="col-sm-8 row">
                          <div class="col-sm-2">
                            <label
                              htmlFor="selNGOCategory"
                              className=" col-form-label col-form-label-sm para b "
                            >
                              {" "}
                              Goals
                            </label>
                          </div>
                          <div class="col-sm-4">
                            <div class="input-group">
                              <span class="input-group-btn">
                                <div class="btnnca btn-default">
                                  <i class="fa fa-inr"></i>
                                </div>
                              </span>
                              <input
                                type="text"
                                class="form-control"
                                name="txtNGOGoals"
                                id="txtNGOGoals"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <div class="col-sm-2">&nbsp;</div>
                        <div class="col-sm-8 row">
                          <div class="col-sm-2">
                            <label
                              htmlFor="txtNGOStartDate"
                              className="col-form-label col-form-label-sm para b "
                            >
                              {" "}
                              Start Date
                            </label>
                          </div>
                          <div class="col-sm-4">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                name="txtNGOStartDate"
                                id="txtNGOStartDate"
                              />
                              <span class="input-group-btn">
                                <div class="btnnca btn-default">
                                  <i className="fa fa-calendar themeCol-pink"></i>
                                </div>
                              </span>
                            </div>
                          </div>

                          <div class="col-sm-2">
                            <label
                              htmlFor="txtNGOEndDate"
                              className="col-form-label col-form-label-sm para b "
                            >
                              {" "}
                              End Date
                            </label>
                          </div>
                          <div class="col-sm-4">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                name="txtNGOEndDate"
                                id="txtNGOEndDate"
                              />
                              <span class="input-group-btn">
                                <div class="btnnca btn-default">
                                  <i className="fa fa-calendar themeCol-pink"></i>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div class="row mb-3">
                        <label
                          htmlFor="txtNgoShortURL"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          Short URL <small className="text-danger b">*</small>
                        </label>
                        <div class="col-sm-8">
                          {" "}
                          <a class="causelinks" target="_blank">
                            <div class="input-group">
                              <input
                                class="btnnca btn-gold btn-sm w-75 text-start"
                                type="text"
                                id="txtNgoShortURL"
                                name="txtNgoShortURL"
                                readonly="true"
                                value="doaram.com/cause/c-T090101"
                              />
                              <span class="input-group-btnnca copyclipboard">
                                <div class="btnnca btn-default">
                                  <i class="fa fa-copy themeCol-pink "></i>
                                </div>
                              </span>
                              <p className="copied text-success"></p>
                            </div>
                          </a>
                        </div>
                      </div> */}

                      <div class="row mb-3">
                        <label
                          htmlFor="txtNgoCauseDesc"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          Cause Description{" "}
                          <small className="text-danger b">*</small>
                        </label>
                        <div class="col-sm-8">
                          <textarea
                            class="form-control w-100"
                            id="txtNgoCauseDesc"
                            name="txtNgoCauseDesc"
                            rows="10"
                            maxlength="250"
                            placeholder="Enter your Cause Description (In 250 Words)"
                          ></textarea>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          htmlFor="selNgoCountry"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          Location <small className="text-danger b">*</small>
                        </label>
                        <div class="col-sm-4">
                          <select
                            name="selNgoCountry"
                            id="selNgoCountry"
                            class="form-control w-100  da_country"
                          >
                            <option value="India" countryid="101">
                              India
                            </option>
                          </select>
                        </div>
                        <div class="col-sm-4">
                          <select
                            className="form-control w-100 da_state"
                            name="selNgoState"
                            id="selNgoState"
                          >
                            {" "}
                            <option value="">Select State</option>
                          </select>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          htmlFor="selNgoCity"
                          class="col-sm-2  form-label"
                        >
                          <span class=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div class="col-sm-6">
                          <select
                            className="form-control w-100 da_cities"
                            name="selNgoCity"
                            id="selNgoCity"
                          >
                            <option value="">Select City</option>
                          </select>
                        </div>
                        <div class="col-sm-6">&nbsp;</div>
                      </div>

                      <div class="row mb-3">
                        <label
                          htmlFor="txtFldGallery1"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          {" "}
                          Gallery
                        </label>

                        <div class="col-sm-8">
                          <div class="input-group input-file">
                            1. &nbsp;&nbsp;&nbsp;
                            <input
                              type="file"
                              class="form-control"
                              name="files"
                              id="txtFldGallery1"
                              placeholder="Certificate of Incorporation from ROC"
                            />
                            <span class="input-group-btn">
                              <label
                                class="btnnca btn-default"
                                type="button"
                                for="txtFldGallery1"
                              >
                                <i className="fa fa-upload themeCol-pink"></i>
                              </label>
                              <label
                                class="btnnca btn-default btn-reset"
                                type="button"
                              >
                                <i className="fa fa-trash themeCol-pink"></i>
                              </label>
                            </span>
                          </div>
                          <div
                            class="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="inputtext"
                          class="col-sm-2  form-label"
                        ></label>
                        <div class="col-sm-8  ms-3">
                          <textarea
                            rows="5"
                            type="text"
                            class="form-control fst-italic w-100"
                            id="inputtext"
                            placeholder="Write description about your Image (In 250 words)"
                          ></textarea>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="txtFldGallery2"
                          class="col-sm-2  form-label"
                        >
                          <span class=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div class="col-sm-8">
                          <div class="input-group input-file">
                            2. &nbsp;&nbsp;&nbsp;
                            <input
                              type="file"
                              class="form-control"
                              name="files"
                              id="txtFldGallery2"
                              placeholder="Certificate of Incorporation from ROC"
                            />
                            <span class="input-group-btn">
                              <label
                                class="btnnca btn-default"
                                type="button"
                                for="txtFldGallery2"
                              >
                                <i className="fa fa-upload themeCol-pink"></i>
                              </label>
                              <label
                                class="btnnca btn-default btn-reset"
                                type="button"
                              >
                                <i className="fa fa-trash themeCol-pink"></i>
                              </label>
                            </span>
                          </div>
                          <div
                            class="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="inputtext"
                          class="col-sm-2  form-label"
                        ></label>
                        <div class="col-sm-8  ms-3">
                          <textarea
                            rows="5"
                            type="text"
                            class="form-control fst-italic w-100"
                            id="inputtext"
                            placeholder="Write description about your Image (In 250 words)"
                          ></textarea>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="txtFldSuppDoc1"
                          className="col-sm-2 col-form-label col-form-label-sm para b "
                        >
                          Supportive Documents
                        </label>
                        <div class="col-sm-8">
                          <div class="input-group input-file">
                            1. &nbsp;&nbsp;&nbsp;
                            <input
                              type="file"
                              class="form-control"
                              name="files"
                              id="txtFldSuppDoc1"
                              placeholder="Certificate of Incorporation from ROC"
                            />
                            <span class="input-group-btn">
                              <label
                                class="btnnca btn-default"
                                type="button"
                                for="txtFldSuppDoc1"
                              >
                                <i className="fa fa-upload themeCol-pink"></i>
                              </label>
                              <label
                                class="btnnca btn-default btn-reset"
                                type="button"
                              >
                                <i className="fa fa-trash themeCol-pink"></i>
                              </label>
                            </span>
                          </div>
                          <div
                            class="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="inputtext"
                          class="col-sm-2  form-label"
                        ></label>
                        <div class="col-sm-8  ms-3">
                          <div class="input-group">
                            <textarea
                              rows="5"
                              type="text"
                              class="form-control fst-italic w-100"
                              id="inputtext"
                              placeholder="Write description about your supportive documents (In 250 words)"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="txtFldSuppDoc2"
                          class="col-sm-2  form-label"
                        >
                          <span class=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div class="col-sm-8">
                          <div class="input-group input-file">
                            2. &nbsp;&nbsp;&nbsp;
                            <input
                              type="file"
                              class="form-control"
                              name="files"
                              id="txtFldSuppDoc2"
                              placeholder="Certificate of Incorporation from ROC"
                            />
                            <span class="input-group-btn">
                              <label
                                class="btnnca btn-default"
                                type="button"
                                for="txtFldSuppDoc2"
                              >
                                <i className="fa fa-upload themeCol-pink"></i>
                              </label>
                              <label
                                class="btnnca btn-default btn-reset"
                                type="button"
                              >
                                <i className="fa fa-trash themeCol-pink"></i>
                              </label>
                            </span>
                          </div>
                          <div
                            class="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="inputtext"
                          class="col-sm-2  form-label"
                        ></label>
                        <div class="col-sm-8  ms-3">
                          <textarea
                            rows="5"
                            type="text"
                            class="form-control fst-italic w-100"
                            id="inputtext"
                            placeholder="Write description about your supportive documents (In 250 words)"
                          ></textarea>
                        </div>
                      </div>

                      {/* <div class="row mb-3">
                        <label
                          htmlFor="txtNgoCauseStatus"
                          class="col-sm-2  form-label"
                        >
                          <span class=" text-dark fw-semibold">Status </span>
                        </label>
                        <div class="col-sm-8">
                          <select name="txtNgoCauseStatus" id="txtNgoCauseStatus" class="form-control">
                          <option value="Under Review">Under Review</option>
                            <option value="Active">Active</option>
                            <option value="InActive">InActive</option>
                          </select>
                        </div>
                      </div> */}

                      <div class="row mb-5">
                        <div class="col-md-5"></div>
                        <div class="col-md-3">
                          <button
                            type="button"
                            name="SubmitDetail"
                            id="SubmitDetail"
                            class="btnnca btn-gold btn-sm   "
                            // onClick={this.CauseSubmit}
                          >
                            <i class="fa fa-pencil-square-o"></i> Submit for
                            review
                          </button>
                        </div>
                        <div class="col-md-5"></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-causedonations"
                  role="tabpanel"
                  aria-labelledby="nav-causedonations-tab"
                >
                  <div class=" row col-md-12 mt-5">
                    {" "}
                    <div class="col">
                      <div className="table-responsive">
                        <table
                          id="cause_DonationTable"
                          class="dataTable table-bordered table-striped display hover"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>User Name</th>
                              <th>Donation Date</th>
                              <th>Amount</th>
                              <th>Receipt</th>
                              <th>Certificate</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>340</td>
                              <td>Company #21</td>
                              <td>16-01-2023</td>
                              <td>
                                <i class="fa fa-inr"></i>&nbsp;2,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td class="text-warning">
                                <i class="fa fa-times"></i>&nbsp; Upload Pending
                              </td>
                              <td>
                                <span class="btnnca btn-danger btn-sm">
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                                <span class="btnnca btn-warning btn-sm">
                                  <i class="fas fa-upload"></i>
                                </span>
                                <span class="btnnca btn-info btn-sm">
                                  <i class="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>341</td>
                              <td>Company #22</td>
                              <td>17-01-2023</td>
                              <td>
                                <i class="fa fa-inr"></i>&nbsp;8,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td class="text-warning">
                                <i class="fa fa-times"></i>&nbsp; Upload Pending
                              </td>
                              <td>
                                <span class="btnnca btn-danger btn-sm">
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                                <span class="btnnca btn-warning btn-sm">
                                  <i class="fas fa-upload"></i>
                                </span>
                                <span class="btnnca btn-info btn-sm">
                                  <i class="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>343</td>
                              <td>Company #23</td>
                              <td>19-01-2023</td>
                              <td>
                                <i class="fa fa-inr"></i>&nbsp;1,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td class="text-warning">
                                <i class="fa fa-times"></i>&nbsp; Upload Pending
                              </td>
                              <td>
                                <span class="btnnca btn-danger btn-sm">
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                                <span class="btnnca btn-warning btn-sm">
                                  <i class="fas fa-upload"></i>
                                </span>
                                <span class="btnnca btn-info btn-sm">
                                  <i class="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>344</td>
                              <td>Company #24</td>
                              <td>21-01-2023</td>
                              <td>
                                <i class="fa fa-inr"></i>&nbsp;9,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td class="text-warning">
                                <i class="fa fa-times"></i>&nbsp; Upload Pending
                              </td>
                              <td>
                                <span class="btnnca btn-danger btn-sm">
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                                <span class="btnnca btn-warning btn-sm">
                                  <i class="fas fa-upload"></i>
                                </span>
                                <span class="btnnca btn-info btn-sm">
                                  <i class="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>345</td>
                              <td>Company #25</td>
                              <td>24-01-2023</td>
                              <td>
                                <i class="fa fa-inr"></i>&nbsp;12,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td class="text-warning">
                                <i class="fa fa-times"></i>&nbsp; Upload Pending
                              </td>
                              <td>
                                <span class="btnnca btn-danger btn-sm">
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                                <span class="btnnca btn-warning btn-sm">
                                  <i class="fas fa-upload"></i>
                                </span>
                                <span class="btnnca btn-info btn-sm">
                                  <i class="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-causehistory"
                  role="tabpanel"
                  aria-labelledby="nav-causehistory-tab"
                >
                  <div class=" row col-md-12 mt-5">
                    {" "}
                    <div class="col">
                      <div class="card p-1 mb-0">
                        <div class=" col-md-12  ">
                          <div class="row">
                            <div class="ms-2 col-md-4 c-details">
                              <h6 class="mb-0 font12 text-dark b">Version 1</h6>
                              <span class="mb-0 font12 text-secondary">
                                12-12-2021
                              </span>
                            </div>
                            <div class="icon col-md-6  pt-3">
                              <div class="badge">
                                {" "}
                                <span class="font10 text-dark">
                                  <i class="fa fa-check-circle text-success"></i>
                                  &nbsp; Verified
                                </span>{" "}
                              </div>
                              <button
                                class="btnnca btn-white causelinks
 "
                              >
                                <i class="externallinkIcon"></i>
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div class="ps-3 px-3">
                          <h6 class="category b">Details</h6>
                          <div class="row ps-3">
                            <table class="table table-sm table-borderedless border-0 causehis">
                              <thead>
                                <tr class=" border-0">
                                  <th class=" border-0">Date of Posting</th>
                                  <th class=" border-0">Date of Approval</th>
                                  <th class=" border-0">
                                    Approved By (DoAram)
                                  </th>
                                  <th class=" border-0">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class=" border-0">
                                  <td class="para border-0">18-01-2023</td>
                                  <td class="para border-0">18-01-2023</td>
                                  <td class="para border-0">Mr.xyz abc</td>
                                  <td class="para border-0">
                                    <i class="fa fa-inr"></i>&nbsp; 50,000
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" row col-md-12 mt-5">
                    {" "}
                    <div class="col">
                      <div class="card p-1 mb-0">
                        <div class=" col-md-12  ">
                          <div class="row">
                            <div class="ms-2 col-md-4 c-details">
                              <h6 class="mb-0 font12 text-dark b">Version 2</h6>
                              <span class="mb-0 font12 text-secondary">
                                12-12-2021
                              </span>
                            </div>
                            <div class="icon col-md-6  pt-3">
                              <div class="badge">
                                {" "}
                                <span class="font10 text-dark">
                                  <i class="fa fa-check-circle text-success"></i>
                                  &nbsp; Verified
                                </span>{" "}
                              </div>
                              <button
                                class="btnnca btn-white causelinks
 "
                              >
                                <i class="externallinkIcon  "></i>
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div class="ps-3 px-3">
                          <h6 class="category b">Details</h6>
                          <div class="row ps-3">
                            <table class="table table-sm table-borderedless border-0  causehis">
                              <thead>
                                <tr class=" border-0">
                                  <th class=" border-0">Date of Posting</th>
                                  <th class=" border-0">Date of Approval</th>
                                  <th class=" border-0">
                                    Approved By (DoAram)
                                  </th>
                                  <th class=" border-0">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class=" border-0">
                                  <td class="para border-0">18-01-2023</td>
                                  <td class="para border-0">18-01-2023</td>
                                  <td class="para border-0">Mr.xyz abc</td>
                                  <td class="para border-0">
                                    <i class="fa fa-inr"></i>&nbsp; 50,000
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* my work */}
          </div>
        </section>

        <div class="row"></div>

        <aside class="control-sidebar control-sidebar-dark asidefixed">
          <div class="container mt-5" style={{ height: "600px !important" }}>
            <div class="row">
              <div class=" mb-3 control-sidebar-dark">
                <div class="card-body">
                  <h5 class="text-light mb-3">Performance</h5>

                  <table class="table table-sm">
                    <tbody>
                      <tr>
                        <th>Number of Donations</th>
                        <td>47</td>
                      </tr>

                      <tr>
                        <th>Total amount in donations</th>
                        <td>1,04,567</td>
                      </tr>

                      <tr>
                        <th>Created On</th>
                        <td>14-01-2023</td>
                      </tr>

                      <tr>
                        <th>Start Date</th>
                        <td>22-02-2023</td>
                      </tr>

                      <tr>
                        <th>End Date</th>
                        <td>26-03-2023</td>
                      </tr>

                      <tr>
                        <th>Cause Category</th>
                        <td>
                          <button type="button" class="btnnca btn-info btn-sm">
                            Children
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th>DoAram Verification Status</th>
                        <td>
                          <button type="button" class="btnnca btn-light btn-sm">
                            <i class="fa fa-pencil-square-o"></i>&nbsp;Verified
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th>Verified On</th>
                        <td>20-01-2023</td>
                      </tr>

                      <tr>
                        <th>Verified By</th>
                        <td>Mr.xyz</td>
                      </tr>

                      <tr>
                        <th>Collection</th>
                        <td>35,300/60,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </NGO_Layout>
  );
}

export default AdminCauseDetails;
