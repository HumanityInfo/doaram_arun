import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import Joinus from "../shared/joinus/joinus";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Testinomial from "../shared/testinomial/testinomial";
import Question from "../shared/question/question";

import bimg3 from "../images/bimg3.png";
import Animals from "../images/Animals.png";
import Children from "../images/Children.jpg";
import Mobilization from "../images/Mobilization.jpg";
import Culture from "../images/Cultural.jpg";
import Dabled from "../images/DAbled.jpg";
import Elderly from "../images/Elderly.jpg";
import Education from "../images/Education.jpg";
import Health from "../images/Healthcare.jpg";
import Women from "../images/Women.jpg";
import Skill from "../images/Others.jpg";
import Environment from "../images/Environment.jpg";

// import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const options = {
    items: 3,
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
          items:3
      }
  }
  };
  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <Header />
      {/* HomePage Start */}
      <div className="container-xxl py-1 webbody">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp txthome"
            data-wow-delay="0.1s"
          >
            <h1 className="display-5 mb-3">
              <span className="txt-warning">Let’s DoAram</span>
              <span className="txt-warning"></span>
            </h1>

            <p className="  mb-4">
              (The Tamil word ‘Aram’ encompasses all the Virtues. It refers to
              an act of kindness and expression of human love without any
              personal motive.)
            </p>
            <p className="fw-web  mb-3">
              Join the World’s Largest Contribution Platform to make the World a
              Better Place
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center mx-auto wow fadeInUp txthome"
        data-wow-delay="0.1s"
      >
        <h1 className="displaytxt-5">Support a Cause</h1>
      </div>
      {/* <!-- Carousel Start --> */}
      {/* <div className="container-fluid px-0 mb-5">
        <OwlCarousel items={3} autoplay={false} margin={0}>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center "
                style={{
                  backgroundImage: `url(${bimg3})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">WASH</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Animals})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Animal Rights / Animal Care</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center cimg"
                style={{
                  backgroundImage: `url(${Children})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">
                    Children’s Rights / Child Welfare
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Mobilization})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Poverty Alleviation</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Culture})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Heritage Conservation</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Dabled})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Differently Abled</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Education})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Literacy and Education</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Elderly})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Care for The Elderly</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Environment})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Environmental Conservation</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Health})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Health and Nutrition</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Skill})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Skill Development</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div
                className="img d-flex align-items-end justify-content-center"
                style={{
                  backgroundImage: `url(${Women})`,
                  backgroundRepeat: "no-repeat",
                  width: "100% ",
                  height: "500px",
                  backgroundSize: "contain",
                }}
              >
                <div className="text w-100">
                  <h3 className="text-white">Women Empowerment</h3>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div> */}
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-web txt-warning mb-2 abouttxt">
                About DoAram
                <br />
                <small className="h6 txt-warning">DoAram, Feel Good</small>
              </h1>
              <p className="mt-4 mb-4">
                DoAram is an end-to-end digital platform bridging a trifecta of
                corporates, NGOs and individuals to accomplish their social
                responsibility goals. Connect with authentic and verified NGOs,
                Corporates and Individuals willing to make the world a better
                place. By connecting registered and trusted NGOs with companies
                and individuals, DoAram aids the transparent and seamless
                transfer and functioning of funding, volunteering, campaigning,
                and fundraising, all in one place to realize maximum impact of
                social good.
              </p>
              <div className="row pt-2">
                <div className="col-sm-6">
                  <div className="d-flex align-items-left">
                    <Link to="/about">
                      <button type="button" className="btn btn-warning">
                        Learn More
                        <i className="fa fa-arrow-right text-white ms-1"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-item-center h-100">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                  <img
                    className="img-fluid aboutimg"
                    src="imges/h_about.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!--Team Start--> */}
      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <img className="img-fluid" src="imges/4.jpg" alt="" />
                <div className="d-flex ">
                  <div className="flex-shrink-0 btn-square bg-warning teamimg">
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4  containerbox ">
                    <h5>NGOs</h5>
                    <span className="txt-warning">
                      Empower your NGO with the Power of Insights!{" "}
                    </span>
                    <div className="team-social">
                      <span>Raise Funds & Volunteers for your cause. </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <img className="img-fluid" src="imges/9.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-warning teamimg">
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="containerbox position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4">
                    <h5>Corporates</h5>
                    <span className="txt-warning">
                      {" "}
                      Contribute / Volunteer to the cause of your choice
                    </span>
                    <div className="team-social">
                      <span>Monitor Your Funds / Help Employees Volunteer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item">
                <img className="img-fluid" src="imges/8.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-warning teamimg">
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className=" containerbox position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4">
                    <h5>Individuals</h5>
                    <span className="txt-warning">
                      Contribute / Volunteer to the cause of your choice{" "}
                    </span>
                    <div className="team-social">
                      <span>Donate and/or Volunteer </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Facts Start --> */}
      <div className="container-fluid my-3 p-5 bg-rate">
        <div className="row g-5">
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="text-left mt-5 pt-5">
              <h1 className="h3 text-white mb-0">DoAram in Numbers</h1>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="text-center border p-5">
              <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
              <h1
                className="display-2 txt-warning mb-0"
                data-toggle="counter-up"
              >
                14,000
              </h1>
              <span className="fs-5 fw-semi-bold text-white">NGOs</span>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="text-center border p-5">
              <i className="fa fa-cubes fa-3x text-white mb-3"></i>
              <h1
                className="display-2 txt-warning mb-0"
                data-toggle="counter-up"
              >
                235
              </h1>
              <span className="fs-5 fw-semi-bold text-white">Cause</span>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
            <div className="text-center border p-5">
              <i className="fa fa-building fa-3x text-white mb-3"></i>
              <h1
                className="display-2 txt-warning mb-0"
                data-toggle="counter-up"
              >
                1100
              </h1>
              <span className="fs-5 fw-semi-bold text-white">Corporates</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}
      <Joinus />

      {/* <!-- Facts Start --> */}
      <div className="container-fluid bg-yellowgra mt-3">
        <div className="row ">
          <div className="container">
            <div className="row m-5">
              <div
                className="col-md-6 col-xl-6 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="text-left ">
                  <h1 className="h3 text-white mb-2">Why DoAram</h1>

                  <p className="fw-web text-dark mb-2">
                    We are geared with a comprehensive, end to end software
                    solutions that provides authentic, transparent and seamless
                    transactions between corporates, individuals and NGOs.{" "}
                  </p>
                  <p className="fw-web text-dark mb-2">
                    Harness Efforts - Channel Funds - Measure Impact - Respond
                    Quickly
                  </p>
                  <a className="ngoPanel">
                    <button type="button" className="btn btn-secondary">
                      Sign-up Now
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-6 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div
                  className="d-flex justify-content-center wow fadeInUp mt-2"
                  data-wow-delay="0.1s"
                >
                  <img
                    className="img-fluid factimg"
                    src="imges/corp/became_partner.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}
      {/* testinomial */}
      <Testinomial />
      <Question />
      {/* <!-- blog Start --> */}
      <div className="container-xxl py-3">
        <div className="text-center mx-auto wow fadeIn " data-wow-delay="0.1s">
          <h1 className=" mb-3">
            Our Articles
            <Link to="/blog"className="btn btn-warning float-end">
              View All
              <i className="fa fa-arrow-right ms-1"></i>
            </Link>
          </h1>
        </div>
      </div>

      <div className="container-fluid">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="post-slide ">
            <div className="post-img">
              <img src="imges/blog/78_banner_750.jpg" alt="" />
              <div className="over-layer">
                <ul className="post-link">
                  <li>
                    <Link to="#" className="fa fa-search"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-link"></Link>
                  </li>
                </ul>
              </div>
              <div className="post-date">
                <span className="date">3</span>
                <span className="month">Mar</span>
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <Link to="#">
                  UNTIL ONE HAS LOVED AN ANIMAL A PART OF ONE'S SOUL REMAINS
                  UNAWAKE
                </Link>
              </h3>
              <p className="post-description">
                As human populations grow, we encounter wild animals more often
                as we tend to move into their space. Animals and plants have
                always had a tough time surviving. Scientists estimate that over
                a common fraction of the animals and plants that when lived on
                earth ...
              </p>
              <Link to="#" className="read-more">
                read more
              </Link>
            </div>
          </div>
          <div className="post-slide">
            <div className="post-img">
              <img src="imges/blog/77_banner_750.jpg" alt="" />
              <div className="over-layer">
                <ul className="post-link">
                  <li>
                    <Link to="#" className="fa fa-search"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-link"></Link>
                  </li>
                </ul>
              </div>
              <div className="post-date">
                <span className="date">1</span>
                <span className="month">Apr</span>
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <Link to="#">WHAT IF WE RUN OUT OF WATER ON EARTH?</Link>
              </h3>
              <p className="post-description">
                Water will soon be called the next liquid gold after petroleum.
                It is so obvious that the concept of water trade called "virtual
                water" or "invisible water" exports a country's available water
                resources embedded in a consumer product. Can you imagine to fit
                130 litres of water in a cup? Of course, y...
              </p>
              <Link to="#" className="read-more">
                read more
              </Link>
            </div>
          </div>
          <div className="post-slide">
            <div className="post-img">
              <img src="imges/blog/76_banner_250.jpg" alt="" />
              <div className="over-layer">
                <ul className="post-link">
                  <li>
                    <Link to="#" className="fa fa-search"></Link>
                  </li>
                  <li>
                    <Link to="#" className="fa fa-link"></Link>
                  </li>
                </ul>
              </div>
              <div className="post-date">
                <span className="date">26</span>
                <span className="month">Jan</span>
              </div>
            </div>
            <div className="post-content">
              <h3 className="post-title">
                <Link to="#">
                  WHY DO BOYS ALWAYS HAVE TO WEAR BLUE AND GIRLS PINK?
                </Link>
              </h3>
              <p className="post-description">
                The ideology of stereotyping in children starts the moment they
                are out from a cosy womb even before they realize the purpose of
                life. Excited parents of the newborns rush to baby stores buying
                stuff in blue if it is a boy and pink if it's a girl. In some
                cases, few parents manage to know the gender...
              </p>
              <Link to="#" className="read-more">
                read more
              </Link>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* Homepage End */}
      <Footer />
    </div>
  );
}

export default Home;
