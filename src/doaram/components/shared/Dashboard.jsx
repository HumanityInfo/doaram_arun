import React from "react";
import NGO_Layout from "../shared/NGO_Layout";
import NGO_Dashboard from "../ngo/NGO_Dashboard";
import Admin_Dashboard from "../admin/Admin_Dashboard";
import Corp_Dashboard from "../corp/Corp_Dashboard";

function Dashboard(props) {
  return (
    <>
      {props.type === "NGO User" ? <NGO_Dashboard type={props.type} /> : null}
      {props.type === "Admin User" ? (
        <Admin_Dashboard type={props.type} />
      ) : null}
      {props.type === "Corp User" ? <Corp_Dashboard type={props.type} /> : null}
    </>
  );
}

export default Dashboard;
