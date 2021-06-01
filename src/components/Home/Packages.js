import React from "react";

class Packages extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-700 bg-decorate bg-decorate-reverse">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="title-decorate title-decorate-center">
                Ticket Packages
              </h3>
            </div>
          </div>
          <div className="row row-50 align-items-lg-center">
            <div className="col-lg-4 wow-outer">
              <div className="wow slideInLeft">
                <div className="box-pricing-modern">
                  <div className="box-pricing-modern-inner">
                    <h4 className="pricing-modern-title">Basic Pass</h4>
                    <div className="pricing-modern-price">
                      <span>$</span>
                      <p>20</p>
                    </div>
                    <ul className="list-marked pricing-modern-list">
                      <li>1-Day Entrance</li>
                      <li>Essential Access</li>
                      <li>1 Guest Ticket</li>
                      <li>1 Workshop</li>
                      <li>Free Coffee Break</li>
                    </ul>
                    <a
                      className="button button-lg button-default-outline"
                      href="#"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow-outer">
              <div className="wow slideInUp">
                <div className="box-pricing-modern box-pricing-selected">
                  <div className="box-pricing-modern-inner">
                    <h4 className="pricing-modern-title">Standard Pass</h4>
                    <div className="pricing-modern-price">
                      <span>$</span>
                      <p>45</p>
                    </div>
                    <ul className="list-marked pricing-modern-list">
                      <li>3-Day Entrance</li>
                      <li>Extended Access</li>
                      <li>3 Guest Tickets</li>
                      <li>3 Workshops</li>
                      <li>Free Lunch & Merch</li>
                    </ul>
                    <a className="button button-lg button-gradient" href="#">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow-outer">
              <div className="wow slideInRight">
                <div className="box-pricing-modern">
                  <div className="box-pricing-modern-inner">
                    <h4 className="pricing-modern-title">Premium Pass</h4>
                    <div className="pricing-modern-price">
                      <span>$</span>
                      <p>98</p>
                    </div>
                    <ul className="list-marked pricing-modern-list">
                      <li>4-Day Entrance</li>
                      <li>Ultimate Access</li>
                      <li>5 Guest Tickets</li>
                      <li>7 Workshops</li>
                      <li>Free Entertainment</li>
                    </ul>
                    <a
                      className="button button-lg button-gradient-secondary"
                      href="#"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Packages;
