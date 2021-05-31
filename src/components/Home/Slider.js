import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/swiper-slide-1.jpg";
import i2 from "../../assets/images/swiper-slide-2.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-loop="false"
        data-autoplay={5000}
        data-simulate-touch="false"
      >
        <div className="swiper-wrapper">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-lg">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-md-9">
                    <h5>
                      <span
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={150}
                      >
                        july 05-09 2019, Los angeles, ca
                      </span>
                    </h5>
                    <div
                      className="divider"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={350}
                    />
                    <h2 className="text-accent-3">
                      <span
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={250}
                      >
                        Eventy unites
                      </span>
                    </h2>
                    <div
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={350}
                    >
                      <h1 className="icon-gradient-2 text-accent-3">People</h1>
                    </div>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={450}
                    >
                      <a className="button button-lg button-gradient" href="#">
                        Buy Tickets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i2}
            style={{
              backgroundImage: "url(" + i2 + ")",
              backgroundPosition: "50% 50%",
            }}
          >
            <div className="swiper-slide-caption section-lg">
              <div className="container">
                <div className="row row-30 justify-content-md-center align-items-md-end">
                  <div className="col-md-2 order-md-2">
                    <div
                      className="swiper-video-block"
                      data-caption-animate="fadeIn"
                      data-caption-delay={350}
                    >
                      <a
                        href="https://www.youtube.com/embed/g8LBPCvkagc"
                        data-lightgallery="item"
                      >
                        <span className="icon fa-play icon-md icon-secondary" />
                        <span className="heading-4">
                          What is <br />
                          Eventy?
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 order-md-1">
                    <h5>
                      <span
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={150}
                      >
                        july 05-09 2019, Los angeles, ca
                      </span>
                    </h5>
                    <div
                      className="divider"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={350}
                    />
                    <h2 className="text-accent-3">
                      <span
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={250}
                      >
                        Talk about your
                      </span>
                    </h2>
                    <div
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={350}
                    >
                      <h1 className="icon-gradient-2 text-accent-3">Idea</h1>
                    </div>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={450}
                    >
                      <a className="button button-lg button-gradient" href="#">
                        Buy Tickets
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
        <div className="swiper-counter" />
        {}
        <div className="swiper-button-prev fa-arrow-left" />
        <div className="swiper-button-next fa-arrow-right" />
      </section>
    );
  }
}

export default Slider;
