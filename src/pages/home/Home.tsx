import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.css";
import { navLinks } from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header src={"/videos/home.mp4"} />
      <main className={styles.homePage}>
        <h1>Welcome to Taniti Island</h1>
        <section>
          <p>Your dream escape begins here.</p>
          <p>
            Welcome to Taniti, a lush tropical paradise where vibrant culture
            meets natural beauty. Whether you're looking for adventure in the
            mountains, relaxation on white-sand beaches, or unforgettable island
            cuisine, Taniti has something for everyone.
          </p>
          <ul>
            <li>
              Explore our crystal-clear waters with snorkeling, diving, and
              sunset cruises.
            </li>
            <li>
              Hike scenic volcano trails or take in panoramic views from the
              Taniti Highlands.
            </li>
            <li>
              Relax in luxury resorts, cozy beach bungalows, or eco-friendly
              jungle retreats.
            </li>
            <li>
              Taste the island — from fresh seafood to traditional Tanitian
              dishes and tropical fruit.
            </li>
          </ul>
          <p>
            Come for the sunshine, stay for the aloha. Taniti Island is more
            than a vacation — it's an experience you’ll never forget.
          </p>
        </section>
        <div className={styles.imageLinks}>
          {navLinks.map(
            (link) =>
              link.name !== "Home" && (
                <Link
                  className={
                    styles[link.name.toLowerCase().replace(/\s+/g, "-")]
                  }
                  to={link.path}
                  key={link.name}
                >
                  {link.name}
                </Link>
              )
          )}
        </div>
        <section>
          <h2>Why Choose Taniti?</h2>
          <p>
            Taniti is not just a destination; it's a lifestyle. With its rich
            culture, stunning landscapes, and warm-hearted locals, Taniti offers
            an escape from the ordinary. Whether you're seeking adventure,
            relaxation, or a bit of both, you'll find it here.
          </p>
          <p>
            Join us in celebrating the beauty of Taniti. Book your trip today
            and discover why so many people fall in love with our island.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
