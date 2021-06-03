import React from "react";

import i1 from "../../assets/images/user-1-109x109.jpg";
import i2 from "../../assets/images/user-2-109x109.jpg";
import i3 from "../../assets/images/user-1-60x60.jpg";
import i4 from "../../assets/images/user-2-60x60.jpg";
import i5 from "../../assets/images/user-3-60x60.jpg";
import i6 from "../../assets/images/user-3-109x109.jpg";
import i7 from "../../assets/images/user-1-60x60.jpg";
import i8 from "../../assets/images/user-2-60x60.jpg";
import i9 from "../../assets/images/user-3-60x60.jpg";
import i10 from "../../assets/images/user-3-109x109.jpg";
import i11 from "../../assets/images/user-1-109x109.jpg";
import i12 from "../../assets/images/user-2-109x109.jpg";
import i13 from "../../assets/images/user-1-60x60.jpg";
import i14 from "../../assets/images/user-2-60x60.jpg";
import i15 from "../../assets/images/user-3-60x60.jpg";
import i16 from "../../assets/images/user-3-109x109.jpg";
import i17 from "../../assets/images/user-2-109x109.jpg";
import i18 from "../../assets/images/user-3-109x109.jpg";
import i19 from "../../assets/images/user-2-109x109.jpg";

class Shedule extends React.Component {
  render() {
    return (
      <section
        className="section tabs-custom tabs-horizontal tabs-creative"
        id="tabs-1"
      >
        <div className="container container-wide">
          <div className="row">
            <div className="col-lg-4 col-xl-5">
              <div className="tabs-creative-title">
                <h3 className="title-decorate title-decorate-left">
                  Event Schedule{" "}
                </h3>
              </div>
            </div>
            <div className="col-lg-8 col-xl-7">
              <div className="nav-tabs-cteative-wrap">
                <ul className="nav nav-tabs nav-tabs-cteative">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      href="#tabs-1-1"
                      data-toggle="tab"
                    >
                      First Day
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-1-2" data-toggle="tab">
                      Second day
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-1-3" data-toggle="tab">
                      third day
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-1-4" data-toggle="tab">
                      Fourth day
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section-md bg-gray-1">
          <div className="container">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tabs-1-1">
                <div className="event-item-classic wow slideInleft">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i1} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">9:00 am - 11:00 am </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Efficient Business Management Techniques
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">Jane Smith</a>,{" "}
                      <span>JCole Co.</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic wow slideInleft">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i2} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">11:00 am - 1:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        How to Build a Successful Startup in the USA
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">John Clark</a>,{" "}
                      <span>iStep Ltd.</span>
                    </h5>
                    <div className="event-item-classic-text">
                      <p>
                        John Clark, the founder of iStep, one of the most
                        successful American IT companies, will teach you how to
                        plan the work of your startup the right way and get
                        successful.
                      </p>
                      <h5 className="event-item-location">
                        Location: <span className="location">Hall #1</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="event-item-classic wow slideInleft">
                  <div className="event-item-classic-figure">
                    <ul className="event-img-list">
                      <li>
                        <a href="speaker-page.html">
                          <img src={i3} alt width={60} height={60} />
                        </a>
                      </li>
                      <li>
                        <a href="speaker-page.html">
                          <img src={i4} alt width={60} height={60} />
                        </a>
                      </li>
                      <li>
                        <a href="speaker-page.html">
                          <img src={i5} alt width={60} height={60} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">1:00 pm - 3:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Why Technology has a Great Influence on Your Business
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">J. Smith</a>,{" "}
                      <a href="speaker-page.html">C. Wilson</a>,{" "}
                      <a href="speaker-page.html">J. Clark</a>,{" "}
                      <span>US Tech Holding</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic wow slideInleft">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i6} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">3:00 pm - 5:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Managing International Enterprises
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">Peter McMillan</a>,{" "}
                      <span>LTP Group</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-1-2">
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <ul className="event-img-list">
                      <li>
                        <a href="speaker-page.html">
                          <img src={i7} alt width={60} height={60} />
                        </a>
                      </li>
                      <li>
                        <a href="speaker-page.html">
                          <img src={i8} alt width={60} height={60} />
                        </a>
                      </li>
                      <li>
                        <a href="speaker-page.html">
                          <img src={i9} alt width={60} height={60} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">9:00 am - 11:00 am </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Why Technology has a Great Influence on Your Business
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">J. Smith</a>,{" "}
                      <a href="speaker-page.html">C. Wilson</a>,{" "}
                      <a href="speaker-page.html">J. Clark</a>,{" "}
                      <span>US Tech Holding</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i10} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">11:00 am - 1:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Managing International Enterprises
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">Peter McMillan</a>,{" "}
                      <span>LTP Group</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i11} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">1:00 pm - 3:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Efficient Business Management Techniques
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">Jane Smith</a>,{" "}
                      <span>JCole Co.</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i12} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">3:00 pm - 5:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        How to Build a Successful Startup in the USA
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">John Clark</a>,{" "}
                      <span>iStep Ltd.</span>
                    </h5>
                    <div className="event-item-classic-text">
                      <p>
                        John Clark, the founder of iStep, one of the most
                        successful American IT companies, will teach you how to
                        plan the work of your startup the right way and get
                        successful.
                      </p>
                      <h5 className="event-item-location">
                        Location: <span className="location">Hall #1</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-1-3">
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <ul className="event-img-list">
                      <li>
                        <a href="speaker-page.html">
                          <img src={i13} alt width={60} height={60} />
                        </a>
                      </li>
                      <li>
                        <a href="speaker-page.html">
                          <img src={i14} alt width={60} height={60} />
                        </a>
                      </li>
                      <li>
                        <a href="speaker-page.html">
                          <img src={i15} alt width={60} height={60} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">9:00 am - 11:00 am </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Why Technology has a Great Influence on Your Business
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">J. Smith</a>,{" "}
                      <a href="speaker-page.html">C. Wilson</a>,{" "}
                      <a href="speaker-page.html">J. Clark</a>,{" "}
                      <span>US Tech Holding</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i16} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">11:00 am - 1:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Managing International Enterprises
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">Peter McMillan</a>,{" "}
                      <span>LTP Group</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i17} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">1:00 pm - 3:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        How to Build a Successful Startup in the USA
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">John Clark</a>,{" "}
                      <span>iStep Ltd.</span>
                    </h5>
                    <div className="event-item-classic-text">
                      <p>
                        John Clark, the founder of iStep, one of the most
                        successful American IT companies, will teach you how to
                        plan the work of your startup the right way and get
                        successful.
                      </p>
                      <h5 className="event-item-location">
                        Location: <span className="location">Hall #1</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-1-4">
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i18} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">9:00 am - 11:00 am </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        Managing International Enterprises
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">Peter McMillan</a>,{" "}
                      <span>LTP Group</span>
                    </h5>
                  </div>
                </div>
                <div className="event-item-classic">
                  <div className="event-item-classic-figure">
                    <a href="speaker-page.html">
                      <img src={i19} alt width={109} height={109} />
                    </a>
                  </div>
                  <div className="event-item-classic-caption">
                    <p className="events-time">11:00 am - 1:00 pm </p>
                    <h4 className="event-item-classic-title">
                      <a href="schedule.html">
                        How to Build a Successful Startup in the USA
                      </a>
                    </h4>
                    <h5>
                      by <a href="speaker-page.html">John Clark</a>,{" "}
                      <span>iStep Ltd.</span>
                    </h5>
                    <div className="event-item-classic-text">
                      <p>
                        John Clark, the founder of iStep, one of the most
                        successful American IT companies, will teach you how to
                        plan the work of your startup the right way and get
                        successful.
                      </p>
                      <h5 className="event-item-location">
                        Location: <span className="location">Hall #1</span>
                      </h5>
                    </div>
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

export default Shedule;
