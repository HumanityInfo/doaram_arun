import React from "react";
import NGO_Layout from "../shared/NGO_Layout";

function Corp_NGO(props) {
  return (
   
    <>
      <NGO_Layout type={props.type}>
      <div className="content-wrapper fontfamilynca">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">New Corp NGO Will be uploaded Soon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      </NGO_Layout>
    </>
  );
}

export default Corp_NGO;
