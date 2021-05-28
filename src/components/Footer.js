import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-modern context-dark">
        <div
          className="google-map-container"
          data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
          data-icon="images/gmap_marker-2.png"
          data-icon-active="images/gmap_marker-2.png"
          data-zoom={5}
          data-styles="[]"
        >
          <div className="google-map" />
          <ul className="google-map-markers">
            <li
              data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
              data-description="9870 St Vincent Place, Glasgow"
            />
          </ul>
        </div>
        <div className="container">
          <div className="row justify-content-lg-end">
            <div className="col-lg-7">
              <div className="section-md">
                <div className="row row-50">
                  <div className="col-md-3 col-xl-2 order-lg-2 text-lg-center wow-outer">
                    <div className="wow slideInLeft" />
                    <h5 className="footer-title">share</h5>
                    <ul className="social-list">
                      <li>
                        <a
                          className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-facebook"
                          href="#"
                        />
                      </li>
                      <li>
                        <a
                          className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-instagram"
                          href="#"
                        />
                      </li>
                      <li>
                        <a
                          className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-twitter"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 col-xl-10 order-lg-1 wow-outer">
                    <div className="wow slideInRight">
                      <h5 className="footer-title">Our Location</h5>
                      <p className="big">
                        51 Francis Street, Darlinghurst NSW 2010, United States
                        <br />
                        <span className="text-primary">Ph.</span>
                        <a href="tel:#">+2545-8546-444555</a>
                      </p>
                      {}
                      <form
                        className="rd-mailform text-left rd-form-inline"
                        data-form-output="form-output-global"
                        data-form-type="contact"
                        method="post"
                        action="bat/rd-mailform.php"
                      >
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="subscribe-email"
                          >
                            E-mail
                          </label>
                          <input
                            className="form-input"
                            id="subscribe-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                        </div>
                        <div className="form-button group-sm text-center text-lg-left">
                          <button
                            className="button button-lg button-gradient"
                            type="submit"
                          >
                            subscribe
                          </button>
                        </div>
                      </form>
                      <p className="rights">
                        <span>© </span>
                        <span className="copyright-year" />
                        <span> </span>
                        <span>Eventy</span>
                        <span>. All Rights Reserved.</span>
                        <span> </span>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
