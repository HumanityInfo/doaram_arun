import React from "react";
import { NavLink, Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";

function CauseDetails(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-8 row">
                <div className="col">
                  <NavLink to="/NGO_Cause">
                    <button className="btnnca btn-info btn-sm">
                      <i className="fa fa-arrow-left"></i> Back To Cause
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-sm-4">
                <ol className="breadcrumb breadcrumbncafloat-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">NGO</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <NavLink to="/NGO_Cause">NGO Causes</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Create New Cause</li>
                </ol>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <h5 className="m-0">&nbsp;Cause - Children's Library Fund</h5>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row mt-0   p-3 mb-3">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
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
                    className="nav-link corporatelinks"
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
                    className="nav-link"
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
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-causedetails"
                  role="tabpanel"
                  aria-labelledby="nav-causedetails"
                >
                  <div className="card">
                    <form className="  ms-5 mt-3 ">
                      <div className="mx-5 text-end">
                        <NavLink to="/NGO_Cause">
                          <button className="btnnca btn-gold btn-sm">
                            <i className="fa fa-pencil-square-o"></i> Edit cause
                          </button>
                        </NavLink>
                      </div>
                      <div className="mb-3 row">
                        <label
                          htmlFor="selNgoCategory"
                          className="col-sm-3 form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            &nbsp;Category
                          </span>
                        </label>
                        <div className="col-sm-4">
                          <select
                            className="form-control"
                            name="selNgoCategory"
                            id="selNgoCategory"
                          >
                            <option value="">Select Category</option>
                            <option value="Advocacy">Advocacy</option>
                            <option value="Animals">Animals</option>
                            <option value="Children">Children</option>
                            <option value="Community Mobilization">
                              Community Mobilization
                            </option>
                            <option value="Cultural Heritage">
                              Cultural Heritage
                            </option>
                            <option value="Differently Abled">
                              Differently Abled
                            </option>
                            <option value="Disaster Relief Works">
                              Disaster Relief Works
                            </option>
                            <option value="Education">Education</option>
                            <option value="Elderly">Elderly</option>
                            <option value="Employment">Employment</option>
                            <option value="Environment">Environment</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Others">Others</option>
                            <option value="Rural Development">
                              Rural Development
                            </option>
                            <option value="Sustainable Livelihood ">
                              Sustainable Livelihood
                            </option>
                            <option value="Women Empowerment">
                              Women Empowerment
                            </option>
                            <option value="Donations">Donations</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="txtNgoTitle"
                          className="col-sm-3 form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            {" "}
                            Cause Title
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            className="form-control"
                            id="txtNgoTitle"
                            name="txtNgoTitle"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="txtNgoTitleImage"
                          className="col-sm-3  form-label "
                        >
                          <span className=" text-dark fw-semibold">
                            Title Image{" "}
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            <input
                              type="text"
                              name="txtNgoTitleImage"
                              id="txtNgoTitleImage"
                              className="form-control"
                              placeholder="No file selected"
                              readonly
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input
                                  type="file"
                                  name="file"
                                  onchange="document.getElementById('txtNgoTitleImage').value = this.files.length ? this.files[0].name : ''"
                                />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
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

                      <div className="row mb-3">
                        <label
                          htmlFor="txtNgoRequirement"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Fund Donations{" "}
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <label
                            htmlFor="txtNgoRequirement"
                            className="form-label"
                          >
                            <span className=" text-dark fw-semibold">
                              {" "}
                              Requirement
                            </span>
                          </label>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="range"
                            id="txtNgoRequirement"
                            name="txtNgoRequirement"
                            min="0"
                            step="5"
                            max="5"
                            style={{ width: "57px" }}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-2">
                          <label for="txtNGOGoals" className="form-label">
                            <span className=" text-dark fw-semibold">Goal</span>
                          </label>
                        </div>
                        <div className="col-sm-2">
                          <div className="input-group">
                            <span className="input-group-btn">
                              <div className="btnnca btn-default">
                                <i className="fa fa-inr"></i>
                              </div>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              name="txtNGOGoals"
                              id="txtNGOGoals"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-2">
                          <label for="txtNGOStartDate" className="form-label">
                            <span className=" text-dark fw-semibold">
                              Start Date
                            </span>
                          </label>
                        </div>

                        <div className="col-sm-2">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name="txtNGOStartDate"
                              id="txtNGOStartDate"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default">
                                <i className="fa fa-calendar themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <label for="txtNGOEndDate" className="form-label">
                            <span className=" text-dark fw-semibold">
                              End Date
                            </span>
                          </label>
                        </div>

                        <div className="col-sm-2">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name="txtNGOEndDate"
                              id="txtNGOEndDate"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default">
                                <i className="fa fa-calendar themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="txtNgoShortURL"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Short URL{" "}
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <a className="causelinks" target="_blank">
                            <div className=" ">
                              <input
                                className="btnnca btn-gold btn-sm w-75 text-start"
                                type="text"
                                id="txtNgoShortURL"
                                name="txtNgoShortURL"
                                readonly="true"
                                value="doaram.com/cause/c-T090101"
                              />

                              <i className="fa fa-link themeCol-pink text-end"></i>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="tacause_story"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Cause Story{" "}
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control w-100"
                            id="tacause_story"
                            name="tacause_story"
                            rows="10"
                            placeholder="Enter your Cause Story"
                          ></textarea>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="selNgoCountry"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Location
                          </span>
                        </label>
                        <div className="col-sm-4">
                          <select
                            name="selNgoCountry"
                            id="selNgoCountry"
                            className="form-control w-100"
                          >
                            <option value="">Select Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-sm-4">
                          <select
                            name="selNgoState"
                            id="selNgoState"
                            className="form-control w-100"
                          >
                            <option>Select State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="selNgoCity"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div className="col-sm-6">
                          <select
                            className="form-control w-50"
                            name="selNgoCity"
                            id="selNgoCity"
                          >
                            <option value="">Select City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-sm-6">&nbsp;</div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputEmail3"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Gallery
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            1.&nbsp;&nbsp;&nbsp;
                            <input
                              type="text"
                              name="filename"
                              id="filename"
                              className="form-control"
                              placeholder="Add image 1"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input type="file" name="file" />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                          <div
                            className="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputtext"
                          className="col-sm-3  form-label"
                        ></label>
                        <div className="col-sm-8  ms-3">
                          <input
                            type="text"
                            className="form-control fst-italic w-100"
                            id="inputtext"
                            placeholder="Write short image one description"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputEmail3"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            2.&nbsp;&nbsp;&nbsp;
                            <input
                              type="text"
                              name="filename"
                              id="filename"
                              className="form-control"
                              placeholder="Add image 1"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input type="file" name="file" />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                          <div
                            className="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputtext"
                          className="col-sm-3  form-label"
                        ></label>
                        <div className="col-sm-8  ms-3">
                          <input
                            type="text"
                            className="form-control fst-italic w-100"
                            id="inputtext"
                            placeholder="Write short image one description"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputEmail3"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            3.&nbsp;&nbsp;&nbsp;
                            <input
                              type="text"
                              name="filename"
                              id="filename"
                              className="form-control"
                              placeholder="Add image 1"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input type="file" name="file" />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                          <div
                            className="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputtext"
                          className="col-sm-3  form-label"
                        ></label>
                        <div className="col-sm-8  ms-3">
                          <input
                            type="text"
                            className="form-control fst-italic w-100"
                            id="inputtext"
                            placeholder="Write short image one description"
                          />
                        </div>
                      </div>

                      <div className="row mb-5">
                        <div className="mb-3 row">
                          <label
                            htmlFor="input"
                            className="col-sm-3  form-label"
                          ></label>
                          <div className="col-sm-4  ms-3">
                            <button
                              type="button"
                              className="btnnca btn-outline-secondary btn-sm"
                            >
                              {" "}
                              <i className="fa fa-plus-circle"></i>&nbsp;Add New
                            </button>
                          </div>
                          <div className="col-sm-4"></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputEmail3"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Supportive Documents
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            1.&nbsp;&nbsp;&nbsp;
                            <input
                              type="text"
                              name="filename"
                              id="filename"
                              className="form-control"
                              placeholder="Add image 1"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input type="file" name="file" />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                          <div
                            className="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputtext"
                          className="col-sm-3  form-label"
                        ></label>
                        <div className="col-sm-8  ms-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control fst-italic "
                              id="inputtext"
                              placeholder="Write short image one description"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default">
                                <i className="fa fa-pencil-square-o  themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputEmail3"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            2.&nbsp;&nbsp;&nbsp;
                            <input
                              type="text"
                              name="filename"
                              id="filename"
                              className="form-control"
                              placeholder="Add image 1"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input type="file" name="file" />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                          <div
                            className="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputtext"
                          className="col-sm-3  form-label"
                        ></label>
                        <div className="col-sm-8  ms-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control fst-italic "
                              id="inputtext"
                              placeholder="Write short image one description"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default">
                                <i className="fa fa-pencil-square-o  themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="inputEmail3"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">&nbsp;</span>
                        </label>
                        <div className="col-sm-8">
                          <div className="input-group">
                            3.&nbsp;&nbsp;&nbsp;
                            <input
                              type="text"
                              name="filename"
                              id="filename"
                              className="form-control"
                              placeholder="Add image 1"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default  custom-file-uploader">
                                <input type="file" name="file" />
                                <i className="fa fa-upload themeCol-pink"></i>
                              </div>
                              <div className="btnnca btn-default">
                                <i className="fa fa-trash themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                          <div
                            className="text-danger errors"
                            // style="font-size: 15px;"
                          ></div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label
                          for="inputtext"
                          className="col-sm-3  form-label"
                        ></label>
                        <div className="col-sm-8  ms-3">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control fst-italic "
                              id="inputtext"
                              placeholder="Write short image one description"
                            />
                            <span className="input-group-btn">
                              <div className="btnnca btn-default">
                                <i className="fa fa-pencil-square-o  themeCol-pink"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="mb-3 row">
                          <label
                            htmlFor="input"
                            className="col-sm-3  form-label"
                          ></label>
                          <div className="col-sm-4  ms-3">
                            <button
                              type="button"
                              className="btnnca btn-outline-secondary btn-sm"
                            >
                              {" "}
                              <i className="fa fa-plus-circle"></i>&nbsp;Add New
                            </button>
                          </div>
                          <div className="col-sm-4"></div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="txtNgoShortURL"
                          className="col-sm-3  form-label"
                        >
                          <span className=" text-dark fw-semibold">
                            Status{" "}
                          </span>
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option value="Active">Active</option>
                            <option value="InActive">InActive</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-5">
                        <div className="col-md-5"></div>
                        <div className="col-md-3">
                          <button
                            type="button"
                            name="SubmitDetail"
                            id="SubmitDetail"
                            className="btnnca btn-gold btn-sm   "
                            // onClick={this.CauseSubmit}
                          >
                            <span
                              className="me-2"
                              style={{ fontSize: "14px" }}
                            ></span>
                            Update Cause
                          </button>
                        </div>
                        <div className="col-md-5"></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-causedonations"
                  role="tabpanel"
                  aria-labelledby="nav-causedonations-tab"
                >
                  <div className=" row col-md-12 mt-5">
                    {" "}
                    <div className="col">
                      <div className="table-responsive">
                        <table
                          id="cause_DonationTable"
                          className="dataTable table-bordered table-striped display hover"
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
                                <i className="fa fa-inr"></i>&nbsp;2,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td className="text-warning">
                                <i className="fa fa-times"></i>&nbsp; Upload
                                Pending
                              </td>
                              <td>
                                <span className="btnnca btn-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                                <span className="btnnca btn-warning btn-sm">
                                  <i className="fas fa-upload"></i>
                                </span>
                                <span className="btnnca btn-info btn-sm">
                                  <i className="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>341</td>
                              <td>Company #22</td>
                              <td>17-01-2023</td>
                              <td>
                                <i className="fa fa-inr"></i>&nbsp;8,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td className="text-warning">
                                <i className="fa fa-times"></i>&nbsp; Upload
                                Pending
                              </td>
                              <td>
                                <span className="btnnca btn-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                                <span className="btnnca btn-warning btn-sm">
                                  <i className="fas fa-upload"></i>
                                </span>
                                <span className="btnnca btn-info btn-sm">
                                  <i className="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>343</td>
                              <td>Company #23</td>
                              <td>19-01-2023</td>
                              <td>
                                <i className="fa fa-inr"></i>&nbsp;1,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td className="text-warning">
                                <i className="fa fa-times"></i>&nbsp; Upload
                                Pending
                              </td>
                              <td>
                                <span className="btnnca btn-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                                <span className="btnnca btn-warning btn-sm">
                                  <i className="fas fa-upload"></i>
                                </span>
                                <span className="btnnca btn-info btn-sm">
                                  <i className="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>344</td>
                              <td>Company #24</td>
                              <td>21-01-2023</td>
                              <td>
                                <i className="fa fa-inr"></i>&nbsp;9,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td className="text-warning">
                                <i className="fa fa-times"></i>&nbsp; Upload
                                Pending
                              </td>
                              <td>
                                <span className="btnnca btn-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                                <span className="btnnca btn-warning btn-sm">
                                  <i className="fas fa-upload"></i>
                                </span>
                                <span className="btnnca btn-info btn-sm">
                                  <i className="fas fa-external-link-alt"></i>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>345</td>
                              <td>Company #25</td>
                              <td>24-01-2023</td>
                              <td>
                                <i className="fa fa-inr"></i>&nbsp;12,000
                              </td>
                              <td>
                                <input type="file" />
                              </td>
                              <td className="text-warning">
                                <i className="fa fa-times"></i>&nbsp; Upload
                                Pending
                              </td>
                              <td>
                                <span className="btnnca btn-danger btn-sm">
                                  <i className="fas fa-trash-alt"></i>
                                </span>
                                <span className="btnnca btn-warning btn-sm">
                                  <i className="fas fa-upload"></i>
                                </span>
                                <span className="btnnca btn-info btn-sm">
                                  <i className="fas fa-external-link-alt"></i>
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
                  className="tab-pane fade"
                  id="nav-causehistory"
                  role="tabpanel"
                  aria-labelledby="nav-causehistory-tab"
                >
                  <div className=" row col-md-12 mt-5">
                    {" "}
                    <div className="col">
                      <div className="card cardnca p-1 mb-0">
                        <div className=" col-md-12  ">
                          <div className="row">
                            <div className="ms-2 col-md-4 c-details">
                              <h6 className="mb-0 font12 text-dark b">
                                Version 1
                              </h6>
                              <span className="mb-0 font12 text-secondary">
                                12-12-2021
                              </span>
                            </div>
                            <div className="icon col-md-6 text-end pt-3">
                              <div className="badge">
                                {" "}
                                <span className="font10 text-dark">
                                  <i className="fa fa-check-circle text-success"></i>
                                  &nbsp; Verified
                                </span>{" "}
                              </div>
                              <button
                                className="btnnca btn-white causelinks
 "
                              >
                                <i className="externallinkIcon"></i>
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="ps-3 px-3">
                          <h6 className="category b">Details</h6>
                          <div className="row ps-3">
                            <table className="table table-sm table-borderedless border-0 causehis">
                              <thead>
                                <tr className=" border-0">
                                  <th className=" border-0">Date of Posting</th>
                                  <th className=" border-0">
                                    Date of Approval
                                  </th>
                                  <th className=" border-0">
                                    Approved By (DoAram)
                                  </th>
                                  <th className=" border-0">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className=" border-0">
                                  <td className="para border-0">18-01-2023</td>
                                  <td className="para border-0">18-01-2023</td>
                                  <td className="para border-0">Mr.xyz abc</td>
                                  <td className="para border-0">
                                    <i className="fa fa-inr"></i>&nbsp; 50,000
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" row col-md-12 mt-5">
                    {" "}
                    <div className="col">
                      <div className="card cardnca p-1 mb-0">
                        <div className=" col-md-12  ">
                          <div className="row">
                            <div className="ms-2 col-md-4 c-details">
                              <h6 className="mb-0 font12 text-dark b">
                                Version 2
                              </h6>
                              <span className="mb-0 font12 text-secondary">
                                12-12-2021
                              </span>
                            </div>
                            <div className="icon col-md-6 text-end pt-3">
                              <div className="badge">
                                {" "}
                                <span className="font10 text-dark">
                                  <i className="fa fa-check-circle text-success"></i>
                                  &nbsp; Verified
                                </span>{" "}
                              </div>
                              <button
                                className="btnnca btn-white causelinks
 "
                              >
                                <i className="externallinkIcon  "></i>
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="ps-3 px-3">
                          <h6 className="category b">Details</h6>
                          <div className="row ps-3">
                            <table className="table table-sm table-borderedless border-0  causehis">
                              <thead>
                                <tr className=" border-0">
                                  <th className=" border-0">Date of Posting</th>
                                  <th className=" border-0">
                                    Date of Approval
                                  </th>
                                  <th className=" border-0">
                                    Approved By (DoAram)
                                  </th>
                                  <th className=" border-0">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className=" border-0">
                                  <td className="para border-0">18-01-2023</td>
                                  <td className="para border-0">18-01-2023</td>
                                  <td className="para border-0">Mr.xyz abc</td>
                                  <td className="para border-0">
                                    <i className="fa fa-inr"></i>&nbsp; 50,000
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

        <div className="row"></div>

        <aside className="control-sidebar control-sidebar-dark asidefixed">
          <div
            className="container mt-5"
            style={{ height: "600px !important" }}
          >
            <div className="row">
              <div className=" mb-3 control-sidebar-dark">
                <div className="card-body">
                  <h5 className="text-light mb-3">Performance</h5>

                  <table className="table table-sm">
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
                          <button type="button" className="btnnca btn-info btn-sm">
                            Children
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th>DoAram Verification Status</th>
                        <td>
                          <button
                            type="button"
                            className="btnnca btn-light btn-sm"
                          >
                            <i className="fa fa-pencil-square-o"></i>
                            &nbsp;Verified
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

export default CauseDetails;
