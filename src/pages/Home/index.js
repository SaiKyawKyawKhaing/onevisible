import React from "react";
import Banner from "../../components/HomeComponents/Banner";
import AboutTrippro from "../../components/HomeComponents/AboutTrippro";
import ApiComponent from "../../components/HomeComponents/ApiComponent";
import SlideComponent from "../../components/HomeComponents/SlideComponent";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutTrippro />
      <ApiComponent />
      <SlideComponent />
    </>
  );
};

export default Home;
