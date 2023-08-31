import React from "react";
import { NavLink } from "react-router-dom";
import concept from "../../assets/da_img/Group 163520.png";
import proposal from "../../assets/da_img/proposal.png";
import legal1 from "../../assets/da_img/Legal1.png";
import legal2 from "../../assets/da_img/Legal2.png";
import NGO_Layout from "../shared/NGO_Layout";

function Corp_CSR_Request(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-10">
                <h1 className="m-0">CSR request </h1>
                <h4>Humanity Infotek Private Limited #4323</h4>
                <p className="font14 b ps-2">
                  Please send me a concept note to skill 1,000 girls from the
                  economically weaker sections in rural parts of Tamil Nadu.
                  &nbsp;
                </p>
              </div>
              <div className="col-sm-2">
                <div className=" float-sm-right">
                  <NavLink to="/Corp_NGOs" className="nav-link">
                    <button className="btnnca btn-warning btn-sm  " type="button">
                      <i className="fa fa-arrow-left"></i> Back To NGO
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="timeline_area section_padding_130">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Timeline Area--> */}
                <div className="apland-timeline-area">
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div className="timeline-date green ">
                      <p>CONCEPT NOTE</p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="single-timeline-content d-flex ">
                          <div className="col-md-12">
                            <div className="row g-3">
                              <h6>Concept Note</h6>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-8">
                                <p>
                                  <img src={concept} alt="concept note" />
                                </p>
                              </div>
                              <div className="col-md-2 d-flex justify-content-end align-items-end">
                                <p className="font10 text-dark">
                                  <span
                                    className="toolTip top "
                                    data-tip="Silver Star"
                                  >
                                    <i className="fas fa-star text-secondary"></i>
                                  </span>
                                  &nbsp; Verified
                                </p>
                              </div>
                              <div className="col-md-2">
                                <button
                                  className="btnnca btn-white causelinks toolTip top "
                                  data-tip="Click to check their web page"
                                >
                                  <i className="externallinkIcon"></i>
                                </button>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-3">
                                <label>Upload Date</label>
                                <p>19-02-2023</p>
                              </div>
                              <div className="col-md-3">
                                <label>Upload By</label>
                                <p>Aadarana</p>
                              </div>
                              <div className="col-md-3">
                                <label>Approval Date</label>
                                <p> 19/02/2023</p>
                              </div>
                              <div className="col-md-3">
                                <label>Approved By</label>
                                <p>Humanity Infotek Pvt Ltd</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div className="timeline-date green  ">
                      <p>PROPOSAL</p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="single-timeline-content d-flex ">
                          <div className="col-md-12">
                            <div className="row g-3">
                              <h6>Proposal</h6>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-8">
                                <p>
                                  <img src={proposal} alt="concept note" />
                                </p>
                              </div>
                              <div className="col-md-2 d-flex justify-content-end align-items-end">
                                <p className="font10 text-dark">
                                  <span
                                    className="toolTip top "
                                    data-tip="Silver Star"
                                  >
                                    <i className="fas fa-star text-secondary"></i>
                                  </span>
                                  &nbsp; Verified
                                </p>
                              </div>
                              <div className="col-md-2">
                                <button
                                  className="btnnca btn-white causelinks toolTip top "
                                  data-tip="Click to check their web page"
                                >
                                  <i className="externallinkIcon"></i>
                                </button>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-3">
                                <label>Upload Date</label>
                                <p>21-02-2023</p>
                              </div>
                              <div className="col-md-3">
                                <label>Upload By</label>
                                <p>Aadarana</p>
                              </div>
                              <div className="col-md-3">
                                <label>Approval Date</label>
                                <p> 22/02/2023</p>
                              </div>
                              <div className="col-md-3">
                                <label>Approved By</label>
                                <p>Humanity Infotek Pvt Ltd</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Single Timeline Content--> */}
                  <div className="single-timeline-area">
                    <div className="timeline-date yellow ">
                      <p>LEGAL DOCUMENTS</p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="single-timeline-content d-flex  ">
                          <div className="col-md-12">
                            <div className="row g-3">
                              <h6>LEGAL DOCUMENTS</h6>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-8">
                                <p>
                                  <img src={legal1} alt="Legal Documents" />
                                </p>
                              </div>
                              <div className="col-md-2 d-flex justify-content-end align-items-end">
                                <p className="font10 text-dark">
                                  <i className="fas fa-recycle text-secondary"></i>
                                  &nbsp; UNDER PROCESS
                                </p>
                              </div>
                              <div className="col-md-2"></div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-3">
                                <label>Upload Date</label>
                                <p>19-02-2023</p>
                              </div>
                              <div className="col-md-3">
                                <label>Upload By</label>
                                <p>Aadarana</p>
                              </div>
                              <div className="col-md-3">
                                <label>Approval Date</label>
                                <p> - </p>
                              </div>
                              <div className="col-md-3">
                                <label>Approved By</label>
                                <p> - </p>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-8">
                                <p>
                                  <img src={legal2} alt="Legal Documents" />
                                </p>
                              </div>
                            </div>

                            <div className="row g-3">
                              <div className="col-md-3">
                                <label>Upload Date</label>
                                <p>19-02-2023</p>
                              </div>
                              <div className="col-md-3">
                                <label>Upload By</label>
                                <p>Aadarana</p>
                              </div>
                              <div className="col-md-3">
                                <label>Approval Date</label>
                                <p> - </p>
                              </div>
                              <div className="col-md-3">
                                <label>Approved By</label>
                                <p> - </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-timeline-area">
                    <div className="timeline-date grey">
                      <p>MOU</p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="single-timeline-content d-flex">
                          <div className="col-md-12">
                            <div className="row g-3">
                              <h6>MOU</h6>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-8">
                                <p className="para">Yet to be Uploaded</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-timeline-area">
                    <div className="timeline-date grey">
                      <p>SIGN - OFF</p>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="single-timeline-content d-flex ">
                          <div className="col-md-12">
                            <div className="row g-3">
                              <h6>SIGN - OFF</h6>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-8">
                                <p className="para">Yet to be Uploaded</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-3">
                    <div className="row">
                      <hr></hr>
                      <h6>Payment Details</h6>
                      <p>
                        Payment Gateway opens after all the documents are
                        approved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="control-sidebar control-sidebar-dark asidefixed">
          <div
            className="container mt-0"
            style={{ height: "600px !important" }}
          >
            <div className="row">
              <div className=" mb-3 control-sidebar-dark">
                <div className="card-body">
                  <h5 className="text-danger mb-1">Concept Note Details</h5>

                  <table>
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Category</th>
                        <td>
                          <button type="button" className="btnnca btn-info btn-sm">
                            Children
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th>Verification Status</th>
                        <td>
                          <button
                            type="button"
                            className="btnnca btn-secondary btn-secondarynca btn-sm"
                          >
                            <i className="fa fa-pencil-square-o"></i>
                            &nbsp;Verified
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th>Initiated By</th>
                        <td>NGO Name1</td>
                      </tr>

                      <tr>
                        <th>Active Causes</th>
                        <td>4</td>
                      </tr>

                      <tr>
                        <th>Fund requirements</th>
                        <td>
                          <i className="fa fa-inr">50,000</i>
                        </td>
                      </tr>

                      <tr>
                        <th>Company Location</th>
                        <td>Chennai</td>
                      </tr>
                      <tr>
                        <th>Contact Person</th>
                        <td>Mr.xyz(NGO)</td>
                      </tr>
                    </tbody>
                  </table>

                  <button type="button" className="btnnca btn-gold btn-sm">
                    View Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </NGO_Layout>
  );
}

export default Corp_CSR_Request;
