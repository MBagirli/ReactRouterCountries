import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import burgerMenu from "../Icons/icons8-menu.svg";
import { useState } from "react";

const Header = () => {
  let [bool, setBool] = useState(false);
  let OpenHandler = () => {
    setBool(true);
  };
  let CloseHandler = () => {
    setBool(false);
  };
  return (
    <nav className={classes.container}>
      <h1 className={classes.container__mainHeader}>ReactCountries</h1>
      <button onClick={OpenHandler} className={classes.container__list__btn}>
        <img src={burgerMenu} alt="Icon" />
      </button>
      <ul id={bool ? classes.Opened : ""} className={classes.container__list}>
        <button onClick={CloseHandler} className={classes.container__list__btn}>
          X
        </button>
        <li className={classes.container__list__item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.active : classes.container__list__link
            }
            to="/Africa"
          >
            Africa
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.active : classes.container__list__link
            }
            to="/America"
          >
            America
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.active : classes.container__list__link
            }
            to="/Asia"
          >
            Asia
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.active : classes.container__list__link
            }
            to="/Europe"
          >
            Europe
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.active : classes.container__list__link
            }
            to="/Oceania"
          >
            Oceania
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
