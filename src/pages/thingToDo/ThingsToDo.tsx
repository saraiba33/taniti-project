import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./ThingsToDo.module.css";
import Card from "../../components/card/Card";

const ThingsToDo = () => {
  return (
    <>
      <Header src={"/videos/things-to-do.mp4"} />
      <main>
        <h1>Things to Do on Taniti Island</h1>
        <section className={styles.textContainer}>
          <p>
            Taniti Island offers the perfect mix of adventure, relaxation, and
            cultural exploration. Whether you're here for a weekend getaway or a
            full tropical retreat, there's something for everyone to enjoy.
          </p>

          <h3>Beach Days & Water Adventures</h3>
          <ul>
            <li>Swim and sunbathe on the white sands of Yellow Leaf Bay.</li>
            <li>
              Snorkel through crystal-clear waters teeming with marine life.
            </li>
            <li>
              Charter a fishing tour for a day on the open sea with experienced
              locals.
            </li>
            <li>Take a sunset cruise or a day boat tour around the island.</li>
          </ul>

          <h3>Explore Nature & Adventure</h3>
          <ul>
            <li>
              Hike the rainforest trails and discover hidden waterfalls and
              wildlife.
            </li>
            <li>Zip-line through lush tropical canopies.</li>
            <li>
              Visit the island’s active volcano and enjoy breathtaking views
              from above.
            </li>
            <li>
              Helicopter rides are available for a bird’s-eye view of the
              island’s dramatic landscapes.
            </li>
          </ul>

          <h3>Culture & Entertainment</h3>
          <ul>
            <li>
              Tour Taniti’s local history museum to learn about its vibrant
              culture and heritage.
            </li>
            <li>
              Visit local art galleries featuring handmade crafts and
              traditional Tanitian artwork.
            </li>
            <li>
              Dance the night away at Taniti’s new dance club or chill at one of
              the island’s pubs or the microbrewery.
            </li>
          </ul>

          <h3>Fun for Everyone</h3>
          <ul>
            <li>
              Bowling, arcade games, and a movie theater offer great indoor
              entertainment.
            </li>
            <li>
              A nine-hole golf course is set to open next year—perfect for a
              casual game with scenic views.
            </li>
          </ul>

          <h3>Explore Merriton Landing</h3>
          <p>
            Discover shops, cafes, and entertainment in Merriton Landing, the
            island’s fastest-growing tourist hotspot.
          </p>
          <p>
            Enjoy easy access to attractions, beaches, and nightlife—all
            walkable and bike-friendly.
          </p>
        </section>
        <section>
          <h2>Plan Your Trip</h2>
          <p>
            Whether you're seeking adventure, relaxation, or a mix of both,
            Taniti Island has something for everyone. Book your trip today and
            experience the magic of this tropical paradise!
          </p>
        </section>
        <section>
          <h2>Most Popular Things to Do</h2>
          <div className={styles.cardsContainer}>
            <Card
              title="Half-Day Snorkeling Tour"
              imageSrc="https://dynamic-media.tacdn.com/media/photo-o/2f/2b/0f/c4/caption.jpg?w=700&h=500&s=1"
              imageAlt="Snorkeling"
              link="https://www.viator.com/tours/Tahiti/Half-Day-Snorkeling-Tour-from-Papeete/d25-298052P1?&m=28353&supag=167797063411&supca=21265125336&supsc=dsa-1583450326707&supai=698995496813&supdv=c&supnt=g&suplp=9029031&supli=&supti=dsa-1583450326707&tsem=true&supci=dsa-1583450326707&supap1=&supap2=&synthetic_keyword=&gad_source=1&gclid=CjwKCAjwktO_BhBrEiwAV70jXvayhhYXEn0cbjek3sgjDuuvsEQZxLTKWJ_iM1msJVedgbZtIBVcsBoCWu0QAvD_BwE&gclsrc=aw.ds"
              className="snorkeling"
              description="Excursion to Tahiti with several stops in different snorkeling spots. Single stop on a magnificent sandbank to swim in the middle of stingrays, cowfish, Picasso, ... "
              buttopnText="Book Now"
              rating={5}
              reviews="75"
              price="$132"
            />
            <Card
              title="3 hrs Jet Ski Excursion"
              imageSrc="https://dynamic-media.tacdn.com/media/photo-o/2f/38/73/eb/caption.jpg?w=700&h=500&s=1"
              imageAlt="Jet Ski"
              link="https://www.viator.com/tours/Moorea/Jet-ski-excursion-3-hrs-Jet-ski-excursion-to-Moorea-single-or-two-seater/d5182-187900P4"
              className="snorkeling"
              description="Whether you’re a beginner or an experienced jet skier, this fun three-hour jet skiing tour can be tailored to your needs. Stop to swim with rays, fish and turtles."
              buttopnText="Book Now"
              rating={5}
              reviews="176"
              price="$123"
            />

            <Card
              title="Valcano ATV Tour"
              imageSrc="https://dynamic-media.tacdn.com/media/photo-o/2e/fe/0e/58/caption.jpg?w=1400&h=1000&s=1"
              imageAlt="Valcano ATV"
              link="https://www.viator.com/tours/Heimaey-Island/Volcano-ATV-Tour/d50336-149610P1"
              className="snorkeling"
              description="Explore the volcano Eldfell and the coast of Heimaey Island on this small group ATV tour. Your guide will show you all around the island and show you all it has to offer."
              buttopnText="Book Now"
              rating={5}
              reviews="273"
              price="$112"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThingsToDo;
