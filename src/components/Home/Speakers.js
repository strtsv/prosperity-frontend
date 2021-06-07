import React from "react";

import i1 from "../../assets/images/team-modern-1-375x290.jpg";
import i2 from "../../assets/images/team-modern-2-375x290.jpg";
import i3 from "../../assets/images/team-modern-3-375x290.jpg";
import i4 from "../../assets/images/team-modern-4-375x290.jpg";
import i5 from "../../assets/images/team-modern-5-375x290.jpg";
import i6 from "../../assets/images/team-modern-no-img-375x290.png";

class Speakers extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-700 bg-decorate">
        <div className="container">
          <div className="row row-30 align-items-lg-end">
            <div className="col-lg-4 order-lg-2 text-lg-right wow-outer">
              <div className="wow slideInRight">
                <h3 className="title-decorate">Speakers </h3>
              </div>
            </div>
            <div className="col-lg-8 order-lg-1 wow-outer">
              <div className="wow slideInLeft">
                <p className="text-opacity-80">
                  Our event gathers over 50 speakers. They include international
                  company owners and young entrepreneurs that revolutionized the
                  way of doing business. Here are some of them.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-30">
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-modern">
                <div className="team-modern-figure">
                  <img src={i1} alt width={375} height={290} />
                  <ul className="team-modern-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-modern-caption">
                  <h4>
                    <a className="team-name" href="speaker-page.html">
                      John Clark
                    </a>
                  </h4>
                  <p>CEO, iStep Ltd.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-modern">
                <div className="team-modern-figure">
                  <img src={i2} alt width={375} height={290} />
                  <ul className="team-modern-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-modern-caption">
                  <h4>
                    <a className="team-name" href="speaker-page.html">
                      Helen Williams
                    </a>
                  </h4>
                  <p>CFO, Mountaincast</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-modern">
                <div className="team-modern-figure">
                  <img src={i3} alt width={375} height={290} />
                  <ul className="team-modern-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-modern-caption">
                  <h4>
                    <a className="team-name" href="speaker-page.html">
                      Peter McMillan
                    </a>
                  </h4>
                  <p>managing Director, LTP Group</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-modern">
                <div className="team-modern-figure">
                  <img src={i4} alt width={375} height={290} />
                  <ul className="team-modern-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-modern-caption">
                  <h4>
                    <a className="team-name" href="speaker-page.html">
                      Jack Peterson
                    </a>
                  </h4>
                  <p>CTO, Wilson’s Tech</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-modern">
                <div className="team-modern-figure">
                  <img src={i5} alt width={375} height={290} />
                  <ul className="team-modern-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-modern-caption">
                  <h4>
                    <a className="team-name" href="speaker-page.html">
                      Jane Smith
                    </a>
                  </h4>
                  <p>Head of Marketing, Jcole co.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-modern team-modern-no-img">
                <div className="team-modern-figure">
                  <img src={i6} alt width={375} height={290} />
                  <ul className="team-modern-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-modern-caption">
                  <h4>
                    <a className="team-name" href="speaker-page.html">
                      Sam Anderson
                    </a>
                  </h4>
                  <p>Co-Founder, XFire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Speakers;
