import React, { useContext, useState } from "react";
import "./Switch.css";
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';
import { ThemeContext } from "../ThemeContext";

export default function Switch() {
    const theme = useContext(ThemeContext);
    if (!theme) return ;
  return (
    <label className="switch">
      <input id="toggle" type="checkbox" onChange={() => theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')}/>
      <span className="slider">
        <img className={`w-5 h-5 absolute top-[8px] ${theme.theme === 'dark' ? 'left-[8px]' : 'left-[49px]'} duration-300`} src={theme.theme === 'dark' ? moon : sun}/>
      </span>
    </label>
  );
}
