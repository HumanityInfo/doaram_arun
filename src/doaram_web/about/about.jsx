import { Link } from "react-router-dom";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";
import Partner from "../shared/partner/partner";

function About() {
  return (
    <>
      {/* <!-- Header --> */}
      <Header />

      {/* <!-- About Start --> */}
      <div className="container-xxl mb-3 webbody">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-medium txt-warning mb-2">About DoAram</h1>
              <p className="mb-4">
                {" "}
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
              <h5 className="fw-medium txt-warning mt-5 mb-2">Our Vision</h5>
              <p>
                To provide a seamless and transparent charity contribution
                platform to facilitate donations, skill, resources, and planning
                with ease for the greater good of society.
              </p>
              <h5 className="fw-medium txt-warning mt-5 mb-2">Our Mission</h5>
              <p>
                To harness the largest group of likeminded people comprising of
                Corporations, Individuals and a galore of social bodies with
                verified NGOs to empower the vulnerable sections of society.
              </p>
              <div className="row pt-2">
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-item-center h-100">
                <div className="wow fadeInUp mt-5" data-wow-delay="0.1s">
                  <img
                    className="img-fluid"
                    src="imges/about/aboutus.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Nutshell start --> */}
      <div className="container-fluid py-5 bgc-secondary">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 text-white">DoAram in a Nutshell</h1>
          <p className="fw-medium text-uppercase txt-warning mb-2">
            {" "}
            The Whats, Whys & Hows
          </p>
        </div>
        <div className="col-md-12">
          <div className="row col-md-12  wow fadeInUp" data-wow-delay="0.1s">
            <div className="main-timeline  p-5 row">
              <div className="col-md-4">
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-building"></i>
                    </div>
                    <div className="timeline-year yr1">
                      <span>C</span>
                    </div>
                    <div className="inner-content">
                      <h3 className="title txt-warning">CORPORATES</h3>
                      <p className="description">
                        Centralized CSR decisions at the headquarters and
                        multiple office locations cause difficulty for
                        corporates effectively carry out the needful nor
                        approach authentic, like-minded NGOs. DoAram helps
                        corporates engage and fulfill their CSR objectives by
                        tracing prospective NGOs that parallel your company’s
                        CSR philosophies and brand identity.
                      </p>
                      <p className="description"></p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="timeline blue">
                  <a className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="timeline-year yr2">
                      <span>N</span>
                    </div>
                    <div className="inner-content">
                      <h3 className="title">NGOs</h3>
                      <p className="description">
                        Raising funds for smooth running is the number one
                        challenge faced by NGOs. When making ends meet becomes a
                        priority, NGOs cannot afford the luxury of digital
                        marketing and fall short of reaching out to donors,
                        volunteers and resources, hindering expansion of their
                        service. DoAram helps NGOs connect and receive support
                        from a plethora of corporates and individuals for their
                        desired causes.
                      </p>
                      <br />
                      <br />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="timeline green">
                  <a className="timeline-content">
                    <div className="timeline-icon">
                      <i className="fa fa-user"></i>
                    </div>
                    <div className="timeline-year yr3">
                      <span>I</span>
                    </div>
                    <div className="inner-content">
                      <h3 className="title">INDIVIDUALS</h3>
                      <p className="description">
                        Nothing parallels the united strength of people. In the
                        event of manmade disasters or natural ones, individuals
                        are always the first responders. Be it the next door
                        neighbor or people on the other side of the planet, the
                        heart fervently desires to help. However, more often
                        than not, the funds or material provided do not reach
                        the needy, thereby creating uncertainty. DoAram ensures
                        individuals the ease of tracking funds, receipts, and
                        ethical use of their donations.
                      </p>
                      <p className="description"></p>
                      <br />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Nutshell End --> */}

      {/* <!-- CorporateSolution Start --> */}
      <div className="container mt-5">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 mb-3">
            <span className=" txt-warning">Corporate solutions</span> in one
            platform
          </h1>
        </div>
        <div className="col-md-12">
          <div id=" row">
            <div className=" col-md-12  wow fadeInUp" data-wow-delay="0.1s">
              <div className="row">
                <div className="post-slide2 col-md-3">
                  <div className="post-img">
                    <Link to="/">
                      <img
                        src="imges/blog_4.jpg"
                        alt=""
                        className="img-thumbnail rounded-circle"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">
                      <Link to="/">Grant Management</Link>
                    </h3>
                    <p className="post-description">
                      Managing Grants are made easy with DoAram. We process and
                      oversee funds with dexterous software. From opting the
                      right NGO, to the grant closeout, we serve your purpose
                      with dedication and diligence.
                    </p>
                    <Link to="/corporate" className="read-more">
                      read more
                    </Link>
                  </div>
                </div>
                <div className="post-slide2  col-md-3">
                  <div className="post-img">
                    <Link to="/">
                      <img
                        src="imges/blog_3.jpg"
                        alt=""
                        className="img-thumbnail rounded-circle"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">
                      <Link to="/">Monitoring</Link>
                    </h3>
                    <p className="post-description">
                      Irregularities and misuse from the original purpose are
                      frowned upon and prevented by stringent tracking of funds.
                      We keep track of the entire process and ensure that the
                      funds reach the right hands.
                    </p>
                    <Link to="/corporate" className="read-more">
                      read more
                    </Link>
                  </div>
                </div>
                <div className="post-slide2  col-md-3">
                  <div className="post-img">
                    <Link to="/">
                      <img
                        src="imges/blog_1.jpg"
                        alt=""
                        className="img-thumbnail rounded-circle"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">
                      <Link to="/">Impact Measurement</Link>
                    </h3>
                    <p className="post-description">
                      Efforts without lasting impressions are fruitless. The
                      fostered impacts speak of your generosity. The outcomes of
                      all your endeavors are prioritized and measured by our
                      team of experts.{" "}
                    </p>
                    <Link to="/corporate" className="read-more">
                      read more
                    </Link>
                  </div>
                </div>
                <div className="post-slide2  col-md-3">
                  <div className="post-img">
                    <Link to="/">
                      <img
                        src="imges/blog_2.jpg"
                        alt=""
                        className="img-thumbnail rounded-circle"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">
                      <Link to="/">Employee Volunteering</Link>
                    </h3>
                    <p className="post-description">
                      CSR not only provides motivation for employees but also
                      strengthens the entire community on a larger scale.
                      Volunteers for charities, workshops and other noble causes
                      can enroll in DoAram.
                    </p>
                    <Link to="/corporate" className="read-more">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CorporateSolution End --> */}

      {/* <!-- Partner with doaram --> */}
      <Partner />

      {/* <!-- Part of  doaram --> */}
      <Part />

      {/* <!-- Press and media starts --> */}
      <div className="container-xxl  mt-5">
        <div className="text-center mx-auto wow fadeIn " data-wow-delay="0.1s">
          <h1 className=" mb-3">
            {" "}
            Press & Media
            <Link to="/blog" className="btn btn-warning float-end">
              View All
              <i className="fa fa-arrow-right ms-1"></i>
            </Link>
          </h1>
        </div>
      </div>
      <div
        className="owl-carousel wow fadeIn d-flex justify-content-center"
        id="pressmedia-slider"
        data-wow-delay="0.1s"
      >
        <div className="press-slide">
          <div className="post-img">
            <span className="over-layer"></span>
            <img src="imges/img-1.png" alt="" />
          </div>
          <div className="post-review">
            <h3 className="post-title">
              <Link
                to="https://yourstory.com/2019/12/doaram-new-entrant-e-giving?utm_pageloadtype=scroll"
                target="_blank"
              >
                YOURSTORY
              </Link>
            </h3>
            <span className="post-date">Wednesday 18,December 2019</span>
            <h1 className="post-description txt-warning">
              How DoAram, the new-entrant in e-giving, is setting its goal of
              becoming the world’s largest contribution platform
            </h1>
            <p>
              DoAram provides an aggregated and verified list of NGOs, to enable
              corporates to easily find credible projects and organisations that
              align with their CSR philosophy and also help individuals to raise
              money for contingencies...
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Pressn and media End --> */}

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}

export default About;
