import React, { useContext } from "react";
import Footer from "./Footer";
import { ThemeContext } from "../ThemeContext";
import Switch from "./Switch";
import "../App.css";
import ContentStudio from "./ContentStudio";

export default function Studio() {
  const theme = useContext(ThemeContext);
  if (!theme) return;
  return (
    <>
      <div
        className={`h-screen w-screen flex flex-col justify-between ${theme.mode.background}`}
      >
        <div className="flex justify-around items-center p-4 h-[8%]">
          <div className="flex gap-7">
            <p className={`${theme.mode.text} font-Montserat text-[25px]`}>
              Home
            </p>
            <p className={`${theme.mode.text} font-Montserat text-[25px]`}>
              Roadmap
            </p>
          </div>
          <div className="w-[16rem] h-8 flex items-center">
            <img src={theme.mode.silicon}></img>
          </div>
          <div>
            <button
              className={`w-[11rem] h-8 p-0 text-[20px] font-Montserat ${theme.mode.text} bg-transparent border ${theme.mode.border} rounded-full`}
            >
              CMCM...Le9U
            </button>
          </div>
        </div>
        <ContentStudio/>
        <div className="h-[8%] flex items-center justify-around">
          <Switch />
          <div className="w-64 h-16 bg-button border border-[#FFFFFF] flex flex-col justify-center items-center rounded-[20px] relative">
            <p className={`font-matrice-medium absolute top-1 ${theme.mode.text}`}>Total Threads:</p>
            <p className={`font-Matrice text-[35px] absolute -bottom-2 ${theme.mode.text}`}>1010264</p>
          </div>
          <div className="h-full w-[1rem]"></div>
        </div>
      </div>
    </>
  );
}
