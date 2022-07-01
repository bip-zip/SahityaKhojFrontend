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
            <div className="col-md-9 p-2 mb-3 pe-0 ps-2 mx-0">
              <div className="p-3 bg-white shadow-sm pt-4" style={{ paddingTop: "15em" }}>
                <div className="px-2">
                  {/* first */}
                  <p className="p-2 h2 mb-3">Get your help here </p>
                  <div className="installation" id="register">
                    <h5 className="text text-dark px-2 mb-3">Register</h5>
                    <div className="bg-light p-3">
                    <p className="text text-secondary px-2">
                     <ul>
                      <li className="mb-1"> Go to <Link to ='/register'> Register page</Link></li>
                      <li className="mb-1"> Enter <strong>Penname, Email, Password </strong> and <strong>Confirm password</strong>. <br/><small>Make sure that you provide valid email.</small></li>
                      <li className="mb-1">An OTP will be sent to your email.</li>
                      <li className="mb-1">Enter the correct OTP.</li>
                      <li className="mb-1">After the email confirmation, you'll be redirected to Login Page.</li>
                     </ul>
                     
                    </p>
                    </div>
                    
                  </div>
                  {/* second */}
                  <div className="example mt-5" id="forget-password" style={{paddingTop:"4.95rem"}}>
                    <h5 className="text text-dark px-2 mb-3">Forget Password?</h5>
                    <div className="bg-light p-3">
                    <p className="text text-secondary px-2">
                     <ul>
                      <li className="mb-1"> Go to <Link to ='/login'> Login page</Link></li>
                      <li className="mb-1"> Click on <Link to ='/forget-password'> Forget Password</Link> </li>
                      <li className="mb-1">Enter the email, you used when registering.</li>
                      <li className="mb-1">A password reset link will be sent to your email.</li>
                      <li className="mb-1">Go to your email and follow the link.</li>
                      <li className="mb-1">You'll be redirected to new password page.</li>
                      <li className="mb-1">After you complete setting up, you'll be redirected to login page.</li>
                      <small className="text-info">Note: You'll get your <strong>penname</strong> in toast if you've forgotten it too.</small>
                     </ul>
                     
                    </p>
                    </div>
                  </div>
                  {/* third */}
                  <div className="example1 mt-4 " id="requestWriter" style={{paddingTop:"4.95rem"}}>
                    <h5 className="text text-dark px-2 mb-3">Request Writer</h5>
                    <div className="bg-light p-3">
                    <p className="text text-secondary px-2">
                     <ul>
                      <li className="mb-1">Register an account by following above <a href="#register">Registration tips</a>.</li>
                      <li className="mb-1">After successful registration, login into the application.</li>
                      <li className="mb-1">On profile icon, to the right of navbar you'll get <strong>Request Writer</strong> link.</li>
                      <li className="mb-1">Provide the required information and click on Request.</li>
                      <li className="mb-1">After the confirmation, you'll get an email.</li>
                      <small>Note: Confirmation can take upto 24 hours of request submission.</small>
                      <li className="mb-1">Then you'll able to login as a writer.</li>
                     </ul>
                     
                    </p>
                    </div>
                  </div>
                  {/* fourth */}
                  
                  {/* fifth */}
                  <div className="example2 mb-4" id="registerPublication" style={{paddingTop:"4.95rem"}}>
                    <h5 className="text text-dark px-2 mb-3">
                      Register Publication
                    </h5>
                    <div className="bg-light p-3">
                    <p className="text text-secondary px-2">
                     <ul>
                      <li className="mb-1"> Go to <Link to ='/publication-request'> Publication Request page</Link></li>
                      <li className="mb-1"> Enter <strong>Publication Name, Email, Contact, Address, PAN/VAT No. </strong> and <strong>Company Registar Certificate</strong>. <br/><small></small></li>
                      <li className="mb-1">After the confirmation, you'll get an email.</li>
                      <small>Note: Confirmation can take upto 24 hours of request submission. You'll get your penname and password on your email.</small>
                      <li className="mb-1">Then you'll able to login as a publication.</li>
                      <small>Note: Review can take upto 24 hours of request submission.</small>

                      
                     </ul>
                     
                    </p>
                    </div>
                  </div>
                  {/* sixth */}
                  <div className="example2 mb-4" id="requestAds" style={{paddingTop:"4.95rem"}}>
                    <h5 className="text text-dark px-2 mb-3">Request Ads</h5>
                    <div className="bg-light p-3">
                    <p className="text text-secondary px-2">
                     <ul>
                      <li className="mb-1"> Login to your account.</li>
                      <li className="mb-1">Go to <Link to='/request-ads'>Request Ads</Link></li>
                      <li className="mb-1"> Enter the required details. Take a sample ads preview on your right side.</li>
                      <li className="mb-1">After the completion click on Save.</li>
                      <li className="mb-1">The ad goes under review. After the confirmation it'll be visible.</li>
            
                     
                     </ul>
                     
                    </p>
                    </div>
                  </div>
              
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
