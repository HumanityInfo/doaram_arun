import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { useRef, useEffect } from "react";

import AppRoute from "../src/doaram_ngo/utils/AppRoute";
import ScrollReveal from "../src/doaram_ngo/utils/ScrollReveal";
import ReactGA from "react-ga";

import Home from "./doaram_web/home/home.jsx";
import About from "./doaram_web/about/about.jsx";
import Corporate from "./doaram_web/corporatesolutions/corporatesolution.jsx";
import Individuals from "./doaram_web/individuals/individuals.jsx";
import Contact from "./doaram_web/contact/contact.jsx";
import Blog from "./doaram_web/resources/blog.jsx";
import FAQ from "./doaram_web/resources/faq.jsx";
import Insight from "./doaram_web/ngo/insight.jsx";
import Registeredngo from "./doaram_web/ngo/registeredngo.jsx";
import Listedngo from "./doaram_web/ngo/listedngo.jsx";
import Policy from "./doaram_web/shared/policy&terms/policy.jsx";
import Terms from "./doaram_web/shared/policy&terms/terms.jsx";
import BlogDetails from "./doaram_web/resources/blogdetails.jsx";
import ScrollToTop from "./doaram_web/scrolltotop.jsx";

//Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/doaram_ngo/assets/theme/adminlte.min.css";

import NGO_Login from "./doaram_ngo/components/ngo/NGO_Login";
import Corp_Login from "./doaram_ngo/components/corp/Corp_Login";
import Admin_Login from "./doaram_ngo/components/admin/Admin_Login";
import NGO_Layout from "./doaram_ngo/components/shared/NGO_Layout";
import Signup from "./doaram_ngo/components/ngo/Signup";
import Corp_Signup from "./doaram_ngo/components/corp/Corp_Signup";
import SignUpSelector from "./doaram_ngo/components/ngo/SignUpSelector";
import Corp_SignUpSelector from "./doaram_ngo/components/corp/Corp_SignUpSelector";
import NGO_Cause from "./doaram_ngo/components/ngo/NGO_Cause";
import CauseDetails from "./doaram_ngo/components/ngo/CauseDetails";
import NGO_Profile from "./doaram_ngo/components/ngo/NGO_Profile";
import NGO_Plan from "./doaram_ngo/components/ngo/NGO_Plan";
import Error404 from "./doaram_ngo/components/ngo/Error404";
import ForgotPassword from "./doaram_ngo/components/shared/ForgotPassword";
import Website from "./doaram_ngo/components/ngo/website";
import Corp_NGOs from "./doaram_ngo/components/ngo/Corp_NGOs";
import NGO_CSR_Request from "./doaram_ngo/components/ngo/NGO_CSR_Request";
import Notification from "./doaram_ngo/components/ngo/Notification";
import TermsConditions from "./doaram_ngo/components/ngo/TermsConditions";
import Admin_Cause from "./doaram_ngo/components/admin/Admin_Cause";
import Admin_Profile from "./doaram_ngo/components/admin/Admin_Profile";
import Admin_NGO from "./doaram_ngo/components/admin/Admin_NGO";
import Corp_NGO from "./doaram_ngo/components/corp/Corp_NGO";
import Corp_Profile from "./doaram_ngo/components/corp/Corp_Profile";
// import Dashboard from "./doaram_ngo/components/shared/Dashboard";
import NGO_Dashboard from "./doaram_ngo/components/ngo/NGO_Dashboard";
import Corp_Dashboard from "./doaram_ngo/components/corp/Corp_Dashboard";
import Admin_Dashboard from "./doaram_ngo/components/admin/Admin_Dashboard";

function App() {
  // Initialize Google Analytics
  ReactGA.initialize(process.env.REACT_APP_GA_CODE);
  // const $ = window.$;

  const User_Types = {
    NGO: "NGO User",
    CORP: "Corp User",
    ADMIN: "Admin User",
  };
  // const CurrentUser_TYPE = User_Types.ADMIN;
  // const CurrentUser_TYPE = User_Types.NGO;
  const CurrentUser_TYPE = User_Types.CORP;

  function NGOElement({ children }) {
    if (CurrentUser_TYPE === User_Types.NGO) {
      return <>{children} </>;
    } else {
      return (
        <>
          <Error404 />
        </>
      );
    }
  }

  function CorpElement({ children }) {
    if (CurrentUser_TYPE === User_Types.CORP) {
      return <>{children} </>;
    } else {
      return (
        <>
          <Error404 />
        </>
      );
    }
  }

  function AdminElement({ children }) {
    if (CurrentUser_TYPE === User_Types.ADMIN) {
      return <>{children} </>;
    } else {
      return (
        <>
          <Error404 />
        </>
      );
    }
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* ...............................Public Routes.................. */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/listedngo" element={<Listedngo />} />
        <Route path="/registeredngo" element={<Registeredngo />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        {/* ----------------------NGO---------------------------- */}
        <Route path="/ngosignin" element={<NGO_Login />} />
        <Route path="/corpsignin" element={<Corp_Login />} />
        <Route path="/adminsignin" element={<Admin_Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/corpsignup" element={<Corp_Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUpSelector" element={<SignUpSelector />} />
        <Route path="/corpSignUpSelector" element={<Corp_SignUpSelector />} />

        {/* ...............................Protected Routes.................. */}
        {/* <Route path="/dashboard" element={<NGO_Layout />} /> */}

        <Route
          path="/ngoDashboard"
          element={
            <NGOElement>
              <NGO_Dashboard type={CurrentUser_TYPE} />
            </NGOElement>
          }
        />
        <Route
          path="/corpDashboard"
          element={
            <CorpElement>
              <Corp_Dashboard type={CurrentUser_TYPE} />
            </CorpElement>
          }
        />
        <Route
          path="/adminDashboard"
          element={
            <AdminElement>
              <Admin_Dashboard type={CurrentUser_TYPE} />
            </AdminElement>
          }
        />
        {/* <Route
          path="/Dashboard"
          element={<Dashboard type={CurrentUser_TYPE} />}
        /> */}

        <Route
          path="/NGO_Cause"
          element={
            <NGOElement>
              <NGO_Cause type={CurrentUser_TYPE} />
            </NGOElement>
          }
        />
        <Route
          path="/Corp_NGOs"
          element={
            <NGOElement>
              <Corp_NGOs type={CurrentUser_TYPE} />
            </NGOElement>
          }
        />
        <Route
          path="/CauseDetails"
          element={
            <NGOElement>
              <CauseDetails type={CurrentUser_TYPE} />
            </NGOElement>
          }
        />
        <Route
          path="/NGO_Profile"
          element={
            <NGOElement>
              <NGO_Profile type={CurrentUser_TYPE} />
            </NGOElement>
          }
        />
        <Route
          path="/NGO_CSR_Request"
          element={
            <NGOElement>
              <NGO_CSR_Request type={CurrentUser_TYPE} />
            </NGOElement>
          }
        />
        <Route
          path="/Notification"
          element={<Notification type={CurrentUser_TYPE} />}
        />
        <Route
          path="/NGO_Plan"
          element={<NGO_Plan type={CurrentUser_TYPE} />}
          layout={NGO_Layout}
        />
        <Route path="/website" element={<Website />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        {/* ...............................ADMIN.................. */}
        <Route
          path="/Admin_Cause"
          element={
            <AdminElement>
              <Admin_Cause type={CurrentUser_TYPE} />
            </AdminElement>
          }
        />
        <Route
          path="/Admin_Profile"
          element={
            <AdminElement>
              <Admin_Profile type={CurrentUser_TYPE} />
            </AdminElement>
          }
        />
        <Route
          path="/Admin_NGO"
          element={
            <AdminElement>
              <Admin_NGO type={CurrentUser_TYPE} />
            </AdminElement>
          }
        />
        {/* ...............................CORPS.................. */}
        <Route
          path="/Corp_Profile"
          element={
            <CorpElement>
              <Corp_Profile type={CurrentUser_TYPE} />
            </CorpElement>
          }
        />
        <Route
          path="/Corp_NGO"
          element={
            <CorpElement>
              <Corp_NGO type={CurrentUser_TYPE} />
            </CorpElement>
          }
        />
        {/* ...............................Error.................. */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
