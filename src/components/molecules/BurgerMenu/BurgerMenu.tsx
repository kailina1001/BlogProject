import * as React from "react";
import { memo } from "react";
import "./index.css";

/* interface IBurgerMenu {
  header: string;
  items: string;
} */

export const BurgerMenu = memo(() => {
  return (
    <div className="menu">
      <div className="blur" />
      <div className="menu-content">
        <div className="menu-header">{/* {header} */}</div>
        <ul>
          {/*  {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))} */}
          <li>
            <a href="#"></a>
            <span>picture</span>
          </li>
        </ul>
      </div>
    </div>
  );
});
