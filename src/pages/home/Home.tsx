import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header src={"/videos/home.mp4"} />
      <main>
        <h1>Welcome to Taniti</h1>
        <p>Your guide to the best places to visit.</p>
        <p>
          Explore our curated list of things to do, places to stay, and travel
          tips.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
