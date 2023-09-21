import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Part from "../shared/becomepart/part";

function Registeredngo() {
  const [rangeval, setRangeval] = useState(null);
  return (
    <>
      <Header />

      {/* <!-- Facts Start --> */}
      <h1> New content will be updated soon</h1>

      {/* <!-- Facts End --> */}
      <Part />
      <Footer />
    </>
  );
}

export default Registeredngo;
