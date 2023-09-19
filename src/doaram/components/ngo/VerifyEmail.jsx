import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink,Link } from "react-router-dom";

const btnStyle={
   
    color: "#fff",
    background: "linear-gradient(275.07deg, #f2bf35 -0.15%, #d69228 100%)", 
    fontSize:"12px",
    boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.04)",
    borderRadius: "5px"
  }


function VerifyEmail() {
   
  const movetohome = () => {
    window.location.href="/";
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-8">
        <div className="card p-5 ml-5 mt-5">
            <div className="">
              <div>
                <div className="d-flex justify-content-center">
                  <img
                    src={require("./../../assets/icons/userverified.png")}
                    alt="check-icon"
                  />  
                </div>
                <div class="text-center font12 text-success fw-bold"> 
                DoAram - Account Verification
                  </div>
                <p className="h6 text-dark  pt-3">
                Congratulations! You have successfully activated your account with Do Aram. 
                Your account will now be verified by our admin team and activated. 
                You will be notified through an email within next 5 business days. Thank you.
                </p>
                <p className="pt-3 h6 text-dark">
                For any questions, reach us at <a href="mailto:contactus@doaram.com">
            contactus@doaram.com</a>
                </p>
              </div>


              <div class="text-center font12 text-success fw-bold pt-3">
              
                    <button class="btn btn-success btn-sm" type="button" onClick={movetohome}>
                      <i class="fa fa-check"></i>&nbsp; Ok
                    </button>
                 
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
