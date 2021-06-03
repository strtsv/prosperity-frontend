import React from "react";

import i1 from "../../assets/images/logo-1-270x119.png";
import i2 from "../../assets/images/logo-2-270x119.png";
import i3 from "../../assets/images/logo-3-270x119.png";
import i4 from "../../assets/images/logo-4-270x119.png";
import i5 from "../../assets/images/logo-5-267x119.png";
import i6 from "../../assets/images/logo-6-270x119.png";
import i7 from "../../assets/images/logo-7-270x119.png";
import i8 from "../../assets/images/logo-8-270x119.png";

class Sponsors extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default text-center">
        <div className="container">
          <h3 className="title-decorate title-decorate-center">
            Event Sponsors
          </h3>
          <div className="row row-30">
            <div className="col-sm-6 col-lg-3">
              <a className="box-sponsor wow fadeInUp" href="#">
                <img src={i1} alt width={270} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="0.3s"
              >
                <img src={i2} alt width={270} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="0.6s"
              >
                <img src={i3} alt width={270} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="0.9s"
              >
                <img src={i4} alt width={270} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="1.2s"
              >
                <img src={i5} alt width={267} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="1.5s"
              >
                <img src={i6} alt width={270} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="1.8s"
              >
                <img src={i7} alt width={270} height={119} />
              </a>
            </div>
            <div className="col-sm-6 col-lg-3">
              <a
                className="box-sponsor wow fadeInUp"
                href="#"
                data-wow-delay="2.1s"
              >
                <img src={i8} alt width={270} height={119} />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="wow-outer">
                <div className="wow slideInDown">
                  <a
                    className="button button-lg button-default-outline"
                    href="#"
                  >
                    become a sponsor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsors;
