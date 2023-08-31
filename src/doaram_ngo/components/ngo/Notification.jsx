import React from "react";
import { NavLink, Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";

function Notification(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h6 className="m-0 pt-3">Notifications</h6>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid  p-1">
            <div className=" row col-md-12">
              {" "}
              <div className="col">
                <div className="card cardnca p-1 mb-0">
                  <div className=" col-md-12  ">
                    <div className="row">
                      <div className="ms-2 col-md-4 c-details">
                        <h6 className="mb-0 font12 text-dark b">
                          Notifications
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="ps-3 px-3">
                    <h6 className="category b">All Messages</h6>
                    <div className="row ps-3">
                      <table className="table table-sm bordered table-hover   causehis">
                        <thead>
                          <tr className="">
                            <th className="text-center">Corporate Name</th>
                            <th className="text-center">Timeline Flow</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td align="center" className="para">
                              <h6 className="font12">
                                Humanity Infotek Private Limited #4321
                              </h6>
                            </td>
                            <td align="center" className="para">
                              <div className="hori-timeline mt-4" dir="ltr">
                                <ul className="list-inline events">
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-success text-danger toolTip top "
                                        data-tip="Completed"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">Concept Note</h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-success text-danger toolTip top "
                                        data-tip="Completed"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">Proposal</h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-warning text-danger toolTip top "
                                        data-tip="Under Process"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">
                                        Legal Documents
                                      </h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-grey text-danger toolTip top "
                                        data-tip="Yet to be started"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">MOU </h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item">
                                    {" "}
                                    <div>
                                      <NavLink to="/NGO_CSR_Request">
                                        <button
                                          type="button"
                                          className="btnnca btn-primarynca btn-primary btn-sm"
                                        >
                                          View{" "}
                                        </button>
                                      </NavLink>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr className="">
                            <td align="center" className="para">
                              <h6 className="font12">
                                Poomex Clothing Company #4322
                              </h6>
                            </td>
                            <td align="center" className="para">
                              <div className="hori-timeline mt-4" dir="ltr">
                                <ul className="list-inline events">
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-warning text-danger toolTip top "
                                        data-tip="Under Process"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">Concept Note</h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-grey text-danger toolTip top "
                                        data-tip="Yet to be started"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">Proposal</h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-grey text-danger toolTip top "
                                        data-tip="Yet to be started"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">
                                        Legal Documents
                                      </h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item event-list">
                                    <div className="px-4">
                                      <p>&nbsp;</p>
                                      <div
                                        className="event-date bg-grey text-danger toolTip top "
                                        data-tip="Yet to be started"
                                      >
                                        &nbsp;
                                      </div>
                                      <h5 className="font12">MOU </h5>
                                    </div>
                                  </li>
                                  <li className="list-inline-item">
                                    {" "}
                                    <div>
                                      <NavLink to="/NGO_CSR_Request">
                                        <button
                                          type="button"
                                          className="btnnca btn-primarynca btn-primary btn-sm"
                                        >
                                          View{" "}
                                        </button>
                                      </NavLink>
                                    </div>
                                  </li>
                                </ul>
                              </div>
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
        </section>

        <aside className="control-sidebar control-sidebar-dark asidefixed">
          <div
            className="container mt-0"
            style={{ height: "600px !important" }}
          >
            <div className="row">
              <div className=" mb-3 control-sidebar-dark">
                <div className="card-body">
                  <h5 className="text-light mb-0">Current Selection</h5>
                  <h5 className="text-danger mt-0 mb-1">NGOs</h5>
                  <h5 className="text-danger mb-1">NGO Name One</h5>

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
                        <th>Verified On</th>
                        <td>21-02-2022</td>
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
                        <td>
                          <button type="button" className="btnnca btn-info btn-sm">
                            Chennai
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <button type="button" className="btnnca btn-gold btn-sm">
                    View Request
                  </button>
                  <br></br>
                  <Link to="/NGO_CSR_Request">
                    <button type="button" className="btnnca btn-gold btn-sm mt-4">
                      CSR Document Details
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </NGO_Layout>
  );
}

export default Notification;
