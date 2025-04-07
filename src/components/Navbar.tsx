import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkType {
  name: string;
  path: string;
}

const navLinks: NavLinkType[] = [
  { name: "Home", path: "/" },
  { name: "Things to Do", path: "/things-to-do" },
  { name: "Places to Stay", path: "/places-to-stay" },
  { name: "Food & Drink", path: "/food-and-drink" },
  { name: "Travel Tips", path: "/travel-tips" },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
