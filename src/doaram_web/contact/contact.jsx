import { Link } from "react-router-dom";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";

function Contact() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5 webbody">
        <div className="container">
          <div className="row g-5 justify-content-center mb-5">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-warning text-center h-100 p-5 border8">
                <div
                  className="btn-square bg-white rounded-circle mx-auto mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <i className="fa fa-phone-alt fa-2x txt-primary"></i>
                </div>
                <h4 className="mb-3">Phone Number</h4>
                <p className="mb-2">+91 95858 24555</p>
                <br />
                <Link to="tel:+0123456789" className="btn btn-secondary  px-4">
                  Call Us <i className="fa fa-arrow-right ms-2"></i>
                </Link>
                
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-warning text-center h-100 p-5 border8">
                <div
                  className="btn-square bg-white rounded-circle mx-auto mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <i className="fa fa-envelope-open fa-2x txt-primary"></i>
                </div>
                <h4 className="mb-3">Email Address</h4>
                <p className="mb-2">info@doaram.com</p>
                <br />
                <Link
                  to="mailto:info@example.com"
                  className="btn btn-secondary  px-4"
                >
                  Email Us <i className="fa fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-warning text-center h-100 p-5 border8">
                <div
                  className="btn-square bg-white rounded-circle mx-auto mb-4"
                  style={{ width: "90px", height: " 90px" }}
                >
                  <i className="fa fa-map-marker-alt fa-2x txt-primary"></i>
                </div>
                <h4 className="mb-3">Office Address</h4>
                <p className="mb-2">
                  DoAram, NH 47, Avinashi Road, Kaniyur, Coimbatore - 641 659
                </p>
                <Link
                  to="https://www.google.com/maps/place/11%C2%B000'25.1%22N+76%C2%B058'37.8%22E/@11.006976,76.977157,14z/data=!4m4!3m3!8m2!3d11.0069761!4d76.9771567?hl=en&entry=ttu"
                  className="btn btn-secondary  px-4"
                  target="blank"
                >
                  Visit Us <i className="fa fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div style={{ width: " 100%" }}>
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=11.0069761,76.9771567+(DoAram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <Link to="https://www.maps.ie/distance-area-calculator.html">
                    area maps
                  </Link>
                </iframe>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fw-web text-uppercase text-dark mb-2">
                Contact Us
              </p>
              
              <h1 className="display-5 mb-4">
                We would love to hear from you.
              </h1>
              <p className="mb-4">
                Please fill up the form. Our team will get back to you within 24
                hours
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square bgc-dark rounded-circle">
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h6>Call Us</h6>
                      
                      <span>+91 95858 24555</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square bgc-dark rounded-circle">
                      <i className="fa fa-envelope text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h6>Mail Us</h6>
                      <span>info@doaram.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="subject mt-2">Subject</label>
                    <div
                      className="form-floating pt-3"
                      style={{
                        background: "#fff",
                        padding: "5px",
                        borderradius: "5px",
                      }}
                    >
                      <div className="row">
                        <div className="col">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              id="s1"
                              value="option1"
                            />
                            <label className="form-check-label" for="s1">
                              General Enquiry
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              id="s2"
                              value="option2"
                            />
                            <label className="form-check-label" for="s2">
                              Corporate
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              id="s3"
                              value="option2"
                            />
                            <label className="form-check-label" for="s3">
                              NGOs
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          {" "}
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              id="s4"
                              value="option1"
                            />
                            <label className="form-check-label" for="s4">
                              Individuals
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              id="s5"
                              value="option2"
                            />
                            <label className="form-check-label" for="s5">
                              Concept Note
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subject"
                              id="s6"
                              value="option2"
                            />
                            <label className="form-check-label" for="s6">
                              Other
                            </label>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mt-2">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ resize: "none", height: "150px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-warning py-3 px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      <Footer />
    </>
  );
}
export default Contact;
