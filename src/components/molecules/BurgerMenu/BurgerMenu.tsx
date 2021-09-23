import * as React from "react";
import { memo } from "react";
import "./index.css";

/* interface IBurgerMenu {
  header: string;
  items: string;
} */

export const BurgerMenu = memo(() => {
  return (
    <div className="wrapper">
      <input type="checkbox" className="check-menu" />
      <label htmlFor="check-menu">Menu</label>
      <div className="burger-line first"></div>
      <div className="burger-line second"></div>
      <div className="burger-line third"></div>
      <div className="burger-line fourth"></div>
      <nav className="main-menu">
        <a href="#" className="link">
          Пункт 1
        </a>
        <a href="#" className="link">
          Пункт 2
        </a>
        <a href="#" className="link">
          Пункт 3
        </a>
        <a href="#" className="link">
          Пункт 4
        </a>
      </nav>
    </div>
  );
});
