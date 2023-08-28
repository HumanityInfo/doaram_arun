import React from "react";
import NGO_Layout from "../shared/NGO_Layout";

function NGO_Modal() {
  return (
    <div>
      <div className="modal fade fontfamilynca" id="signupsubmitdiv">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("./../../assets/icons/check-icon.png")}
                  alt="check-icon"
                />
              </div>
              <h4 className="modal-title text-center" id="gridSystemModalLabel">
                Profile Created
              </h4>
              <div
                id="alertmsg"
                className="text-dark d-flex justify-content-center font12 pt-3"
                style={{ display: "inline-block" }}
              ></div>

              <div className="modal-footer d-flex justify-content-center text-center">
                <button type="button" className="btn btnnca btn-success btn-sm">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabindex="-1" id="adminCausesVerify">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6 className="modal-title text-center" id="gridSystemModalLabel">
                Verifiy cause?
              </h6>
              <div className="d-flex justify-content-center">
                <img src="icons/check-icon.png" alt="check-icon" />
              </div>
              <div className="d-flex justify-content-center">
                <label for="exampleFormControlTextarea5" className="form-label1">
                  Comments
                </label>
              </div>

              <div className="mt-1 d-flex justify-content-center">
                <label
                  for="exampleFormControlTextarea5"
                  className="form-label1"
                ></label>
                <br />
                <textarea
                  className="form-control fst-italic"
                  id="exampleFormControlTextarea5"
                  rows="3"
                  placeholder="Start Typing..."
                ></textarea>
              </div>
              <div className="d-flex justify-content-end text-center mt-2">
                <button type="button" className="btn btnnca btn-gold btn-sm px-3 py-1">
                  YES!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="causesubmitdiv">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body ">
              <div className="d-flex justify-content-center">
                <img
                  src={require("./../../assets/icons/causesubmit.png")}
                  alt="check-icon"
                />
              </div>
              <h4 className="modal-title text-center" id="gridSystemModalLabel">
                State your reason for updating the Cause Parameters
              </h4>
              <div
                id="alertmsg"
                className="text-dark text-center font12 pt-3"
                style={{ display: "inline-block" }}
              >
                <div className="mb-3 row">
                  <label for="reason" className="col-sm-2 col-form-label">
                    Reason
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="reason"
                      placeholder="Enter your Reason"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="reason" className="col-sm-2 col-form-label">
                    Upload
                  </label>
                  <div className="col-sm-10">
                    <span className="input-group-btn">
                      <div className="btn btnnca btn-default">
                        <input
                          type="text"
                          className="form-control"
                          id="reason"
                          placeholder="Upload your file"
                        />
                        <i className="fa fa-upload themeCol-pink"></i>
                      </div>
                      <div className="btn btnnca btn-default">
                        <i className="fa fa-trash themeCol-pink"></i>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center text-center">
              <button type="button" className="btn btnnca btn-green btn-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NGO_Modal;
