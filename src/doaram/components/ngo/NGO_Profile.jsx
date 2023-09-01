import React from "react";
import { Link } from "react-router-dom";
import NGO_Layout from "../shared/NGO_Layout";

function NGO_Profile(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Your NGO Profile will be updated soon</h1>
              </div>
              <div className="col-sm-6">
                <div className="nav-link d-flex justify-content-end">
                  <button className="btnnca btn-gold btn-sm ">
                    <i className="fa fa-pencil-square-o"></i> Save NGO Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NGO_Layout>
  );
}

export default NGO_Profile;
