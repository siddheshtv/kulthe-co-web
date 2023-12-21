import React from "react";
import Navbar from "../shared/Navbar";
import Hero from "../HomePage/Hero";
import Work from "../HomePage/Work";
import Accord from "../HomePage/Accord";
import Block from "../HomePage/Block";
import Services from "../HomePage/Services";
import FeaturedWork from "../HomePage/FeaturedWork";
import Footer from "../shared/Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
