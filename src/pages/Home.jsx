

import React from "react";
import { Link } from "react-router-dom";
import "/src/App.css";
import { Banner } from "../Components/Banner";
import Carousel from "../Components/Carousel";
import { Header } from "../Components/Header";
// import { Footer } from "../Components/Footer";

const Home = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <Banner />
      <Carousel interval={3000} />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
