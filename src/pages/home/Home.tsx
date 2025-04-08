import React from "react";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header src={"public/videos/home.mp4"} />
      <main>
        <h1>Welcome to Taniti</h1>
        <p>Your guide to the best places to visit.</p>
        <p>
          Explore our curated list of things to do, places to stay, and travel
          tips.
        </p>
      </main>
    </>
  );
};

export default Home;
