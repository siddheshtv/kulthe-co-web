import React from "react";
import Navbar from "../shared/Navbar";
import Hero from "../HomePage/Hero";
import Work from "../HomePage/Work";
import HelpWith from "../HomePage/HelpWith";
import Accord from "../HomePage/Accord";
import Block from "../HomePage/Block";
import Services from "../HomePage/Services";
import FeaturedWork from "../HomePage/FeaturedWork";
import Footer from "../shared/Footer";
import Companies from "../HomePage/Companies";

const Home = () => {
  return (
    <div className="bg-thbg text-gray-50 text-xs">
      <Navbar />
      <Hero />
      <Block />
      <FeaturedWork />

      <Services />
      <Accord />
      <Work />
      <Companies />
      <Footer />
      {/* <HelpWith /> */}
    </div>
  );
};

export default Home;
