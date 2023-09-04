import React from "react";
import NGO_Layout from "../shared/NGO_Layout";
import { NavLink } from "react-router-dom";
import DataTable from "datatables.net-dt";
import "datatables.net-buttons-dt";
import "datatables.net-responsive-dt";

function NGO_Cause(props) {
  let causeDatatable = new DataTable("#causedtDetails", {
    paging: false,
    scrollCollapse: true,
    destroy: true,
    responsive: false,
    ordering: false,
    searching: false,
    scrollY: "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse: true,
    paging: false,
    filter: true,
    columnDefs: [],
    dom: '<<"top" ip>flt>',
    columnDefs: [
      { width: "20px", targets: [0, 1] },
      {
        className: "dt-head-center text-center",
        targets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        orderable: false,
        searchable: false,
      },
    ],
    fnDrawCallback: function (oSettings) {
      if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
      }
    },
  }).draw();

  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="m-0">Causes</h1>
              </div>
              <div className="col-sm-6">
                <div className=" float-sm-right">
                  <NavLink to="/CauseDetails" className="nav-link">
                    <button class="btnnca btn-orange btn-sm  " type="button">
                      <i class="fa fa-plus-circle"></i> Create Cause
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="content bg-white">
          <h6 className="pt-2">List all NGO Cause Details</h6>
          <div class="row">
            <h6 className="text-center m-0">Search By</h6>
            <div class="col-md-4">
              <label
                htmlfor="txtFldIFSCCode"
                className="col-form-label col-form-label-sm para b "
              >
                NGO Category
              </label>
              <select
                className="form-select form-control form-select-sm"
                id="selNGOCategory"
                name="selNGOCategory"
                multiple
                placeholder=""
                data-placeholder="Choose atleast one category"
              >
                <option value=""> -- Select Category -- </option>
                <option value="Elderly">Elderly</option>
                <option value="Animals">Animals</option>
                <option value="Children">Children</option>
                <option value="Cultural Heritage">Cultural Heritage</option>
                <option value="Education">Education</option>
                <option value="Employment">Employment</option>
                <option value="Environment">Environment</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Disaster Relief Works">
                  Disaster Relief Works
                </option>
                <option value="Others">Others</option>
                <option value="Women Empowerment">Women Empowerment</option>
                <option value="Community Mobilization">
                  Community Mobilization
                </option>
                <option value="Rural Development">Rural Development</option>
                <option value="Sustainable Livelihood">
                  Sustainable Livelihood
                </option>
                <option value="Differently Abled">Differently Abled</option>
                <option value="Advocacy">Advocacy</option>
              </select>
            </div>
            <div class="col-md-4">
              <label
                htmlfor="txtFldIFSCCode"
                className="col-form-label col-form-label-sm para b "
              >
                Cause Status
              </label>
              <select
                className="form-control"
                id="selNGOCategory"
                name="selNGOCategory"
              >
                <option value="All"> All </option>
                <option value="Elderly">Active</option>
                <option value="Animals">InActive</option>
                <option value="Children">Under Review</option>
              </select>
            </div>
            <div class="col-md-4">
              <label
                htmlfor="txtFldIFSCCode"
                className="col-form-label col-form-label-sm para b "
              >
                Start Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Start Date"
              />
            </div>
            <div class=" col-md-12 mt-2 text-center">
              <button class="btn btn-orange btn-sm para">
                <i class="fas fa-filter"></i> Search
              </button>
            </div>
          </div>

          <table
            border="1"
            id="causedtDetails"
            class="display"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Sl. no</th>
                <th>Cause Id</th>
                <th>Cause Name</th>
                <th>Category</th>
                <th>Membership</th>
                <th>Website Link</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Donations</th>
                <th>Cause Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#NGO_CAUSE_CHILD_1</td>
                <td>Children's Library Fund</td>
                <td>Children</td>
                <td>
                  <div class="badge">
                    <span
                      class="font10 text-dark toolTip top "
                      data-tip="Silver Star"
                    >
                      <i class="fas fa-star text-secondary"></i>&nbsp; Verified
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <span class="btn btn-orange btn-sm para">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </td>
                <td>Under Review</td>
                <td>12-01-2023</td>
                <td>16-02-2023</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div class="mt-1">
                    <span class="mb-2 para text-dark">
                      <i class="fa fa-inr"></i>35,300
                      <span class=" para text-dark b"> / 60,000</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span class="btn btn-info btn-sm para">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="btn btn-danger btn-sm para">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <span class="btn btn-warning btn-sm para">
                    <i class="fas fa-pause-circle"></i>
                  </span>
                </td>
              </tr>

              <tr>
                {" "}
                <td>2</td>
                <td>#NGO_CAUSE_EDU_2</td>
                <td>Amtitha Welfare</td>
                <td>Education</td>
                <td>
                  <div class="badge">
                    <span
                      class="font10 text-dark toolTip top "
                      data-tip="Silver Star"
                    >
                      <i class="fas fa-star text-info"></i>&nbsp; Verified
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <span class="btn btn-orange btn-sm para">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </td>
                <td>Under Review</td>
                <td>12-01-2023</td>
                <td>16-02-2023</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div class="mt-1">
                    <span class="mb-2 para text-dark">
                      <i class="fa fa-inr"></i>35,300
                      <span class=" para text-dark b"> / 60,000</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span class="btn btn-info btn-sm para">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="btn btn-danger btn-sm para">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <span class="btn btn-warning btn-sm para">
                    <i class="fas fa-pause-circle"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>#NGO_CAUSE_CHILD_1</td>
                <td>Children's Library Fund</td>
                <td>Children</td>
                <td>
                  <div class="badge">
                    <span
                      class="font10 text-dark toolTip top "
                      data-tip="Silver Star"
                    >
                      <i class="fas fa-star text-secondary"></i>&nbsp; Verified
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <span class="btn btn-orange btn-sm para">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </td>
                <td>Under Review</td>
                <td>12-01-2023</td>
                <td>16-02-2023</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div class="mt-1">
                    <span class="mb-2 para text-dark">
                      <i class="fa fa-inr"></i>35,300
                      <span class=" para text-dark b"> / 60,000</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span class="btn btn-info btn-sm para">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="btn btn-danger btn-sm para">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <span class="btn btn-warning btn-sm para">
                    <i class="fas fa-pause-circle"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>#NGO_CAUSE_CHILD_1</td>
                <td>Children's Library Fund</td>
                <td>Children</td>
                <td>
                  <div class="badge">
                    <span
                      class="font10 text-dark toolTip top "
                      data-tip="Silver Star"
                    >
                      <i class="fas fa-star text-secondary"></i>&nbsp; Verified
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <span class="btn btn-orange btn-sm para">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </td>
                <td>Under Review</td>
                <td>12-01-2023</td>
                <td>16-02-2023</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div class="mt-1">
                    <span class="mb-2 para text-dark">
                      <i class="fa fa-inr"></i>35,300
                      <span class=" para text-dark b"> / 60,000</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span class="btn btn-info btn-sm para">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="btn btn-danger btn-sm para">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <span class="btn btn-warning btn-sm para">
                    <i class="fas fa-pause-circle"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>#NGO_CAUSE_CHILD_5</td>
                <td>Children's Library Fund</td>
                <td>Children</td>
                <td>
                  <div class="badge">
                    <span
                      class="font10 text-dark toolTip top "
                      data-tip="Silver Star"
                    >
                      <i class="fas fa-star text-secondary"></i>&nbsp; Verified
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <span class="btn btn-orange btn-sm para">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </td>
                <td>Under Review</td>
                <td>12-01-2023</td>
                <td>16-02-2023</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div class="mt-1">
                    <span class="mb-2 para text-dark">
                      <i class="fa fa-inr"></i>35,300
                      <span class=" para text-dark b"> / 60,000</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span class="btn btn-info btn-sm para">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="btn btn-danger btn-sm para">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <span class="btn btn-warning btn-sm para">
                    <i class="fas fa-pause-circle"></i>
                  </span>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>#NGO_CAUSE_CHILD_1</td>
                <td>Children's Library Fund</td>
                <td>Children</td>
                <td>
                  <div class="badge">
                    <span
                      class="font10 text-dark toolTip top "
                      data-tip="Silver Star"
                    >
                      <i class="fas fa-star text-secondary"></i>&nbsp; Verified
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <span class="btn btn-orange btn-sm para">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </td>
                <td>Under Review</td>
                <td>12-01-2023</td>
                <td>16-02-2023</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div class="mt-1">
                    <span class="mb-2 para text-dark">
                      <i class="fa fa-inr"></i>35,300
                      <span class=" para text-dark b"> / 60,000</span>
                    </span>
                  </div>
                </td>
                <td>
                  <span class="btn btn-info btn-sm para">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="btn btn-danger btn-sm para">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <span class="btn btn-warning btn-sm para">
                    <i class="fas fa-pause-circle"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <aside class="control-sidebar control-sidebar-dark asidefixed">
          <div class="container mt-5" style={{ height: "600px !important" }}>
            <div className="row">
              <div className=" mb-3 control-sidebar-dark">
                <div className="card-body">
                  <h5 className="text-light">Currently Viewing</h5>
                  <h5 className="text-gold mb-3">All Causes</h5>
                  <p className="text-light">4 new & Unexplored Opportunities</p>
                  <h5 className="text-gold mb-1">Fund Cause #3</h5>

                  <table>
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
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
                          <button type="button" class="btn btn-info btn-sm">
                            Children
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th>DoAram Verification Status</th>
                        <td>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
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
                        <td>
                          Mr.xyz &nbsp;<i className="fa fa-pencil-square-o"></i>
                        </td>
                      </tr>

                      <tr>
                        <th>Collection</th>
                        <td>?0/60,000</td>
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

export default NGO_Cause;
