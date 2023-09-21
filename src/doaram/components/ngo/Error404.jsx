import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="fontfamilynca">
      <div className="">
        <div className="">
          <div className="col-12 text-center">
            <img
              src={require("./../../assets/da_img/logo1.png")}
              alt="DoAram_Logo"
              className="rounded mx-auto d-block mb-4"
            />
            <Link to="/">
              {" "}
              <button className="btnnca-gold btn-sm mb-3">Refresh</button>
            </Link>
            <img
              src={require("./../../assets/da_img/PageNotFound.png")}
              alt="DoAram_PageNotFound"
              className="rounded mx-auto d-block mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
