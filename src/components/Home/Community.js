import React from "react";

class Community extends React.Component {
  render() {
    return (
      <section className="section-md bg-gray-700">
        <div className="container">
          <div className="row row-50 row-decorate">
            <div className="col-md-6 col-lg-4 wow slideInUp">
              <div className="box-icon-modern align-items-sm-center">
                <div className="box-icon-inner decorate-triangle">
                  <span className="icon-xl linearicons-lamp icon-gradient-1" />
                </div>
                <div className="box-icon-caption">
                  <h4>
                    <a href="#">Strong Community</a>
                  </h4>
                  <p>Supportive and Friendly</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow slideInUp">
              <div className="box-icon-modern align-items-sm-center">
                <div className="box-icon-inner decorate-triangle">
                  <span className="icon-xl linearicons-radar icon-gradient-2" />
                </div>
                <div className="box-icon-caption">
                  <h4>
                    <a href="#">Best Location</a>
                  </h4>
                  <p>Easy to Reach</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow slideInUp">
              <div className="box-icon-modern align-items-sm-center">
                <div className="box-icon-inner decorate-triangle">
                  <span className="icon-xl linearicons-teacup icon-gradient-3" />
                </div>
                <div className="box-icon-caption">
                  <h4>
                    <a href="#">Free Coffee Break</a>
                  </h4>
                  <p>Included with Basic Pass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Community;
