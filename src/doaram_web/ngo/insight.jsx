import { Link } from "react-router-dom";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";
import Partner from "../shared/partner/partner";
import Joinus from "../shared/joinus/joinus";

function Insight() {
  return (
    <>
      <Header />

      {/* <!-- Insight Start --> */}
      <div className="container-xxl py-5 webbody">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-web text-dark mt-4 mb-2">
                DoAram Powers your NGO to its True Potential with the Power of
                Insight!
              </h1>
              <p>
                The recognition and realization of the salience of NGOs and
                their services for the advancement of society, the enhancement
                of local and rural areas, all harnessed with the encouragement
                and efforts of citizen participation has led to the birth of
                DoAram. DoAram provides ERP solutions that integrate the efforts
                of the public, the government, NGOs and private sectors
                channeled to empower society.
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
                    src="imges/ngo/ngobanner.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Insight End --> */}

      <div className="container py-5">
        <div className="col-md-12">
          <div
            className="row d-flex justify-content-center wow fadeInUp  bgc-secondary"
            style={{ borderradius: " 10px" }}
            data-wow-delay="0.1s"
          >
            <div className="col-md-3">
              <div className="serviceBox1 ">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-money"></i>
                  </span>
                </div>
                <h3 className="title">Monetary Management</h3>
                <p className="description">
                  {" "}
                  Use DoAram’s comprehensive methods and dexterous tools for
                  management of collection and utilization of CSR funds,
                  expenses, claims and scheduled payments.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="serviceBox1">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-hand-rock-o"></i>
                  </span>
                </div>
                <h3 className="title">Volunteer Management</h3>
                <p className="description">
                  {" "}
                  Source volunteers who are passionate and believe in your cause
                  – DoAram makes it easy to recruit them, retain them, and
                  recognize their good will. <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="serviceBox1">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                </div>
                <h3 className="title">Sell Products</h3>
                <p className="description">
                  DoAram gives NGOs the provision to carry out sales of
                  small-scale handcrafted products produced by the differently
                  abled and gives them a dignified life.
                  <br />
                  &nbsp;
                  <br />
                  &nbsp;{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Create Start --> */}
      <div className="container mt-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 mb-3"> Create Your NGO Profile</h1>
        </div>
        <div className="col-md-12">
          <div className=" row">
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-sign-in-64.png"alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">1</span>&nbsp; Log in
                </p>
                <p>Log in to our website www.doaram.com </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/ngo/icons8-user-96.png" alt=""/>
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">2</span>&nbsp;Create
                  Profile
                </p>
                <p>
                  Create your NGO profile (upload valid details with registered
                  12A and 80G certificates).
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/ngo/icons8-user-96 (1).png" alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">3</span>&nbsp; Get
                  Verified{" "}
                </p>
                <p>
                  After verification of NGO profile, DoAram will contact and
                  intimate you via mail.{" "}
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/ngo/icons8-holding-box-100 (1).png" alt=""/>
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">4</span>&nbsp; Raise
                  Funds/ Invite Volunteers / Organize Campaigns{" "}
                </p>
                <p>
                  Create a cause page with requirements or objectives to be met.
                  Spread the word via social media. The more shares, the better
                  the results.{" "}
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/ngo/icons8-charity-donation-96.png" alt=""/>
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">5</span>&nbsp; Concept
                  Note Verification to Corporates{" "}
                </p>
                <p>
                  {" "}
                  Concept notes will be sent to corporate for verification.{" "}
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/ngo/icons8-note-100.png" alt=""/>
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">6</span>&nbsp; Collect
                  Funds & Gather Volunteers{" "}
                </p>
                <p>
                  Raise funds and gather volunteers through DoAram and realize
                  your causes and make a positive impact on the world.{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- Create End --> */}
      
      <Partner />
      <Part />
      <Joinus />
      <Footer />
    </>
  );
}

export default Insight;
