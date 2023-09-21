import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
// import "./partner.css";

function Partner() {
  const options = {
    items: 2,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    margin: 8,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      }
  }
  };
  return (
    <>
      <div className="container webbody">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-web mt-5 mb-2">Why Partner with DoAram</h1>
              <p className="mt-4 mb-4">
                Partnering with DoAram enhances NGO credibility and visibility
                to approach individuals and corporates. The transfer of CSR
                funds thorough our secured payment gateways guarantee transfer
                and optimal use of donations. Monitoring funds, enhancement of
                public relations and branding through diverse causes bring the
                spotlight to you.{" "}
              </p>
            </div>
            <div className="col-md-8">
              <div className="container-fluid yellow">
                <OwlCarousel className="owl-theme" {...options}>
                  <div
                    className="post-slide bgc-secondary"
                    style={{ height: "70vh" }}
                  >
                    <div className="post-content">
                      <img
                        src="imges/about/c1.png"
                        alt=""
                        style={{ width: "79px", height: "81px" }}
                      />
                      <h3 className="post-title mt-5">
                        <Link to="" className=" txt-gold">
                          {" "}
                          Comprehensive Network
                        </Link>
                      </h3>
                      <p className="post-description txt-gold">
                        Communication is vital to reach specific or a wide range
                        of donors for time bound fund raising. DoAram is the
                        perfect culmination for NGOs, corporates and individuals
                        to form strong bonds for social welfare.
                      </p>
                    </div>
                  </div>
                  <div
                    className="post-slide bgc-secondary "
                    style={{ height: "70vh" }}
                  >
                    <div className="post-content">
                      <img
                        src="imges/about/c2.png"
                        alt=""
                        style={{ width: "79px", height: "81px" }}
                      />
                      <h3 className="post-title mt-5">
                        <Link to="" className=" txt-gold">
                          Hassle – free
                        </Link>
                      </h3>
                      <p className="post-description txt-gold">
                        DoAram offers end-to-end service for NGOs, corporates
                        and individuals, hassle free and trustworthy methods of
                        donating and/or receiving funds and sourcing volunteers.
                        DoAram makes it simple.
                      </p>
                    </div>
                  </div>
                  <div
                    className="post-slide bgc-secondary"
                    style={{ height: "70vh" }}
                  >
                    <div className="post-content">
                      <img
                        src="imges/about/c3.png"
                        alt=""
                        style={{ width: "79px", height: "81px" }}
                      />
                      <h3 className="post-title  mt-5">
                        <Link to="" className=" txt-gold">
                          Ease of Online Payments
                        </Link>
                      </h3>
                      <p className="post-description txt-gold">
                        Transaction is made effortless and swift through our
                        online payment gateway, making it simple for donors from
                        around the world to contribute to your cause.
                      </p>
                    </div>
                  </div>
                  <div
                    className="post-slide bgc-secondary"
                    style={{ height: "70vh" }}
                  >
                    <div className="post-content">
                      <img
                        src="imges/about/c4.png"
                        alt=""
                        style={{ width: "79px", height: "81px" }}
                      />
                      <h3 className="post-title  mt-5">
                        <Link to="" className=" txt-gold">
                          Effective CSR Partnerships
                        </Link>
                      </h3>
                      <p className="post-description txt-gold">
                        Some instances may necessitate joint ventures between
                        corporates (cause-based partnerships) for which DoAram
                        aids corporates and individuals to come together and
                        work for a common cause.
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Partner;
