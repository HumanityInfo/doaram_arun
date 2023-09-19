import { Link } from "react-router-dom";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";

// import "./resources.css"
function Blog() {
  return (
    <>
      <Header />
      {/* <!-- Blog Start --> */}
      <div className="container mt-5 webbody">
        <div
          className="text-center mx-auto wow fadeInUp mt-5 mb-5"
          data-wow-delay="0.1s"
        >
          <h1 className="mb-5">Blogs</h1>
        </div>
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 ">
              <div className="input-group  mb-3">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Category
                  </button>
                  <div
                    className="dropdown-menu p-4 "
                    style={{ maxwidth: "200px" }}
                  >
                    <div className="col ">
                      <div className="list-group text-start">
                        <h4 className="mt-2 p-3">Category</h4>
                        <p id="checkedNumbers" className="text-secondary fs-6">
                          0/16 selected
                        </p>
                        <div className="blogcategory">
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              name="categoryofcauseall"
                              id="categoryAll"
                              type="checkbox"
                              value=""
                            />
                            All
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              name="categoryofcause"
                              id="category1"
                              type="checkbox"
                              value=""
                            />
                            Advocacy
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category2"
                              value=""
                            />
                            Animals
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category3"
                              value=""
                            />
                            Children
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category4"
                              value=""
                            />
                            Community Mobilization
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category5"
                              value=""
                            />
                            Cultural Heritage
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category6"
                              value=""
                            />
                            Differently Abled
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category7"
                              value=""
                            />
                            Disaster Relief Works
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category8"
                              value=""
                            />
                            Education
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              id="category9"
                              name="categoryofcause"
                              type="checkbox"
                              value=""
                            />
                            Elderly
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              name="categoryofcause"
                              id="category10"
                              type="checkbox"
                              value=""
                            />
                            Employment
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              name="categoryofcause"
                              id="category11"
                              type="checkbox"
                              value=""
                            />
                            Environment
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category12"
                              value=""
                            />
                            Healthcare
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category1"
                              value=""
                            />
                            Others
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category13"
                              value=""
                            />
                            Rural Development
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name="categoryofcause"
                              id="category14"
                              value=""
                            />
                            Sustainable Livelihood
                          </label>
                          <label className="list-group-item fs-6 b-0 font14">
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
                        <div className="card-footer">
                          <div className="col">
                            <button
                              type="button"
                              name="btnCancel"
                              id="btnCancel"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col">
                            <Link to="#cause1">
                              <button
                                type="button"
                                name="btnApply"
                                id="btnApply"
                                className="btn btn-warning btn-sm"
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by cause"
                  aria-label="Search by cause"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-warning "
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="post-slide ">
                <div className="post-img">
                  <img src="imges/blog_1.jpg" alt="" />
                  <div className="over-layer">
                    <ul className="post-link">
                      <li>
                        <Link to="/blogdetails" className="fa fa-search"></Link>
                      </li>
                      <li>
                        <Link to="/blogdetails" className="fa fa-link"></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to="/blogdetails">
                      QUARANTINING IS BETTER THAN GETTING CURED
                    </Link>
                  </h3>
                  <p className="post-description">
                    COVID-19 has emerged as a pandemic in this time period and
                    has its violently vigorous spread all across the world.
                  </p>
                  <Link to="/blogdetails" className="read-more">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="post-slide ">
                <div className="post-img">
                  <img src="imges/blog_2.jpg" alt="" />
                  <div className="over-layer">
                    <ul className="post-link">
                      <li>
                        <Link to="/blogdetails" className="fa fa-search"></Link>
                      </li>
                      <li>
                        <Link to="/blogdetails" className="fa fa-link"></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to="/blogdetails">
                      QUARANTINING IS BETTER THAN GETTING CURED
                    </Link>
                  </h3>
                  <p className="post-description">
                    COVID-19 has emerged as a pandemic in this time period and
                    has its violently vigorous spread all across the world.
                  </p>
                  <Link to="/blogdetails" className="read-more">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="post-slide ">
                <div className="post-img">
                  <img src="imges/blog_3.jpg" alt="" />
                  <div className="over-layer">
                    <ul className="post-link">
                      <li>
                        <Link to="/blogdetails" className="fa fa-search"></Link>
                      </li>
                      <li>
                        <Link to="/blogdetails" className="fa fa-link"></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to="/blogdetails">
                      QUARANTINING IS BETTER THAN GETTING CURED
                    </Link>
                  </h3>
                  <p className="post-description">
                    COVID-19 has emerged as a pandemic in this time period and
                    has its violently vigorous spread all across the world.
                  </p>
                  <Link to="/blogdetails" className="read-more">
                    read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="post-slide ">
                <div className="post-img">
                  <img src="imges/blog_4.jpg" alt="" />
                  <div className="over-layer">
                    <ul className="post-link">
                      <li>
                        <Link to="/blogdetails" className="fa fa-search"></Link>
                      </li>
                      <li>
                        <Link to="/blogdetails" className="fa fa-link"></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to="/blogdetails">
                      QUARANTINING IS BETTER THAN GETTING CURED
                    </Link>
                  </h3>
                  <p className="post-description">
                    COVID-19 has emerged as a pandemic in this time period and
                    has its violently vigorous spread all across the world.
                  </p>
                  <Link to="/blogdetails" className="read-more">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Blog End --> */}

      <Part />
      <Footer />
    </>
  );
}

export default Blog;
