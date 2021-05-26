import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <section id="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="content col-md-8 text-center">
                <h2 className="text-center">
                  Fill out the form and we will call you
                </h2>

                <div className="form mt-5">
                  <form className="row">
                    <div className="col-md-4 input-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="col-md-4 input-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                      />
                    </div>

                    <div className="col-md-4 input-form">
                      <button type="submit" className="form-control">
                        Сall back{" "}
                        <img
                          src="../assets/imgs/icon/arrow.png"
                          alt=""
                          className="img-fluid"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span>© Classic Family Restaurant</span>
              </div>
              <div className="col-md-4">
                <img src="../assets/imgs/logo.png" alt="logo" />
              </div>
              <div className="col-md-4">
                <span className="float-end">
                  Made with delight by <strong>harmuder</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
