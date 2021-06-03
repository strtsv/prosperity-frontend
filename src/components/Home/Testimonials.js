import React from "react";
import Slider from "react-slick";

import s1 from "../../assets/images/user-1-60x60.jpg";
import s2 from "../../assets/images/user-2-60x60.jpg";
import s3 from "../../assets/images/user-3-60x60.jpg";
import s4 from "../../assets/images/user-4-60x60.jpg";

var settings = {
  slidesToShow: 3,
};
class Testimonials extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default text-center">
        <div className="container">
          <div className="wow-outer">
            <div className="wow slideInDown">
              <h3>Testimonials</h3>
            </div>
          </div>
          {}
          <div
            className="slick-slider carousel-parent"
            data-arrows="true"
            data-loop="false"
            data-dots="false"
            data-swipe="true"
            data-items={1}
            data-child="#child-carousel"
            data-for="#child-carousel"
          >
            <Slider {...settings}>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      It was a very useful conference, there were a number of
                      presentations that completely changed my understanding of
                      startups. I look forward to visiting this event again next
                      year, maybe even as a speaker.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">Joanna Smith</div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      It is an honour to be invited to this event as a speaker
                      and visitor. By attending Eventy everyone here can share
                      their business experiences so we can learn something new
                      and change the industry for the better.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">James Williams</div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      This venue is an excellent opportunity to share
                      experiences, to gain learning and to establish and enforce
                      connections among executives and business leaders in this
                      industry in the eternal pursuit of maximizing customer
                      experience.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">Kate McMillan</div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      Very good conference. A unique opportunity to meet with
                      the leading business experts and CEOs from a variety of
                      companies to really see the main trends of technological
                      and business startups.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">Peter Wilson</div>
                </div>
              </div>
            </Slider>
          </div>
          <div
            className="slick-slider slider-dots"
            id="child-carousel"
            data-for=".carousel-parent"
            data-arrows="false"
            data-loop="false"
            data-dots="false"
            data-swipe="true"
            data-items={4}
            data-xs-items={4}
            data-sm-items={4}
            data-md-items={4}
            data-lg-items={4}
            data-xl-items={4}
            data-slide-to-scroll={1}
          >
            <div className="item">
              <div className="slick-dot-item">
                <img src={s1} alt width={60} height={60} />
              </div>
            </div>
            <div className="item">
              <div className="slick-dot-item">
                <img src={s2} alt width={60} height={60} />
              </div>
            </div>
            <div className="item">
              <div className="slick-dot-item">
                <img src={s3} alt width={60} height={60} />
              </div>
            </div>
            <div className="item">
              <div className="slick-dot-item">
                <img src={s4} alt width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
