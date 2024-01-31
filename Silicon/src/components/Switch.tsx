import React, { useContext, useEffect, useRef, useState } from "react";
import "./Switch.css";
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import { ThemeContext } from "../ThemeContext";

export default function Switch() {
  const theme = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);
  if (!theme) return;

  useEffect(() => {
    const matches = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    theme.setTheme(matches);
    if (inputRef.current) {
      inputRef.current.checked = matches === 'dark' ? true : false;
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e: MediaQueryListEvent) => {
        theme.setTheme(e.matches ? "dark" : "light");
        if (inputRef.current) {
          inputRef.current.checked = e.matches ? true : false;
        }
      });
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <label className="switch">
      <input
        ref={inputRef}
        id="toggle"
        type="checkbox"
        onChange={() =>
          theme.setTheme(theme.theme === "dark" ? "light" : "dark")
        }
      />
      <span className="slider">
        <img
          className={`w-5 h-5 absolute top-[8px] ${
            theme.theme === "dark" ? "left-[8px]" : "left-[49px]"
          } duration-300`}
          src={theme.theme === "dark" ? moon : sun}
        />
      </span>
    </label>
  );
}
