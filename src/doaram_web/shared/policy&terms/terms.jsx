import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

function Terms() {
  return (
    <>
      <Header />
      <div className="container-fluid g-5 webbody">
        <div className="p-5" style={{background:" #fff",borderradius:"5px"}}>
          <div className="row ">
            <div className=" wow fadeIn" data-wow-delay="0.5s">
              <h3 className="fw-medium txt-warning mb-2">Terms and Conditions</h3>
              <p className="fw-medium text-dark mb-2">
                Use of this site is provided by DoAram Foundation (henceforth
                referred to as DoAram)is subjected to the following Terms and
                Conditions/ Terms of Use as given below.
              </p>

              <ul>
                <li>
                  Your use and access of the website constitutes acceptance of
                  these Terms and Conditions as on date from the first use of
                  the website.
                </li>
                <li>
                  You agree to use the website only for lawful purposes, and in
                  a conduit which does not violate the rights, or restrict, or
                  inhabit the use and enjoyment of the website by any third
                  party.
                </li>
                <li>
                  DoAram reserves the rights to change these Terms and
                  Conditions at any time by posting changes online. Your
                  continued use of the website after changes establishes your
                  acceptance of the new Terms and Conditions modified
                  automatically. You should therefore, review these Terms and
                  Conditions regularly.
                </li>
                <li>
                  DoAram takes no responsibility for the content of external
                  internet websites. Following links to any other websites or
                  pages shall be at your own risk and DoAram shall not be
                  responsible or liable, directly or indirectly, for any damages
                  resulting from the use of such other websites.
                </li>
                <li>
                  All intellectual property in the website and the material or
                  information it contains (including without limitation
                  copyright, designs, database rights and trade marks
                  (registered or unregistered) are and shall remain the property
                  of DoAram or its third party licensors.
                </li>
                <li>
                  Commercial use or publication of all or any item displayed on
                  the site without authorization from DoAram is strictly
                  prohibited. Nothing contained in these Terms and Conditions
                  shall be interpreted as conferring any licence by DoAram to
                  use any item displayed.
                </li>
                <li>
                  Materials in the website may be copied for personal use only
                  on the condition that all copyright notices and source
                  indications are also reproduced, no modifications are made and
                  each relevant item is copied in its entirety. Some materials
                  that have been outsourced have been published on the website
                  with all the necessary permissions from the relevant copyright
                  owners (who are not part of DoAram). All rights are reserved
                  on these materials and permission to copy them must be
                  requested from the individual copyright owners (as indicated
                  within these materials).
                </li>
                <li>
                  Any communication or material that you transmit to, or post
                  on, in any public area of the website including any data,
                  questions, comments, suggestions, or the like, is, and will be
                  treated as, non-confidential and non-proprietary information.
                  DoAram reserves the right to remove any such communication or
                  material from the website at its own discretion.
                </li>
                <li>
                  If there is any conflict between these Terms and Conditions
                  and rules and/or specific terms of use appearing on the
                  Website relating to specific material then the latter shall
                  prevail.
                </li>
                <li>
                  These Terms and Conditions shall be governed and construed in
                  accordance with the laws of India. Any disputes shall be
                  subject to the non-exclusive jurisdiction of the Indian
                  Courts.
                </li>
                <li>
                  If these Terms and Conditions are not accepted in full, the
                  use of the website must be terminated immediately.
                </li>
              </ul>

              <h6 className="fw-medium txt-warning mb-2">Online Payments</h6>
              <p className="fw-medium text-dark mb-2">
                {" "}
                This online payment system is provided by DoAram. DoAram may
                update these terms from time to time and any changes will be
                effective immediately on being set out here. Please ensure you
                are aware of the current terms. The country of domicile for
                DoAram is India.
              </p>

              <p className="fw-medium text-dark mb-2">
                {" "}
                Please read these terms carefully before using the online
                payment facility. Using the online payment facility on this
                website indicates that you accept these terms. If you do not
                accept these terms do not use this facility.
              </p>

              <h6 className="fw-medium txt-warning mb-2">
                {" "}
                All payments are subject to the following conditions:-
              </h6>

              <p className="fw-medium text-dark mb-2">
                {" "}
                The description of services of match making are specific to your
                need, when you log in with your unique password. Normally
                payment is required in advance (i.e. before you commence your
                activity).
              </p>

              <p className="fw-medium text-dark mb-2">
                {" "}
                All Fees quoted are in Indian Rupees. The DoAram reserves the
                right to change the fees at any time.
              </p>

              <ul>
                <li>
                  Your payment will normally reach the DoAram account to which
                  you are making a payment within two working days.
                </li>
                <li>
                  We cannot accept liability for a payment not reaching the
                  correct DoAram account due to you quoting an incorrect account
                  number or incorrect personal details. Neither can we accept
                  liability if payment is refused or declined by the
                  credit/debit card supplier for any reason.
                </li>
                <li>
                  If the card supplier declines payment the DoAram is under no
                  obligation to bring this fact to your attention. You should
                  check with your bank/credit/debit card supplier that payment
                  has been deducted from your account.
                </li>
                <li>
                  In no event will the DoAram be liable for any damages
                  whatsoever arising out of the use, inability to use, or the
                  results of use of this site, any websites linked to this site,
                  or the materials or information contained at any or all such
                  sites, whether based on warranty, contract, tort or any other
                  legal theory and whether or not advised of the possibility of
                  such damages.
                </li>
                <li>
                  Visitors acknowledge that visiting this site is an implicit
                  acceptance of these 'Terms and Conditions' on their part. And
                  also, accepting the terms and conditions means an inherent
                  acceptance of our Disclaimer and Privacy Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- Facts End --> */}

      <Footer />
    </>
  );
}
export default Terms;
