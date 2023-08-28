import React from "react";
function Part() {
  return (
    <>
      {/* // <!-- Part Start --> */}
      <div className="container-fluid bg-yellowgra mt-3 ">
        <div className="row">
          <div className="container">
            <div className="row m-5">
              <div
                className="col-md-6 col-xl-6 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="text-left ">
                  <h1 className="h3 text-white mb-2">
                    Become a part of DoAram
                  </h1>
                  <p className="fw-medium text-white mb-2">
                    Plan - Develop - Uplift
                  </p>
                  <p className="fw-medium text-dark mb-2">
                    Empower your NGO with the Power of Insights!
                  </p>
                  <p className="fw-medium text-dark mb-2">
                    NGOs play a critical part in developing the society,
                    improving communities, and promoting citizen participation.
                    DoAram offers ERP solution that features
                  </p>
                  <button type="button" className="btn btn-secondary">
                    Sign-up Now
                  </button>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-6 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                  <img
                    className="img-fluid"
                    src="imges/corp/became_partner.png"
                    style={{ height: "200px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Part End --> */}
    </>
  );
}
export default Part;
