import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const FoodAndDrink = () => {
  return (
    <>
      <Header src={"/videos/food-and-drink.mp4"} />
      <main>
        <h1>Food and Drink</h1>
        <section>
          <h2>Food and Drink on Taniti</h2>
          <p>
            Taniti’s culinary scene offers a delightful blend of island
            tradition and global flavors. Whether you're craving fresh seafood,
            a hearty American breakfast, or vibrant Pan-Asian cuisine, Taniti
            has something for every palate.
          </p>
          <h3>Local Cuisine:</h3>
          <p>
            Seafood lovers will feel right at home—five of the island’s ten
            restaurants specialize in freshly caught local fish, often served
            with rice and seasonal vegetables. Traditional Tanitian dishes
            reflect the island’s agricultural roots, featuring tropical fruits,
            root vegetables, and flavorful spices.
          </p>
          <h3>International Options:</h3>
          <p>
            If you're in the mood for something more familiar, three restaurants
            serve classic American fare, from burgers and fries to pancakes and
            milkshakes. For a more diverse experience, two eateries focus on
            Pan-Asian cuisine, offering everything from stir-fried noodles to
            sushi rolls.
          </p>
          <h3>Groceries and Snacks:</h3>
          <p>
            Want to cook your own meals or grab a quick snack? Taniti has two
            full-sized supermarkets, two smaller grocery stores, and a 24-hour
            convenience store for anything you need, day or night.
          </p>
          <h3>Drinks and Nightlife:</h3>
          <p>
            Whether you're sipping a tropical cocktail on the beach or sampling
            local craft beer at the microbrewery, Taniti’s nightlife is relaxed
            but lively. Alcohol is available throughout the island, though sales
            are prohibited between midnight and 9:00 a.m. The legal drinking age
            is 18, but enforcement is relatively relaxed.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FoodAndDrink;
