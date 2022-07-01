import React from "react";
import { Link } from "react-router-dom";

function HelpPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="container col-md-11 px-0">
          <div className="row px-0 mx-0">
            <div className="col-md-3 mb-3 ps-0 pe-2 mx-0 mt-2">
              <div
                className="ps-0 pe-2 py-1 bg-white shadow-sm border border-muted mx-0"
                style={{ position: "sticky", top: "6em" }}
              >
                <div className="d-flex justify-content-start align-items-center mb-md-2 mb-sm-3 mb-3">
                  <hr
                    className="bg-primary"
                    style={{ width: "100%", height: 2 }}
                  />
                  <p
                    className="text text-success fw-bold text-center mb-1"
                    style={{ width: "50%" }}
                  >
                       Helps 
                  </p>
                  <hr
                    className="bg-primary"
                    style={{ width: "100%", height: 2 }}
                  />
                </div>
                <div className="hh">
                  <ul className="nav-item">
                    <li className="mb-3 list-unstyled">
                      <a
                        href="#register"
                        className="text-decoration-none text-purple"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <i className="fa fa-question-circle text-secondary me-2" />
                        Register
                      </a>
                    </li>
                    <li className="mb-3 list-unstyled">
                      <a
                        href="#forget-password"
                        className="text-decoration-none text-purple"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <i className="fa fa-question-circle text-secondary me-2" />
                        Forget Password
                      </a>
                    </li>
                    <li className="mb-3 list-unstyled">
                      <a
                        href="#requestWriter"
                        className="text-decoration-none text-purple"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <i className="fa fa-question-circle text-secondary me-2" />
                        Request Writer
                      </a>
                    </li>
                  
                    <li className="mb-3 list-unstyled">
                      <a
                        href="#registerPublication"
                        className="text-decoration-none text-purple"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <i className="fa fa-question-circle text-secondary me-2" />
                        Register publication
                      </a>
                    </li>
                    <li className="mb-3 list-unstyled">
                      <a
                        href="#requestAds"
                        className="text-decoration-none text-purple"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        <i className="fa fa-question-circle text-secondary me-2" />
                        Request Ads
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpPage;
