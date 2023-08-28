import { Link } from "react-router-dom";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";
import Partner from "../shared/partner/partner";
import Testinomial from "../shared/testinomial/testinomial";

function Individuals() {
  return (
    <>
      <Header />
      {/* <!-- Donate Start --> */}
      <div className="container-xxl py-5 webbody">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-medium text-dark mt-5 mb-2">
                Donate / Volunteer For Good
              </h1>
              <p>
                Help provide, build and sustain a better world by donating /
                volunteering for causes. Join the DoAram family and get in touch
                with thousands of verified NGOs.
              </p>
              <div>
                <button type="button" className="btn btn-warning">
                  Signup now
                  <i className="fa fa-arrow-right text-white ms-1"></i>
                </button>
              </div>
              <div className="row pt-2">
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-item-center h-100">
                <div className="wow fadeInUp  " data-wow-delay="0.1s">
                  <img
                    className="img-fluid mt-5"
                    src="imges/individual/individual.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donate End -->

    <!-- WorkStart --> */}
      <div className="container mt-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 mb-5"> How does it work</h1>
        </div>
        <div className="col-md-12">
          <div className=" row d-flex justify-content-center">
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/individual/donate.png" alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">1</span>&nbsp; Choose a
                  Cause{" "}
                </p>
                <p>Donate or Volunteer </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/individual/download.png" alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">2</span>&nbsp; Download
                  Certificates
                </p>
                <p>
                  Verify NGO cause with valid details of registered 12A and 80G
                  certificates.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- work End --> */}
      <div className="container bg-individual">
        <div
          className="text-center mx-auto wow fadeInUp mt-5"
          data-wow-delay="0.1s"
          style={{ maxwidth: "600px" }}
        >
          <h1 className=" text-white pt-5">Donate to a cause</h1>
          <p className="font12   text-white">
            DoAram provides an opportunity for voluntary donors be it an NGO, a
            Corporate, or an Individual to donate or raise funds for any NGOs
            listed with us of their choice.{" "}
          </p>
          <div className="mt-5">
            <button type="button" className="btn btn-warning">
              Donate now
            </button>
          </div>
        </div>
      </div>
      <Partner />
      <Part />
      <Testinomial />
      <Footer />
    </>
  );
}

export default Individuals;
