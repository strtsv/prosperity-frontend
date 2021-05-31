import React from "react";

class HurryUp extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-1 pt-0">
        <div className="container">
          <div className="box-countdown-light bg-dot">
            <div className="box-countdown-light-inner">
              <h3>Hurry Up!</h3>
              <p>
                Our event is starting soon so don’t waste your time and book
                your tickets!
              </p>
              <div className="countdown-gradient">
                <div
                  className="countdown"
                  data-type="until"
                  data-time="17 Aug 2020 16:00"
                  data-format="dhms"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HurryUp;
