import { Link } from "react-router-dom";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";
import Partner from "../shared/partner/partner";
import Joinus from "../shared/joinus/joinus";

function Corporate() {
  return (
    <>
      <Header />
      {/* <!-- solution Start --> */}
      <div className="container-xxl py-3 webbody">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-medium text-dark mb-2">
                Corporate solutions in one platform
              </h1>
              <p>
                Founded on values and built with virtues, India has for
                centuries lived based on the philosophy of giving to the poor
                and uplifting them from their dire conditions. This deep rooted
                philosophy has been extended into the corporate domain by the
                Indian Government (for the first time in history for any
                country) whereby the corporates (with a net worth of Rs 500
                crores or a turnover of Rs 1,000 crores or net profit of Rs 5
                crores) are invited to share 2% of their average net profit as
                CSR funds for the development of the nation.{" "}
              </p>
              <p>
                Teaming up with DoAram expands the opportunities to contribute
                for the wellness of society at large and build a world with
                sustainability where virtues light the path towards the
                enhancement of human life, dignity, and the environment.{" "}
              </p>
              <div>
                <button type="button" className="btn btn-warning ngoPanel">
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
                    className="img-fluid"
                    src="imges/corp/coorp_banner.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Solution End --> */}

      {/* <!-- AdvantageStart --> */}
      <div
        className="text-center mx-auto wow fadeInUp mb-5"
        data-wow-delay="0.1s"
      >
        <h1 className="display-5">DoAram’s Corporate Advantage</h1>
      </div>
      <div className="container py-5">
        <div className="col-md-12">
          <div
            className="row d-flex justify-content-center wow fadeInUp  bgc-secondary"
            style={{ borderradius: "10px" }}
            data-wow-delay="0.1s"
          >
            <div className="col-md-3">
              <div className="serviceBox1 ">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-clipboard"></i>
                  </span>
                </div>
                <h3 className="title">HUMANIZE YOUR BRAND</h3>
                <p className="description">
                  Harness social values with your brand and make your brand an
                  ambassador of change. Donate, help raise funds, engage
                  volunteers and increase your social brand value.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="serviceBox1">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-eye"></i>
                  </span>
                </div>
                <h3 className="title">EMPLOYEE ENGAGEMENT </h3>
                <p className="description">
                  Engage your employees who are the pulse of your brand to
                  effect positive social changes. Nothing unites employees
                  better than uniting to do good.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="serviceBox1">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-clipboard" aria-hidden="true"></i>
                  </span>
                </div>
                <h3 className="title">SOCIAL IMPACT MEASURE </h3>
                <p className="description">
                  {" "}
                  With our global expertise in technology, we analyze the
                  outcomes of policies before and after implementations. The
                  scale, efficacy and the response are examined and recorded.
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="serviceBox1">
                <div className="service-icon">
                  <span>
                    <i className="fa fa-rocket"></i>
                  </span>
                </div>
                <h3 className="title">INCREASE BRAND VISIBILITY </h3>
                <p className="description">
                  Raise brand visibility by organizing / taking part in events
                  for social welfare. Social activities creating an impact at
                  the grass root levels enhance company image.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- AdvantageEnd --> */}

      {/* <!-- Contribute Start --> */}
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 mb-5"> How Can You Contribute</h1>
        </div>
        <div className="col-md-12">
          <div className=" row">
            <div className="col-md-4 mb-5">
              <Link to="#" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-sign-in-64.png" alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">1</span>&nbsp; Login
                </p>
                <p>
                  Login to our website www.doaram.com and click ‘Contribute’.{" "}
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-donate-96 (1).png" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">2</span>&nbsp; Contribute
                </p>
                <p>
                  Choose ‘Contribute’ to an NGO and select the NGO of your
                  choice.{" "}
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-file-64.png" alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">3</span>&nbsp; Download
                  Receipt
                </p>
                <p>
                  DoAram gives you a receipt for your donation along with the
                  organization’s details.
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-initiate-money-transfer-100.png"  alt=""/>
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">4</span>&nbsp;
                  Utilization of Funds by NGOs
                </p>
                <p>
                  The donations will be utilized by the chosen NGO for the
                  intended beneficiaries.
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-survey-64.png" alt="" />
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">5</span>&nbsp; Monitor
                  Your Funds{" "}
                </p>
                <p>
                  DoAram monitors every donation and ensures that NGOs send us
                  post evaluations.{" "}
                </p>
              </Link>
            </div>
            <div className="col-md-4 mb-5">
              <Link to="" className="card cardStyle">
                <div className="overlay"></div>
                <div className="circles text-start">
                  <img src="imges/icons/icons8-envelope-96.png"  alt=""/>
                </div>
                <p className="fw-bold">
                  <span className="badge bgc-secondary">6</span>&nbsp; E-mail
                  Receipts
                </p>
                <p>
                  DoAram mails you a complete report on the donation received.{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- Contribute End --> */}
      {/* partner */}
      <Partner />
      {/* {part} */}
      <Part />
      {/* joinus */}
      <Joinus />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Corporate;
