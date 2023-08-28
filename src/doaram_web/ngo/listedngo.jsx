import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";

// import './ngo.css'

function Listedngo() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <>
      <Header />
      {/* <!-- List Start --> */}
      <div className="container mt-5 webbody">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <div className="input-group  input-group-lg mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by cause"
                  aria-label="Search by cause"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-warning btn-lg"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-md-1">
              <button className="btn btn-default" type="button" id="button-addon2">
                <img
                  src="imges/icons/icons8-filter-64.png"
                  width="40px"
                  className="img-thumbnail img-fluid"
                  data-bs-toggle="collapse"
                  // href="#ngofilteroption"
                  role="button"
                  aria-expanded="false"
                  aria-controls="ngofilteroption"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="collapse show" id="ngofilteroption">
              <div className="cardfilter">
                <div className="card-body">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="list-group text-start">
                          <h4 className="mt-2 p-3">Category</h4>
                          <p id="checkedNumbers" className="text-secondary fs-6">
                            0/16 selected
                          </p>
                          <div className="category">
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                name="categoryofcauseall"
                                id="categoryAll"
                                type="checkbox"
                                value=""
                              />
                              All
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                name="categoryofcause"
                                id="category1"
                                type="checkbox"
                                value=""
                              />
                              Advocacy
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category2"
                                value=""
                              />
                              Animals
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category3"
                                value=""
                              />
                              Children
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category4"
                                value=""
                              />
                              Community Mobilization
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category5"
                                value=""
                              />
                              Cultural Heritage
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category6"
                                value=""
                              />
                              Differently Abled
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category7"
                                value=""
                              />
                              Disaster Relief Works
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category8"
                                value=""
                              />
                              Education
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                id="category9"
                                name="categoryofcause"
                                type="checkbox"
                                value=""
                              />
                              Elderly
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                name="categoryofcause"
                                id="category10"
                                type="checkbox"
                                value=""
                              />
                              Employment
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                name="categoryofcause"
                                id="category11"
                                type="checkbox"
                                value=""
                              />
                              Environment
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category12"
                                value=""
                              />
                              Healthcare
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category1"
                                value=""
                              />
                              Others
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category13"
                                value=""
                              />
                              Rural Development
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category14"
                                value=""
                              />
                              Sustainable Livelihood
                            </label>
                            <label className="list-group-item fs-6 b-0">
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                name="categoryofcause"
                                id="category15"
                                value=""
                              />
                              Women Empowerment
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <form className="row g-3 mt-3  text-start">
                          <h4 className="mt-2 p-3">Donations</h4>
                          <div className="range-slider">
                            <input
                              type="range"
                              // value="60000"
                              onChange={(event) =>
                                setRangeval(event.target.value)
                              }
                              min="1000"
                              max="100000"
                              range="true"
                              style={{background: "linear-gradient(270deg, #E09400 0%, #FDC24F 100%)"}}
                            />
                            {/* Show upto{" "} */}
                            <span className="range-value">{rangeval}</span>
                          </div>
                          <div className="cols">
                            <label for="searchngoname" className="form-label">
                              NGO Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="searchngoname"
                              placeholder="Enter NGO Name"
                            />
                          </div>
                          <div className="col-md-4">
                            <label for="searchstarteddate" className="form-label">
                              Started Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="searchstarteddate"
                              placeholder="DD/MM/YYYY"
                            />
                          </div>
                          <div className="col-md-4">
                            <label for="causestatus" className="form-label">
                              Status
                            </label>
                            <select className="form-select" id="causestatus">
                              <option value="">--SEARCH---</option>
                              <option value="verified">Verified </option>
                              <option value="rejected"> Rejected</option>
                              <option value="on progress"> On Progress</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <button
                      type="button"
                      name="btnCancel"
                      id="btnCancel"
                      className="btn btn-light"
                    >
                      Cancel
                    </button>
                    <Link to="#cause1">
                      <button
                        type="button"
                        name="btnApply"
                        id="btnApply"
                        className="btn btn-warning"
                      >
                        Apply
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center mx-auto wow fadeInUp mt-5 mb-5"
          data-wow-delay="0.1s"
        >
          <h4 className="mb-5"> All Listed NGO's</h4>
        </div>
        <div className="col-md-12 mt-5">
          <div className="row">
            <div className="col-md-4 mb-5">
              <a className="card cardStyle" id="cause1">
                <div className="overlay"></div>
                <div className="row col-md-12">
                  <div className="col">
                    <p className="font12 mt-0">
                      Fund Cause #1
                      <br /> 12-12-2022
                    </p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col-8">
                    <h6 className="fw-bold mt-0 text-dark  pb-3">
                      Children's Library Fund
                    </h6>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <button className="btn btn-light btn-sm font10">
                      <i className="fa fa-check-circle text-success"></i>&nbsp;
                      Verified
                    </button>
                  </div>
                  <hr className="text-dark" />
                </div>
                <div className="row col-md-12">
                  <div className="">
                    <h6 className="fw-bold mt-0 text-dark">Cause Category</h6>
                    <span className="btn btn-info btn-sm">Children</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">NGO</h6>
                    <span className="text-dark font13">Adi Federation</span>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">End Date</h6>
                    <span className="text-dark font13 ">16-02-2023</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6>Donations</h6>
                  </div>
                  <div className="col">
                    <h6 className="text-end">
                      <i className="fa fa-inr"></i>&nbsp;32,000/60,000
                    </h6>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width:"50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      {" "}
                      <span className="text1">
                        <i className="fa fa-inr"></i>&nbsp;32K{" "}
                        <span className="text2">of 60K</span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a className="card cardStyle" id="cause1">
                <div className="overlay"></div>
                <div className="row col-md-12">
                  <div className="col">
                    <p className="font12 mt-0">
                      Fund Cause #1
                      <br /> 12-12-2022
                    </p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col-8">
                    <h6 className="fw-bold mt-0 text-dark  pb-3">
                      Children's Library Fund
                    </h6>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <button className="btn btn-light btn-sm font10">
                      <i className="fa fa-check-circle text-success"></i>&nbsp;
                      Verified
                    </button>
                  </div>
                  <hr className="text-dark" />
                </div>
                <div className="row col-md-12">
                  <div className="">
                    <h6 className="fw-bold mt-0 text-dark">Cause Category</h6>
                    <span className="btn btn-info btn-sm">Children</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">NGO</h6>
                    <span className="text-dark font13">Adi Federation</span>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">End Date</h6>
                    <span className="text-dark font13 ">16-02-2023</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6>Donations</h6>
                  </div>
                  <div className="col">
                    <h6 className="text-end">
                      <i className="bi bi-currency-rupee"></i>&nbsp;0/60,000
                    </h6>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width:"50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      {" "}
                      <span className="text1">
                        <i className="fa fa-inr"></i>&nbsp;32K{" "}
                        <span className="text2">of 60K</span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a className="card cardStyle" id="cause1">
                <div className="overlay"></div>
                <div className="row col-md-12">
                  <div className="col">
                    <p className="font12 mt-0">
                      Fund Cause #1
                      <br /> 12-12-2022
                    </p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col-8">
                    <h6 className="fw-bold mt-0 text-dark  pb-3">
                      Children's Library Fund
                    </h6>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <button className="btn btn-light btn-sm font10">
                      <i className="fa fa-check-circle text-success"></i>&nbsp;
                      Verified
                    </button>
                  </div>
                  <hr className="text-dark" />
                </div>
                <div className="row col-md-12">
                  <div className="">
                    <h6 className="fw-bold mt-0 text-dark">Cause Category</h6>
                    <span className="btn btn-info btn-sm">Children</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">NGO</h6>
                    <span className="text-dark font13">Adi Federation</span>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">End Date</h6>
                    <span className="text-dark font13 ">16-02-2023</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6>Donations</h6>
                  </div>
                  <div className="col">
                    <h6 className="text-end">
                      <i className="bi bi-currency-rupee"></i>&nbsp;0/60,000
                    </h6>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: "50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      {" "}
                      <span className="text1">
                        <i className="fa fa-inr"></i>&nbsp;32K{" "}
                        <span className="text2">of 60K</span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a className="card cardStyle" id="cause1">
                <div className="overlay"></div>
                <div className="row col-md-12">
                  <div className="col">
                    <p className="font12 mt-0">
                      Fund Cause #1
                      <br /> 12-12-2022
                    </p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col-8">
                    <h6 className="fw-bold mt-0 text-dark  pb-3">
                      Children's Library Fund
                    </h6>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <button className="btn btn-light btn-sm font10">
                      <i className="fa fa-check-circle text-success"></i>&nbsp;
                      Verified
                    </button>
                  </div>
                  <hr className="text-dark" />
                </div>
                <div className="row col-md-12">
                  <div className="">
                    <h6 className="fw-bold mt-0 text-dark">Cause Category</h6>
                    <span className="btn btn-info btn-sm">Children</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">NGO</h6>
                    <span className="text-dark font13">Adi Federation</span>
                  </div>
                 <div className="col">
                    <h6 className="fw-bold mt-0 text-light">End Date</h6>
                    <span className="text-dark font13 ">16-02-2023</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6>Donations</h6>
                  </div>
                  <div className="col">
                    <h6 className="text-end">
                      <i className="bi bi-currency-rupee"></i>&nbsp;0/60,000
                    </h6>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width:"50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      {" "}
                      <span className="text1">
                        <i className="fa fa-inr"></i>&nbsp;32K{" "}
                        <span className="text2">of 60K</span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a className="card cardStyle" id="cause1">
                <div className="overlay"></div>
                <div className="row col-md-12">
                  <div className="col">
                    <p className="font12 mt-0">
                      Fund Cause #1
                      <br /> 12-12-2022
                    </p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col-8">
                    <h6 className="fw-bold mt-0 text-dark  pb-3">
                      Children's Library Fund
                    </h6>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <button className="btn btn-light btn-sm font10">
                      <i className="fa fa-check-circle text-success"></i>&nbsp;
                      Verified
                    </button>
                  </div>
                  <hr className="text-dark" />
                </div>
                <div className="row col-md-12">
                  <div className="">
                    <h6 className="fw-bold mt-0 text-dark">Cause Category</h6>
                    <span className="btn btn-info btn-sm">Children</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">NGO</h6>
                    <span className="text-dark font13">Adi Federation</span>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">End Date</h6>
                    <span className="text-dark font13 ">16-02-2023</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6>Donations</h6>
                  </div>
                  <div className="col">
                    <h6 className="text-end">
                      <i className="bi bi-currency-rupee"></i>&nbsp;0/60,000
                    </h6>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: "50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      {" "}
                      <span className="text1">
                        <i className="fa fa-inr"></i>&nbsp;32K{" "}
                        <span className="text2">of 60K</span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-5">
              <a className="card cardStyle" id="cause1">
                <div className="overlay"></div>
                <div className="row col-md-12">
                  <div className="col">
                    <p className="font12 mt-0">
                      Fund Cause #1
                      <br /> 12-12-2022
                    </p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-light">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col-8">
                    <h6 className="fw-bold mt-0 text-dark  pb-3">
                      Children's Library Fund
                    </h6>
                  </div>
                  <div className="col text-end">
                    {" "}
                    <button className="btn btn-light btn-sm font10">
                      <i className="fa fa-check-circle text-success"></i>&nbsp;
                      Verified
                    </button>
                  </div>
                  <hr className="text-dark" />
                </div>
                <div className="row col-md-12">
                  <div className="">
                    <h6 className="fw-bold mt-0 text-dark">Cause Category</h6>
                    <span className="btn btn-info btn-sm">Children</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">NGO</h6>
                    <span className="text-dark font13">Adi Federation</span>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold mt-0 text-light">End Date</h6>
                    <span className="text-dark font13 ">16-02-2023</span>
                  </div>
                </div>
                <div className="row col-md-12 mt-3">
                  <div className="col">
                    <h6>Donations</h6>
                  </div>
                  <div className="col">
                    <h6 className="text-end">
                      <i className="bi bi-currency-rupee"></i>&nbsp;0/60,000
                    </h6>
                  </div>
                </div>
                <div className="row col-md-12">
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: "50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="mt-3">
                      {" "}
                      <span className="text1">
                        <i className="fa fa-inr"></i>&nbsp;32K{" "}
                        <span className="text2">of 60K</span>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- list End --> */}
      <Part />
      <Footer />
    </>
  );
}

export default Listedngo;
