import React from "react";

import Header from "../components/Header";

import Slider from "../components/Home/Slider";
import HurryUp from "../components/Home/HurryUp";
import Eventy from "../components/Home/Eventy";
import Speakers from "../components/Home/Speakers";
import Shedule from "../components/Home/Shedule";
import Sponsors from "../components/Home/Sponsors";
import Packages from "../components/Home/Packages";
import Testimonials from "../components/Home/Testimonials";
import Transform from "../components/Home/Transform";
import Gallery from "../components/Home/Gallery";
import News from "../components/Home/News";
import Community from "../components/Home/Community";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <HurryUp />
      <Eventy />
      <Speakers />
      <Shedule />
      <Sponsors />
      <Packages />
      <Testimonials />
      <Transform />
      <Gallery />
      <News />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
