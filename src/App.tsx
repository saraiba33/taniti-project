import React, { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ThingsToDo from "./pages/thingToDo/ThingsToDo";
import PlacesToStay from "./pages/placesToStay/PlacesToStay";
import FoodAndDrink from "./pages/foodAndDrink/FoodAndDrink";
import TravelTips from "./pages/travelTips/TravelTips";

interface RoutesListType {
  component: JSX.Element;
  name?: string;
  path: string;
}

const routesList: RoutesListType[] = [
  { component: <Home />, name: "Home", path: "/" },
  { component: <ThingsToDo />, name: "Things to Do", path: "/things-to-do" },
  {
    component: <PlacesToStay />,
    name: "Places to Stay",
    path: "/places-to-stay",
  },
  {
    component: <FoodAndDrink />,
    name: "Food and Drink",
    path: "/food-and-drink",
  },
  { component: <TravelTips />, name: "Travel Tips", path: "/travel-tips" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((link) => (
          <React.Fragment key={link.name}>
            <Route path={link.path} element={link.component} />
          </React.Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
