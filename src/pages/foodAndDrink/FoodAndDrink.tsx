import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./FoodAndDrink.module.css";
import { NavLinkType } from "../../components/navbar/Navbar";

export const foodLinks: NavLinkType[] = [
  { name: "Traditiona Taniti", path: "/food-and-drink/traditonal-taniti" },
  { name: "American", path: "/food-and-drink/american" },
  { name: "Pan-Asian Cuisine", path: "/food-and-drink/pan-asian" },
];
type SectionKey =
  | "local"
  | "american"
  | "pan-asian"
  | "drinks"
  | "nightlife"
  | "groceries"
  | "snacks";

const FoodAndDrink = () => {
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      local: false,
      american: false,
      "pan-asian": false,
      drinks: false,
      nightlife: false,
      groceries: false,
      snacks: false,
    }
  );

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <>
      <Header src={"/videos/food-and-drink.mp4"} />
      <main className={styles.foodAndDrink}>
        <h1>Food and Drink</h1>
        <section className={styles.intro}>
          <h2>Food and Drink on Taniti</h2>
          <p>
            Taniti’s culinary scene offers a delightful blend of island
            tradition and global flavors. Whether you're craving fresh seafood,
            a hearty American breakfast, or vibrant Pan-Asian cuisine, Taniti
            has something for every palate.
          </p>
        </section>
        <section>
          <img
            src="https://www.foodbymaria.com/wp-content/uploads/2019/05/BOATBREAKFAST-5-1.jpg"
            alt="Traditional Taniti Food"
            className={styles.traditionalFood}
          />
          <h3>Local Cuisine:</h3>
          <p>
            Seafood lovers will feel right at home—five of the island’s ten
            restaurants specialize in freshly caught local fish, often served
            with rice and seasonal vegetables. Traditional Tanitian dishes
            reflect the island’s agricultural roots, featuring tropical fruits,
            root vegetables, and flavorful spices.
          </p>
          <div>
            <h4
              onClick={() => toggleSection("local")}
              style={{ cursor: "pointer" }}
            >
              {openSections.local ? "▼" : "▶"} Local Restaurants
            </h4>
            {openSections.local && (
              <ul>
                <li>
                  <a href="http://www.fenuaprobartender.com/">Te Va'a Tere</a>
                </li>
                <li>
                  <a href="http://surfhouse.pf/">The Surfhouse Tahiti</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Le-MoanaTe-Honu-102615349003751/">
                    Restaurant Le Moana
                  </a>
                </li>
                <li>
                  <a href="http://www.loalabouchetahiti.com/">
                    L'O A La Bouche
                  </a>
                </li>
                <li>
                  <a href="http://tahiti.intercontinental.com/le-lotus-restaurant">
                    Le Lotus
                  </a>
                </li>
              </ul>
            )}
          </div>
        </section>
        <section>
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB_tqE5CbSDF7duJgrsajRqeYk3caZA08_VK0TqjaknBk4jH8c8MSJxxxwL25GYdQzkGMFmQKnV2BxOQ0iu1YzUOQtxmjaQtImLfWqayIqvkbKpg_CRK0gpozLUACVrAHw1O0Lhe5g=s1360-w1360-h1020"
            alt="american food"
            className={styles.americanFood}
          />
          <h3>International Options:</h3>
          <p>
            If you're in the mood for something more familiar, three restaurants
            serve classic American fare, from burgers and fries to pancakes and
            milkshakes. For a more diverse experience, two eateries focus on
            Pan-Asian cuisine, offering everything from stir-fried noodles to
            sushi rolls.
          </p>
          <div>
            <h4
              onClick={() => toggleSection("american")}
              style={{ cursor: "pointer" }}
            >
              {openSections.american ? "▼" : "▶"} American Restaurants
            </h4>
            {openSections.american && (
              <ul>
                <li>
                  <a href="http://www.fenuaprobartender.com/">
                    The Avenue Tahiti
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/kisstahitianburgers">
                    Kiss Tanitian Burgers
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/lefoodcourttahiti">
                    Le Food Court Punaauia
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div>
            <h4
              onClick={() => toggleSection("pan-asian")}
              style={{ cursor: "pointer" }}
            >
              {openSections["pan-asian"] ? "▼" : "▶"} Pan-Asian Restaurants
            </h4>
            {openSections["pan-asian"] && (
              <ul>
                <li>
                  <a href="https://m.facebook.com/RestaurantCitydor/">
                    Restaurant City d'or
                  </a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/Restaurant_Review-g294352-d8113971-Reviews-La_Saigonnaise-Papeete_Tahiti_Society_Islands.html">
                    La Saigonnaise
                  </a>
                </li>
              </ul>
            )}
          </div>
        </section>
        <section className={styles.snacksSection}>
          <img
            src="https://c7.alamy.com/comp/A7YFRG/marche-de-papeete-local-market-for-fish-produce-and-goods-papeete-A7YFRG.jpg"
            alt="Market View"
            className={styles.marketView}
          />
          <h3>Groceries and Snacks:</h3>
          <p>
            Want to cook your own meals or grab a quick snack? Taniti has two
            full-sized supermarkets, two smaller grocery stores, and a 24-hour
            convenience store for anything you need, day or night.
          </p>
          <div>
            <h4
              onClick={() => toggleSection("groceries")}
              style={{ cursor: "pointer" }}
            >
              {openSections.groceries ? "▼" : "▶"} Grocery Stores
            </h4>
            {openSections.groceries && (
              <ul>
                <li>
                  <a href="http://www.easymarket.pf/">
                    Easy Market - Prince Hinoï
                  </a>
                </li>
                <li>
                  <a href="http://championtahiti.com/">Champion</a>
                </li>
              </ul>
            )}
          </div>
          <div>
            <h4
              onClick={() => toggleSection("snacks")}
              style={{ cursor: "pointer" }}
            >
              {openSections.snacks ? "▼" : "▶"} Snacks
            </h4>
            {openSections.snacks && (
              <ul>
                <li>
                  <a href="http://www.pf.totalenergies.com/">
                    Total Prince Hinoi
                  </a>
                </li>
              </ul>
            )}
          </div>
        </section>
        <section className={styles.drinksAndNightlifeSection}>
          <img
            src="https://images.pexels.com/photos/4485365/pexels-photo-4485365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Bartender with drink"
            className={styles.bartender}
          />
          <h3>Drinks and Nightlife:</h3>
          <p>
            Whether you're sipping a tropical cocktail on the beach or sampling
            local craft beer at the microbrewery, Taniti’s nightlife is relaxed
            but lively. Alcohol is available throughout the island, though sales
            are prohibited between midnight and 9:00 a.m. The legal drinking age
            is 18, but enforcement is relatively relaxed.
          </p>
          <div>
            <h4
              onClick={() => toggleSection("drinks")}
              style={{ cursor: "pointer" }}
            >
              {openSections.drinks ? "▼" : "▶"} Drinks
            </h4>
            {openSections.drinks && (
              <ul>
                <li>
                  <a href="https://surfhouse.pf/reeftop/#:~:text=UNE%20VUE%20PANORAMIQUE%20UNIQUE,tapas%2C%20pizzas%20et%20cocktails%20tropicaux.">
                    REEFTOP - 360° lounge & bar
                  </a>
                </li>
                <li>
                  <a href="http://tahiti.intercontinental.com/">Tiki Bar</a>
                </li>
              </ul>
            )}
          </div>
          <div>
            <h4
              onClick={() => toggleSection("nightlife")}
              style={{ cursor: "pointer" }}
            >
              {openSections.nightlife ? "▼" : "▶"} Nightlife
            </h4>
            {openSections.nightlife && (
              <ul>
                <li>
                  <a href="https://www.tripadvisor.com/Attraction_Review-g294352-d7382203-Reviews-Ute_Ute-Papeete_Tahiti_Society_Islands.html">
                    Ute Ute
                  </a>
                </li>
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FoodAndDrink;
