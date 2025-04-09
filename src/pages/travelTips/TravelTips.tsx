import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const TravelTips = () => {
  type SectionKey = "pack" | "transport" | "health" | "info" | "visit";

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      pack: false,
      transport: false,
      health: false,
      info: false,
      visit: false,
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
      <Header src={"/videos/travel-tips.mp4"} />
      <main>
        <h1>Travel Tips</h1>

        <section>
          <h2
            onClick={() => toggleSection("pack")}
            style={{ cursor: "pointer" }}
          >
            {openSections.pack ? "▼" : "▶"} What to Pack
          </h2>
          {openSections.pack && (
            <ul>
              <li>
                Light clothing – Taniti’s tropical climate calls for breathable
                fabrics and casual attire.
              </li>
              <li>
                Sturdy shoes – Ideal for hiking in the rainforest or exploring
                the volcano.
              </li>
              <li>
                Sunscreen and insect repellent – Essential for beach days and
                forest adventures.
              </li>
              <li>
                Rain gear – Quick tropical showers are common, so a light poncho
                or umbrella can be useful.
              </li>
            </ul>
          )}
        </section>

        <section>
          <h2
            onClick={() => toggleSection("transport")}
            style={{ cursor: "pointer" }}
          >
            {openSections.transport ? "▼" : "▶"} Getting Around
          </h2>
          {openSections.transport && (
            <ul>
              <li>Public buses run in Taniti City from 5 a.m. to 11 p.m.</li>
              <li>Private buses serve other parts of the island.</li>
              <li>
                Taxis are available in the city, and rental cars are offered
                near the airport.
              </li>
              <li>
                Bicycles and helmets can be rented across the island. Helmets
                are required by law.
              </li>
              <li>
                Walking is a great option in Taniti City and around Merriton
                Landing—both areas are very pedestrian-friendly.
              </li>
            </ul>
          )}
        </section>

        <section>
          <h2
            onClick={() => toggleSection("health")}
            style={{ cursor: "pointer" }}
          >
            {openSections.health ? "▼" : "▶"} Health & Safety
          </h2>
          {openSections.health && (
            <ul>
              <li>
                One hospital and several clinics are available, with
                multilingual staff.
              </li>
              <li>
                Violent crime is rare, but take care to guard your belongings
                against pickpocketing.
              </li>
              <li>
                Tap water is generally safe, but bottled water is widely
                available for extra peace of mind.
              </li>
            </ul>
          )}
        </section>

        <section>
          <h2
            onClick={() => toggleSection("info")}
            style={{ cursor: "pointer" }}
          >
            {openSections.info ? "▼" : "▶"} Helpful Info
          </h2>
          {openSections.info && (
            <ul>
              <li>
                Currency: U.S. dollars are accepted everywhere. Some places also
                accept euros and yen.
              </li>
              <li>Electricity: 120 volts (same as the U.S.).</li>
              <li>
                Language: English is widely spoken in cities, especially by
                younger residents. Less common in rural areas.
              </li>
              <li>
                Alcohol: Not sold or served between midnight and 9 a.m. Drinking
                age is 18, but lightly enforced.
              </li>
              <li>
                Holidays: Many businesses close on national holidays—plan
                activities accordingly.
              </li>
            </ul>
          )}
        </section>

        <section>
          <h2
            onClick={() => toggleSection("visit")}
            style={{ cursor: "pointer" }}
          >
            {openSections.visit ? "▼" : "▶"} Best Time to Visit
          </h2>
          {openSections.visit && (
            <p>
              Taniti is beautiful year-round, but the dry season (April to
              October) offers the best beach weather and fewer rain showers.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TravelTips;
