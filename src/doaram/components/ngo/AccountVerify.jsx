import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink,Link } from "react-router-dom";

function AccountVerify() {
 
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
                    src={require("./../../assets/icons/email.png")}
                    alt="check-icon"
                  />  
                </div>
                <div class="text-center font12 text-success fw-bold"> 
                  DoAram - E-mail Verification
                  </div>
                <p className="h6 text-dark pt-3">
                Thank you for signing up with Do Aram. 
                We have sent a link to the email address you have provided. 
                Please click on the link to verify and activate your account.
                </p>
                <p className="pt-3 h6 text-dark">
             For any questions, reach us at <a href="mailto:contactus@doaram.com">
            contactus@doaram.com</a>
                </p>
              </div>


              <div class="text-center font12 text-success fw-bold pt-3">
              
                    <button class="btn btn-success btn-sm" type="button" onClick={movetohome}>
                      <i class="fa fa-arrow-left"></i>&nbsp;Back To Home
                    </button>
                  

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountVerify;
