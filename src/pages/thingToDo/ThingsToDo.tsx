import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ThingsToDo = () => {
  return (
    <>
      <Header src={"/videos/things-to-do.mp4"} />
      <main>
        <h1>Things to Do</h1>
        <p>Explore the best activities and attractions on Taniti.</p>
        <p>
          From stunning beaches to vibrant nightlife, discover what makes Taniti
          unique.
        </p>
        <section>
          <h2>Popular Activities</h2>
          <ul>
            <li>Snorkeling</li>
            <li>Hiking</li>
            <li>Cultural Tours</li>
            <li>Water Sports</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThingsToDo;
