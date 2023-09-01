import { Link } from "react-router-dom";
import { useState } from "react";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";

// import './ngo.css'

function Listedngo() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <>
      <Header />
      {/* <!-- List Start --> */}
      <h1>New content will be updated soon</h1>
      {/* <!-- list End --> */}
      <Part />
      <Footer />
    </>
  );
}

export default Listedngo;
