import React from "react";
import "../scss/Home.scss";
import FadeIn from "react-fade-in";
import Footer from "./Footer";
import HomeCategories from "./HomeCategories";

const Home = () => {
  return (
    <FadeIn>
      <section className="homeContainer" id="home">
        <>
          <HomeCategories />
        </>
      </section>
      <>
        <Footer />
      </>
    </FadeIn>
  );
};
export default Home;
