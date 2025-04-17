import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import styles from "./PlacesToStay.module.css";

const PlacesToStay = () => {
  return (
    <>
      <Header src={"/videos/places-to-stay.mp4"} />
      <main>
        <h1>Places to Stay</h1>
        <p>Find your perfect island home-away-from-home.</p>
        <p>
          Whether you're traveling on a budget or looking for a luxurious
          escape, Taniti Island offers a wide variety of accommodations to fit
          your travel style. From cozy family-run hotels to a four-star resort
          with ocean views, your island stay will be as relaxing and memorable
          as the island itself.
        </p>
        <section>
          <h2>Resorts & Luxury Stays</h2>
          <p>
            Enjoy world-class amenities, oceanfront views, and personalized
            service at Taniti’s premier four-star resort. Relax in spacious
            suites, dine at gourmet restaurants, and unwind with spa treatments
            and beachside cocktails.
          </p>
        </section>
        <section>
          <h2>Family-Owned Hotels & Inns</h2>
          <p>
            Experience authentic Tanitian hospitality at one of the island’s
            many small, family-run hotels. These charming spots offer
            comfortable rooms, home-cooked meals, and friendly local hosts ready
            to share island tips and stories.
          </p>
        </section>
        <section>
          <h2>Bed & Breakfasts</h2>
          <p>
            Stay in a cozy B&B and wake up to fresh tropical fruit and locally
            brewed coffee. Perfect for couples and solo travelers looking for a
            quiet, personal touch.
          </p>
        </section>
        <section>
          <h2>Budget-Friendly Hostels</h2>
          <p>
            For travelers looking to stretch their budget, Taniti’s clean and
            welcoming hostel offers shared rooms, common spaces, and great
            opportunities to meet fellow explorers.
          </p>
        </section>
        <section>
          <h3> All Lodging is:</h3>
          <ul>
            <li>
              Government-inspected and regulated for safety and cleanliness
            </li>
            <li>
              Conveniently located near beaches, restaurants, and attractions
            </li>
            <li>
              Run by friendly hosts who are happy to help you plan your island
              adventures
            </li>
          </ul>
        </section>
        <p>
          Wherever you stay, you'll find warm island vibes, breathtaking views,
          and easy access to everything Taniti has to offer.
        </p>
        <p>Book early—Taniti’s secret is out!</p>

        <section>
          <h2>Accomdations for Everyone</h2>
          <div className={styles.cardsContainer}>
            <Card
              title="Four Seasons Resort Taniti"
              imageSrc="https://www.tahiti.com/images1/gallery/Four-Seasons-Resort-Bora-Bora-Aerial3-2000x1200_29556.jpg"
              imageAlt="Four Seasons Resort"
              link="https://www.fourseasons.com/borabora/?utm_source=google&utm_medium=organicsearch&utm_campaign=tor-bor-hre-mid-seo-na&utm_content=na-na&utm_term=na"
              className="fourSeasons"
              description="The Four Seasons Resort Bora Bora exudes an effortless luxury. Located on the northeastern side of the island along the outer coral reef, this exclusive enclave is one of the premier resort options in Taniti."
              buttopnText="Book Now"
              rating={4.8}
              reviews="831"
              price="$2500 per night"
            />
            <Card
              title="Manomano Lodge"
              imageSrc="https://cdn.iris-etourism.io/uploads/tahiti_tourisme/108/44-193-15909164.webp"
              imageAlt="Lodge Beach View"
              link="https://manomanolodge.com/"
              className="manomanoLodge"
              description="Manomano Lodge invites you to stay in the heart of Tahitian life. At Manomano Lodge, you're close to all of Tahiti's main attractions. Ideally located on the seafront, on a 2,700 m² wooded plot, the guesthouse opens onto a beautiful black sand and white coral beach."
              buttopnText="Book Now"
              rating={4.7}
              reviews="64"
              price="$354 per night"
            />

            <Card
              title="Coco Perle Lodge"
              imageSrc="https://www.cocoperlelodge.com/images/slideshow/bungalow02.jpg"
              imageAlt="Bungalow"
              link="https://www.cocoperlelodge.com/en/"
              className="snorkeling"
              description="Tucked away on a secluded atoll, Coco Perle Lodge offers a peaceful escape surrounded by coconut groves and a breathtaking turquoise lagoon. Stay in charming bungalows with private terraces and stunning lagoon views. Enjoy delicious homemade meals featuring fresh catch, and evening cocktails with unforgettable sunsets."
              buttopnText="Book Now"
              rating={4.6}
              reviews="20"
              price="$148 per night"
            />

            <Card
              title="Mahana Lodge Hostel & Backpacker"
              imageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/301648802.jpg?k=49aab65ca78a338913944add957ca1d6516a6e0541d4fb8ecb7ecf8bdc0b2518&o=&hp=1"
              imageAlt="Bungalow"
              link="https://mahana-lodge-tahiti.mydirectstay.com/"
              className="snorkeling"
              description="Located in the heart of Taniti, our Hostel is the best choice for a cheap accommodation on a budget. Located less than five minutes walking distance from Merriton Landing."
              buttopnText="Book Now"
              rating={4.0}
              reviews="124"
              price="$78 per night"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlacesToStay;
