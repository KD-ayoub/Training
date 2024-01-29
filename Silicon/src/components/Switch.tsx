import React, { useContext, useState } from "react";
import "./Switch.css";
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';
import { ThemeContext } from "../ThemeContext";

export default function Switch() {
    const theme = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" onChange={() => theme?.setTheme(theme.theme === 'dark' ? 'light' : 'dark')}/>
      <span className="slider">
        <img className={`w-4 h-4 absolute top-[5px] left-[${theme?.theme === 'dark' ? '5px' : '35px'}] duration-300`} src={theme?.theme === 'dark' ? moon : sun}/>
      </span>
    </label>
  );
}
