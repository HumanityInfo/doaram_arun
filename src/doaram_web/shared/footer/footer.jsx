import { Link } from "react-router-dom";

function Footer() {
  const movetoTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bgc-dark footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <Link to="/" className="">
                <img src="imges/logo.png" alt="" className="logo" />
              </Link>
              <p className="text-white mt-2">
                DoAram powers technology that transforms workplace culture to
                purpose driven business
              </p>
              <div className="d-flex pt-3">
                <Link
                  to="https://twitter.com/DoAramDoGood/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.facebook.com/DoAramDoGood/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="https://www.youtube.com/@doaramdogood"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/doaramofficial/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
              <div className="d-flex pt-3">
                <Link
                  to="https://www.linkedin.com/company/doaramoffical/"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  to="https://www.tumblr.com/blog/doaramdogood"
                  className="btn btn-square btn-icon rounded-circle me-2"
                >
                  <i className="fab fa-tumblr"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">DoAram Platform</h5>
              <Link to="/insight" className="btn btn-link">
                For NGOs
              </Link>
              <Link to="/corporate" className="btn btn-link">
                For Corporates
              </Link>
              <Link to="/individuals" className="btn btn-link">
                For Individuals
              </Link>
              <br /> <br />
              <h5 className="text-white mb-4">DoAram Links</h5>
              <Link to="/about" className="btn btn-link">
                About Us
              </Link>
              <Link to="/contact" className="btn btn-link">
                Contact Us
              </Link>
              <Link to="/blog" className="btn btn-link">
                Blogs
              </Link>
              <Link to="/faq" className="btn btn-link">
                FAQs
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Business Hours</h5>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="">09:00 am - 06:30 pm</h6>
              <p className="mb-1">Saturday & Sunday</p>
              <h6 className="">Closed</h6>
              <br />
              <h5 className="text-white mb-4">Others</h5>
              <Link to="/terms" className="btn btn-link">
                Terms & Conditions
              </Link>
              <Link to="/policy " className="btn btn-link">
                Policy
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">OFFICE LOCATION</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>DoAram, NH 47,
                <br />
                Avinashi Road, Kaniyur,
                <br />
                Coimbatore - 641 659
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+91 95858 24555
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@doaram.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright bgc-dark py-4">
        <div className="container text-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <span>
              {" "}
              Business system developed and maintained by
              <Link to="http://humanityinfotek.com/" className="txt-warning">
                <img
                  loading="lazy"
                  src="imges/logo_white.png"
                  width="18px"
                  alt="offers"
                />
                &nbsp;Humanity InfoTek Pvt Ltd(Coimbatore).
              </Link>
              <br />
              <span>Copyright © All rights reserved | Ver : 2.0</span>
              <Link to="" className="back-to-top">
                <svg className="back-to-top"></svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
      {/* <!-- Back to Top --> */}
      <div
        class="btn btn-lg  btn-warning btn-lg-square rounded-circle back-to-top"
        onClick={movetoTop}
      >
        <i class="bi bi-arrow-up"></i>
      </div>
    </>
  );
}

export default Footer;
