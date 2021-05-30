import React from "react";

import i1 from "../../assets/images/user-1-129x152.jpg";
import i2 from "../../assets/images/home-1-599x376.jpg";

class Eventy extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-6 wow-outer">
              <div className="wow slideInLeft">
                <h3 className="title-decorate title-decorate-left">
                  Welcome to Eventy
                </h3>
                <div className="row row-30">
                  <div className="col-sm-4 col-lg-3">
                    <div className="box-user-classic">
                      <img src={i1} alt width={129} height={152} />
                      <h5>
                        <a href="speaker-page.html">Alice Parker</a>
                      </h5>
                      <p>Founder</p>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <p>
                      Our event is a place where the best minds of the
                      generation meet and discuss the cutting-edge business
                      ideas, issues, and solutions. Join the community of
                      leaders today!{" "}
                    </p>
                    <a
                      className="button button-default-outline button-lg"
                      href="about-us.html"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow-outer">
              <img
                className="wow slideInRight"
                src={i2}
                alt
                width={599}
                height={376}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Eventy;
