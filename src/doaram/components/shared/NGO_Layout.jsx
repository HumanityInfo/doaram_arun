import React from "react";

import Header from "./Header";
import SideMenu from "./SideMenu";

function NGO_Layout(props) {
  return (
    <>
      <div
        className="hold-transition sidebar-mini layout-fixed fontfamilynca"
        style={{ fontSize: "14px !important" }}
      >
        <div className="wrapper" style={{ fontSize: "15px !important" }}>
          <Header type={props.type} />
          <SideMenu type={props.type} />
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default NGO_Layout;
