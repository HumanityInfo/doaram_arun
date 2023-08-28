import React from "react";
import { NavLink, Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";

function NGO_Plan(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-8 row">
                <div className="col">
                  <NavLink to="/NGO_Dashboard">
                    <button className="btn btnnca btn-default">
                      <i className="fa fa-arrow-left"></i> Back To Home
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="col-sm-4">
                <ol className="breadcrumb breadcrumbncafloat-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">NGO</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <NavLink to="/NGO_Dashboard">NGO Dashboard</NavLink>
                  </li>
                  <li className="breadcrumb-item active">Upgrade plan</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-sm-9">
                <h4 className="m-0">Upgrade your plan</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable golden">
                  <div className="pricingTable-header">
                    <h3 className="title">FREE PLAN</h3>
                    <div className="price-value">
                      <span className="price-currency">
                        <i className="fa fa-inr"></i>
                      </span>
                      <span className="amount">0</span>
                      <span className="duraton">per month</span>
                    </div>
                  </div>
                  <ul className="pricing-content">
                    <li className="category">Get Listed</li>
                    <li className="category">Get a Free Web page</li>
                    <li className="category disable">
                      <strike>Create your own causes</strike>
                    </li>
                    <li className="category disable">
                      <strike>Access to DoAram's web platform</strike>
                    </li>
                    <li className="category disable">
                      <strike>
                        Send direct requests to Corporates for CSR donations
                      </strike>
                    </li>
                    <li className="category disable">
                      <strike>Get DoAram certification</strike>
                    </li>
                  </ul>
                  <div className="">
                    <span className="alert alert-success btn-sm">Active</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="pricingTable pink">
                  <div className="pricingTable-header">
                    <h3 className="title">SEMI - ADVANCED</h3>
                    <div className="price-value">
                      <span className="price-currency">
                        <i className="fa fa-inr"></i>
                      </span>
                      <span className="amount">800</span>
                      <span className="duraton">per month</span>
                    </div>
                  </div>
                  <ul className="pricing-content">
                    <li className="category">Get Listed</li>
                    <li className="category">Get a Free Web page</li>
                    <li className="category">Create your own causes</li>
                    <li className="category">
                      Access to DoAram's web platform
                    </li>
                    <li className="category disable">
                      <strike>
                        Send direct requests to Corporates for CSR donations
                      </strike>
                    </li>
                    <li className="category disable">
                      <strike>Get DoAram certification</strike>
                    </li>
                  </ul>
                  <div className="">
                    <Link to="#" className="btn btnnca btn-gold btn-sm">
                      Proceed to payment
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="pricingTable blue">
                  <div className="pricingTable-header">
                    <h3 className="title">ADVANCED</h3>
                    <div className="price-value">
                      <span className="price-currency">
                        <i className="fa fa-inr"></i>
                      </span>
                      <span className="amount">1600</span>
                      <span className="duraton">per month</span>
                    </div>
                  </div>
                  <ul className="pricing-content">
                    <li className="category">Get Listed</li>
                    <li className="category">Get a Free Web page</li>
                    <li className="category">Create your own causes</li>
                    <li className="category">
                      Access to DoAram's web platform
                    </li>
                    <li className="category">
                      Send direct requests to Corporates for CSR donations
                    </li>
                    <li className="category">Get DoAram certification</li>
                  </ul>
                  <div className="">
                    <Link to="#" className="btn btnnca btn-gold btn-sm">
                      Proceed to payment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="control-sidebar control-sidebar-dark">
          <div className="container" style={{ height: "600px !important" }}>
            <div className="row">
              <div className="card cardnca mb-3 control-sidebar-dark">
                <div className="card-body"></div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </NGO_Layout>
  );
}

export default NGO_Plan;
