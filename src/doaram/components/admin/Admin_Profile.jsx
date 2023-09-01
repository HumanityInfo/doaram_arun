import React from "react";
import NGO_Layout from "../shared/NGO_Layout";

function Admin_Profile(props) {
  return (
    <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Updated  Admin Profile Cause will be uploaded soon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NGO_Layout>
  );
}

export default Admin_Profile;
