import React from "react";
import { Link } from "react-router-dom";

function Question() {
  return (
    <>
      {/* <!-- Question Start --> */}
      <div className="container-xxl py-5 webbody">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fw-web txt-warning mb-2">
                Frequently Asked Questions
              </h1>
              <div className="row pt-2">
                <div className="col-sm-6">
                  <div className="d-flex align-items-left">
                    <Link to="/faq">
                      <button type="button" className="btn btn-warning">
                        Learn More
                        <i className="fa fa-arrow-right text-white ms-1"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <img className="img-fluid" src="imges/FAQImage.png" alt="FAQ" />
            </div>
            <div className="col-lg-6">
              <div className="row align-item-center h-100">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="general-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#general"
                        type="button"
                        role="tab"
                        aria-controls="general"
                        aria-selected="true"
                      >
                        General
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="ngo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#ngo"
                        type="button"
                        role="tab"
                        aria-controls="ngo"
                        aria-selected="false"
                      >
                        NGO
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="corporate-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#corporate"
                        type="button"
                        role="tab"
                        aria-controls="corporate"
                        aria-selected="false"
                      >
                        Corporate
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="individual-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#individual"
                        type="button"
                        role="tab"
                        aria-controls="individual"
                        aria-selected="false"
                      >
                        Individual
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="general"
                      role="tabpanel"
                      aria-labelledby="general-tab"
                      tabindex="0"
                    >
                      <div className="accordion" id="genaccordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header button" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Who can create a cause?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              Anybody above the age of 18 can create a cause.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How can I contribute to a cause?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              To make a contribution for a cause, click the
                              option "Contribute" in the home page and choose
                              "Cause" which navigates you to the cause page
                              where you can choose the cause you wish to
                              contribute.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              What is the minimum I can contribute to a cause?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              The minimum contribution to a cause is Rs.200. You
                              can also choose from the default amount mentioned
                              or add a denomination of your own.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Do I need to register to make a contribution?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              No. It's not mandatory. However, we request you to
                              provide us your contact number and email address
                              in order to send you the donation receipt and a
                              note of appreciation.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Can I make a contribution anonymously?
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, you can if you wish to. Choose the option
                              "Contribute Anonymously" you will be shown as an
                              Anonymous donor. However, DoAram, the payment
                              gateway, and the NGO you choose will know your
                              identity in order to maintain compliance with
                              Indian laws.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              Will I get an 80G Tax Exemption??
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, 80G Tax Exemption receipt will be given to
                              you from the NGO that you chose to contribute,
                              provided your PAN details is shared to the NGO.
                              This is issued only to Indian citizens.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              What payment methods are accepted?
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              There are various methods to choose from, such as:
                              <ul>
                                <li>Credit Cards</li>
                                <li>Debit Cards</li>
                                <li>Net Banking</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              What do I do if my transaction fails?
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#genaccordionExample"
                          >
                            <div className="accordion-body">
                              If the amount is not deducted, please try again.
                              In case, if the same problem is repeated a couple
                              of times, kindly take a screenshot and email it to
                              us at, info@doaram.com. We will get back to you
                              within 24 hours.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ngo"
                      role="tabpanel"
                      aria-labelledby="ngo-tab"
                      tabindex="0"
                    >
                      <div className="accordion" id="ngoaccordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              How can NGOs raise funds on DoAram?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              An NGO has to go through a due diligence process
                              and submit essential information and documents in
                              order to raise funds in our platform. We take
                              around 1-2 weeks from the period of declaration to
                              carefully screen the provided documents and we
                              will contact you for more information or
                              clarifications if required. For more details,
                              please refer to NGO Registration process page.
                              <br />
                              DoAram, sends a contract of endorsement with terms
                              and conditions for the execution once the approval
                              criteria are met by an NGO. The certified NGO can
                              create a cause and start raising funds on{" "}
                              <Link to="www.doaram.com">www.doaram.com</Link>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              What documents do the NGOs need to submit for due
                              diligence?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              An NGO must share the following documents
                              <ul>
                                <li>Incorporation Document</li>
                                <li>PAN Card Copy</li>
                                <li>80G Registration Certificate</li>
                                <li>12A Registration Certificate</li>
                                <li>Bank Account Information</li>
                              </ul>
                              For more information, please refer to our NGO
                              Registration process page.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Does an NGO need 80G tax exemption permission to
                              raise funds on DoAram? Do you consider exceptional
                              cases?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, to raise funds on DoAram, an NGO must have
                              80G tax exemption certificate. No, we do not make
                              any exceptions.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Does an NGO need Foreign Contributions Regulation
                              Act (FCRA) certificate to raise funds on DoAram
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              No, you don't need FCRA certificate to raise funds
                              from Indian donors on DoAram. However, as per
                              Indian law, NGOs cannot raise funds from
                              non-Indian / foreign donors if they don’t have
                              FCRA certificate.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              How to create a cause?
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              Fundraising becomes easy following these steps
                              <ul>
                                <li>Sign up or log into our website.</li>
                                <li>
                                  Clicking "Create Cause" in the home page
                                  navigates you to a cause page where you can
                                  fill in the required details and click
                                  "Start".
                                </li>
                                <li>
                                  You can customize your page of your preference
                                  with necessary details to make a difference.
                                  Videos and pictures are mandatory, make sure
                                  you don’t miss them.
                                </li>
                                <li>Submit your cause for review.</li>
                                <li>
                                  Once your cause is approved, it goes live. The
                                  real endeavour begins here!
                                </li>
                                <li>
                                  Now the trick is to convert supporters to
                                  donors and collect contributions! And
                                  hopefully your campaign will reach its goal
                                  amount in no time.
                                </li>
                                <li>
                                  Spread the word by sharing with family and
                                  friends on Facebook, Twitter, WhatsApp,
                                  LinkedIn, and email.We help you spread the
                                  word too.
                                </li>
                                <li>
                                  Fundraising is so easy and a lot of fun.
                                </li>
                              </ul>
                              Kindly refer How it Works for detailed
                              instructions.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              Do I have to pay a fee for creating a cause on
                              DoAram?
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, we do charge a nominal fee to create a Cause
                              in our platform. For more details, please visit
                              our Pricing Plan page.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              Will our NGO receive 100% of donations made
                              through DoAram?
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              DoAram is a social enterprise whose primary
                              purpose is to empower people to do good. To have
                              long lasting impact, we want to be sustainable;
                              hence we retain a small percentage of the funds
                              raised per campaign, mainly to cover a fraction of
                              our operating costs. Just to give you an idea,
                              accepting online payments requires third-party
                              payment processors and taxes that typically add up
                              to 9-10% per transaction. For more details, please
                              visit our Pricing Plan page.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              Can I run more than one campaign at a time on
                              DoAram?
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              No. You can't launch multiple campaigns with us.
                              As every campaign, typically requires a certain
                              amount of time commitment to make it successful.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              How long can I run my campaign for?
                            </button>
                          </h2>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              You can run a fundraising campaign for a minimum
                              for 10 days and maximum of 90 days.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTen"
                              aria-expanded="false"
                              aria-controls="collapseTen"
                            >
                              Does DoAram provide receipt to claim tax exemption
                              under 80G towards donation?
                            </button>
                          </h2>
                          <div
                            id="collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTen"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, the receipt to claim the tax exemption will
                              be provided to the Indian donors indispensably.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEleven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEleven"
                              aria-expanded="false"
                              aria-controls="collapseEleven"
                            >
                              How does an NGO know when a donor makes a
                              donation?
                            </button>
                          </h2>
                          <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              Soon after a donor makes a donation, we notify you
                              immediately with the details of the transaction
                              via email.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwelve">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwelve"
                              aria-expanded="false"
                              aria-controls="collapseTwelve"
                            >
                              When do I receive the donations?
                            </button>
                          </h2>
                          <div
                            id="collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwelve"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              For the donations made to an NGO, the donated
                              amount will be transferred within 7 working days.
                              <br />
                              For a cause, the donated amount will be
                              transferred to your bank account within 7 working
                              days.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThirteen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThirteen"
                              aria-expanded="false"
                              aria-controls="collapseThirteen"
                            >
                              Is there a limit on how much money I can request?
                            </button>
                          </h2>
                          <div
                            id="collapseThirteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThirteen"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              No. But we recommend you to set realistic targets.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFrtheen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFrtheen"
                              aria-expanded="false"
                              aria-controls="collapseFrtheen"
                            >
                              What happens if a project receives more funding
                              than it requested?
                            </button>
                          </h2>
                          <div
                            id="collapseFrtheen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFrtheen"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              You get to keep it all. Similarly, if you do not
                              meet the target, there is no fine or penalty.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingfvteen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsefvteen"
                              aria-expanded="false"
                              aria-controls="collapsefvteen"
                            >
                              Will DoAram assist me?
                            </button>
                          </h2>
                          <div
                            id="collapsefvteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingfvteen"
                            data-bs-parent="#ngoaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, we are happy to help:
                              <ul>
                                <li>
                                  Guiding you to create an appealing campaign
                                </li>
                                <li>Giving you tips on how to promote it</li>
                                <li>
                                  Helping your supporters by offering them
                                  multiple payment options
                                </li>
                                <li>
                                  Sending you notifications with details each
                                  time a supporter gives to your campaign
                                </li>
                                <li>
                                  Be available to you via email
                                  (info@doaram.com) to answer all your queries.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="corporate"
                      role="tabpanel"
                      aria-labelledby="corporate-tab"
                      tabindex="0"
                    >
                      <div className="accordion" id="corpaccordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Can a corporate create a cause?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#corpaccordionExample"
                          >
                            <div className="accordion-body">
                              No. A corporate cannot create causes, but may make
                              donations towards campaigns.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Can I make this platform a part of my Corporate
                              Social Responsibility(CSR) program?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#corpaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, Absolutely! DoAram is CSR’s new frontier as
                              CSR is now mandatory in India. It is an easy,
                              effective and an engaging way of leveraging your
                              social image effectively.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Who is responsible for completing the project?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#corpaccordionExample"
                          >
                            <div className="accordion-body">
                              The NGO is responsible for completing the project.
                              They are also supposed to use the funds in an
                              appropriate manner and share feedback report on a
                              timely basis.Kindly visit the DoAram social page
                              of particular NGO to know the status.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="individual"
                      role="tabpanel"
                      aria-labelledby="individual-tab"
                      tabindex="0"
                    >
                      <div
                        className="accordion"
                        id="individualaccordionExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              What can I do?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              Following are the ways you can help:
                              <ul>
                                <li>
                                  <h6 className="txt-warning">
                                    <u>Start a Cause</u>
                                  </h6>
                                  You can start by creating a cause on our
                                  website
                                </li>
                                <li>
                                  <h6 className="txt-warning">
                                    <u>Explore Causes and NGOs</u>
                                  </h6>
                                  You can explore various causes and make a
                                  donation
                                </li>
                                <li>
                                  <h6 className="txt-warning">
                                    <u>Support a cause</u>
                                  </h6>
                                  You can extend your support by sharing the
                                  cause on your social media networks such as
                                  Facebook, Twitter, LinkedIn, and WhatsApp.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How do I register with the site?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              You can either create an account with us or you
                              can login using your existing Facebook or Email
                              accounts. We recommend logging-in through social
                              media like Facebook as it makes it easier for you
                              to spread the word and invite others.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              What is a user name/ID? Can I change it?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              Your username is your email address registered
                              with us. Your registered email address
                              distinguishes you from other members. It’s how we
                              keep a record of your transactions and contact
                              information. Yes, you can change it.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              I forgot my password. What do I do now?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              Go to login page and select "Forgot password" and
                              enter the email ID you used while registering. We
                              will send you a link to your email ID to create a
                              new password.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Why do campaigners have to set a target amount and
                              date?
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              It is necessary for the campaigners to set a
                              target amount and date because it informs your
                              supporters how much money you require to raise for
                              the cause within a designated amount of time.
                              Moreover, setting goal and deadline will help you
                              to measure your success in creating social impact
                              corresponding to your ambition.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              Does my contribution show on the causes page?
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, in order to have a comprehensive transparency
                              on the contribution collected, all contributions
                              made are visible in the fundraiser page. The money
                              contributed along with your name and photograph
                              (if shared) gets displayed. Some donors choose to
                              be shown as anonymous.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              Where will my initial supporters come from?
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              Your initial supporters will come from your own
                              family, your colleagues and friends from social
                              media. Once you have your contacts organized you
                              can approach friends of friends and many others in
                              the social medium.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              How do I know that the Cause owner is not going to
                              run away with my money?
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              The NGOs listed with us go through a stringent
                              process to sustain stability. This constraint
                              brings transparency of their process thus building
                              trust among the donors. Hence a fund raiser has to
                              be honest.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              How long does it take for the funds to reach their
                              intended receiver?
                            </button>
                          </h2>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              After the completion / expiry of the fundraising
                              program, we transfer the funds to the receiver
                              within 7 working days.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTen"
                              aria-expanded="false"
                              aria-controls="collapseTen"
                            >
                              If my initial campaign was not successful can I
                              run another one?
                            </button>
                          </h2>
                          <div
                            id="collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTen"
                            data-bs-parent="#individualaccordionExample"
                          >
                            <div className="accordion-body">
                              Yes, you are welcome to do so. However, we request
                              you to rebound the reasons why your previous
                              campaign wasn’t successful. Apply the key
                              learnings thoughtfully to make your following
                              campaigns a success.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Question End --> */}
    </>
  );
}

export default Question;
