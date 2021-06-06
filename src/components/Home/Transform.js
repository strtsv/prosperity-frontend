import React from "react";

class Transform extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-700 bg-decorate text-center">
        <div className="container wow-outer">
          <div className="wow slideInDown">
            <h3 className="title-decorate title-decorate-center">
              Transform your business experience with our event!
            </h3>
            <a className="button button-lg button-gradient" href="#">
              Buy Tickets{" "}
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Transform;
