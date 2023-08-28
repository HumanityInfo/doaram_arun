import React from "react";
import { NavLink,Link} from "react-router-dom";

function Website() {
  return (
    <div className="container bg-white mt-5 fontfamilynca">
      <div className="row mb-2">
        <div className="col pt-5">
          <NavLink to="/CauseDetails">
            <button className="btn btnnca btn-default btn-sm">
              <i className="fa fa-arrow-left"></i> Back To Cause
            </button>
          </NavLink>
        </div>
      </div>

      <div
        className="text-center mx-auto wow fadeInUp  mb-5"
        data-wow-delay="0.1s"
      >
        <h3>Aadhunik Stree Vikas Pratisthan</h3>
        <p className="font12">Woman Empowerment</p>
      </div>

      <div className="col-md-12 mt-5">
        <div className="row">
          <div className="mb-5">
            <div className="post-slidenca ">
              <div className="post-img">
                <img
                  src={require("../../assets/da_img/women.jpg")}
                  alt="Features tile icon 04"
                  width={500}
                  height={500}
                />
              </div>
              <div className="post-content row">
                <div className="col-md-9">
                  <h3 className="post-title">
                    <Link to="#">Aadhunik Stree Vikas Pratisthan</Link>
                  </h3>
                  <p className="post-description font12">
                    COVID-19 has emerged as a pandemic in this time period and
                    has its violently vigorous spread all across the world. What
                    is so alarming is that over 1.4 lakh deaths have occurred
                    throughout the world so far and would definitely go beyond
                    this painful number when you are reading this. Since no
                    vaccines or drugs have been found out, it has become very
                    difficult to arrest its supersonic spread. As of now,
                    self-quarantining ourselves is taken as the prime preventive
                    measure for this pandemic. The fact that this virus is
                    pleomorphic in nature makes the process of curing it, a
                    complex one. So, until a proper cure i.e. medicine is found
                    out, strict precautionary measures are to be followed to get
                    away from the attack of COVID-19. As of India, due to early
                    lockdown throughout the country, the transmission rate is
                    quite low when compared to other countries. But if we fail
                    to proceed with the measures, it would be very much
                    difficult to control, keeping in mind the huge population
                    that we have. An approximate period of lockdown can be
                    derived from “SIR”- a simple mathematical modelling that
                    figures out the theoretical number of people infected with a
                    contagious disease in a closed population over a given
                    period of time. (Where S is susceptible, I is infected, R is
                    recovered). On giving the necessary inputs for the modeling,
                    we could arrive at a clear point that, a range between
                    55-60days of lockdown, is very necessary to drop down the
                    increasing count of infected people. The government should
                    make a daring decision to prolong the curfew till the
                    stability of situation is ensured for quite a period at
                    least (towards the end of lockdown) or else if they hurry to
                    set people free of lockdown, there is a possibility of the
                    second cycle of infection too, as seen in China. To avoid
                    that dreadful situation, every human should know his/her
                    responsibility for controlling the spread of this killing
                    virus by coping up with the orders of government. Also,
                    keeping in mind the selfless souls that are tirelessly
                    working to fight against this disease, we should act
                    accordingly. Among the various researches that have been
                    carried on so far, research on plasma is eyed to get the
                    probable solution to fight this pandemic. The reason is that
                    for some previous pandemics, positive results were obtained
                    through plasma therapy. The recent outbreak of Ebola in
                    Africa was counteracted by the convalescent plasma therapy,
                    due to the unavailability of specific drugs or treatments.
                    Though research is being done in various countries, it would
                    take quite a period of even about a year to formulate and
                    produce a suitable medicine. Hence voluntary quarantine,
                    being the only weapon for us as of now, we all should follow
                    that measure, to fight together to evade this pandemic.
                  </p>

                  <p>
                    {" "}
                    Share : &nbsp; &nbsp; &nbsp;
                    <div className="d-flex pt-2 ms-5">
                      <a className="btn btnnca btn-squarenca btn-iconnca rounded-circle me-2">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btnnca btn-squarenca btn-iconnca rounded-circle me-2">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btnnca btn-squarenca btn-iconnca rounded-circle me-2">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </p>

                  <div className="row mt-3">
                    <div className="mb-3 col mt-5">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        <span className=" text-dark">Comments</span>
                      </label>
                      <textarea
                        className="form-control w-100"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <button className="btn btnnca btn-secondary btn-secondarynca btn-sm mx-2  col-md-3">
                      Leave comment
                    </button>
                  </div>
                </div>

                <div
                  className="col-md-3 mb-5"
                  style={{ borderLeft: "1px solid #ddd" }}
                >
                  <div className="row mb-3">
                    <div className="categories">
                      <h6>
                        <u>Categories</u>
                      </h6>
                      <ul className="list-group list-group-flush font12">
                        <li className="list-group-item">
                          <a>Animals</a>
                        </li>
                        <li className="list-group-item">
                          <a>Children</a>
                        </li>
                        <li className="list-group-item">
                          <a>Culture</a>
                        </li>
                        <li className="list-group-item">
                          <a>Education</a>
                        </li>
                        <li className="list-group-item">
                          <a>Elderly</a>
                        </li>
                        <li className="list-group-item">
                          <a>Employment</a>
                        </li>
                        <li className="list-group-item">
                          <a>Environment</a>
                        </li>
                        <li className="list-group-item">
                          <a>Factual</a>
                        </li>
                        <li className="list-group-item">
                          <a>General</a>
                        </li>
                        <li className="list-group-item">
                          <a>Health</a>
                        </li>
                        <li className="list-group-item">
                          <a>Natural Disaster</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="categories">
                      <h6>
                        <u>Latest Blogs</u>
                      </h6>
                      <ul className="list-group list-group-flush font12">
                        <li className="list-group-item">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src={require("../../assets/da_img/blog_1.jpg")}
                                alt="..."
                                style={{ width: "100px" }}
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              Quarantining is..
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <a>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src={require("../../assets/da_img/blog_2.jpg")}
                                  alt="..."
                                  style={{ width: "100px" }}
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                Tell me what yo..{" "}
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src={require("../../assets/da_img/blog_3.jpg")}
                                  alt="..."
                                  style={{ width: "100px" }}
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                A contemporary ..
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <img
                                  src={require("../../assets/da_img/blog_1.jpg")}
                                  style={{ width: "100px" }}
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                LGBT, a fruit l..{" "}
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;
