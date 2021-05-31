import React from "react";

import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/post-classic-1-370x255.jpg";
import i2 from "../../assets/images/post-classic-2-370x255.jpg";
import i3 from "../../assets/images/post-classic-3-370x255.jpg";

const options = {
  loop: true,
  autoplay: true,
  smartSpeed: 450,
  dots: false,
  dotsEach: 1,
  nav: false,
  items: 3,
  navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
};

class News extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <h3 className="title-decorate title-decorate-center text-center">
            Latest News
          </h3>
          <div className="row">
            <div className="col-12">
              <div
                // className="owl-carousel"
                data-items={1}
                data-md-items={2}
                data-lg-items={3}
                data-dots="true"
                data-nav="false"
                data-stage-padding={15}
                data-loop="false"
                data-margin={30}
                data-mouse-drag="false"
              >
                <OwlCarousel {...options}>
                  <div className="wow slideInUp">
                    <div className="post-classic">
                      <div className="post-classic-figure">
                        <a href="blog-post.html">
                          <img src={i1} alt width={370} height={255} />
                        </a>
                      </div>
                      <div className="post-classic-caption">
                        <h4 className="post-classic-title">
                          <a href="blog-post.html">
                            Top 8 Email Marketing Tips from Our Speakers
                          </a>
                        </h4>
                        <ul className="post-classic-meta">
                          <li>April 25, 2019</li>
                          <li>
                            <a
                              className="post-classic-tag-secondary-2 post-classic-tag"
                              href="#"
                            >
                              Marketing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="wow slideInUp">
                    <div className="post-classic">
                      <div className="post-classic-figure">
                        <a href="blog-post.html">
                          <img src={i2} alt width={370} height={255} />
                        </a>
                      </div>
                      <div className="post-classic-caption">
                        <h4 className="post-classic-title">
                          <a href="blog-post.html">
                            How Your Business Can Benefit from Taking Part in
                            Eventy
                          </a>
                        </h4>
                        <ul className="post-classic-meta">
                          <li>April 25, 2019</li>
                          <li>
                            <a
                              className="post-classic-tag-secondary post-classic-tag"
                              href="#"
                            >
                              News
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="wow slideInUp">
                    <div className="post-classic">
                      <div className="post-classic-figure">
                        <a href="blog-post.html">
                          <img src={i3} alt width={370} height={255} />
                        </a>
                      </div>
                      <div className="post-classic-caption">
                        <h4 className="post-classic-title">
                          <a href="blog-post.html">
                            10 Sales Workshops of Eventy that You Must Visit
                          </a>
                        </h4>
                        <ul className="post-classic-meta">
                          <li>April 25, 2019</li>
                          <li>
                            <a className="post-classic-tag" href="#">
                              Sales
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
