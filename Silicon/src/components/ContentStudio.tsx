import React, { useContext, useState } from "react";
import "../App.css";
import { ThemeContext } from "../ThemeContext";
import triangle from '../assets/images/triangle.svg';
import searchicon from '../assets/images/searchicon.svg';
import imagelist from '../assets/images/image_list.png';
import imagelist1 from '../assets/images/image_list_1.png';
import Modal from "./Modal";

export default function ContentStudio({ openModal } : { openModal: (v: boolean) => void }) {
  const theme = useContext(ThemeContext);
  const array = ['Default', 'ID (Ascending)', 'ID (Descending)', 'Staked', 'Unstaked'];
  if (!theme) return;
  return (
    <div className="h-[84%] mx-32">
      <div className="flex justify-between items-center mx-16">
        <p className={`font-Matrice text-[30px] ${theme.mode.text}`}>
          Content Studio
        </p>
        <div className="flex gap-5">
          <button
            className={`font-matrice-bold w-52 h-9 rounded-md ${
              theme.theme === "dark" ? "bg-[#CFCCC5]" : "bg-[#1E1E1E]"
            } ${theme.theme === "dark" ? "text-[#1E1E1E]" : "text-white"}`}
          >
            Stake all
          </button>
          <button
            className={`font-matrice-bold w-52 h-9 rounded-md border ${
              theme.mode.border
            } ${theme.theme === "dark" ? "bg-transparent" : "bg-[#F5F5F5]"} ${
              theme.mode.text
            }`}
          >
            Unstake all
          </button>
        </div>
      </div>
      <div
        className={`w-full h-[82%] relative mt-4 bg-button inner-shadow border-2 border-[#FFFFFF] rounded-[30px]`}
      >
        <div className={`flex h-20 p-3 justify-between items-center mx-24 border-b-2 ${theme.theme === 'dark' ? 'border-[#E2E2E2]': 'border-[#000000]'}`}>
          <div className="w-[27rem] h-12 rounded-xl  bg-[#E4E4E4] relative">
            <input id="search" className={`w-[90%] h-full bg-[#E4E4E4] text-[#767676] rounded-xl font-Matrice pl-4`} placeholder="Search id"/>
            <img className="w-7 h-8 absolute top-2 right-3" src={searchicon} alt="search icon" />
          </div>
          <div className="flex gap-10">
            <p className={`font-Matrice ${theme.theme === 'dark' ? 'text-[#FFFFFF]': 'text-[#000000]'} text-[30px]`}>My holdings: <span className={`font-matrice-regular ${theme.theme === 'dark' ? 'text-[#FFFFFF]': 'text-[#000000]'}`}>8/5016</span></p>
            <div id="dropdownid" className="w-[20rem] bg-[#E2E2E2] cursor-pointer rounded-xl flex items-center justify-between">
              <p className="pl-3 font-Matrice text-[18px]">Sort by: Default</p>
              <img className="w-8 h-5 pr-4" src={triangle} alt="triangle" />
            </div>
            <div className="w-[20rem] h-[15rem] dropdown bg-[#E2E2E2] absolute right-[6.75rem] top-[4.25rem] rounded-xl">
                {array.map((item, index) => {
                    return (
                        <li key={index} className=" mx-4 h-[2.75rem] flex items-end font-matrice-bold border-b-2 border-[#000000]">{item}</li>
                    )
                })}
            </div>
          </div>
        </div>
        <div className="h-[85%] max-h-[620px] scroll flex flex-wrap overflow-y-auto ml-24 mr-3">
          <div className={`w-[19rem] rounded-lg border-2 border-[#FFFFFF] h-[24rem] m-4 ${theme.theme === 'dark' ? 'bg-[#a6a6a6]' : 'bg-[#F5F5F5]'} `}>
            <img className="p-2" src={imagelist} alt="image list" onClick={() => openModal(true)}/>
            <div className="flex justify-around items-center">
              <p className="font-matrice-bold">SILICON #2711</p>
              <div className="w-20 h-7 bg-[#CFCCC5] font-matrice-bold text-[12px] flex items-center justify-center text-center rounded-lg text-[#767676]">0 pts</div>
            </div>
            <button className="font-matrice-bold m-1 mt-2 rounded-md w-[18rem] h-8 bg-[#1E1E1E] flex justify-center items-center text-[#FFFFFF]">Stake</button>
          </div>
          <div className={`w-[19rem] rounded-lg border-2 border-[#FFFFFF] h-[24rem] m-4 ${theme.theme === 'dark' ? 'bg-[#a6a6a6]' : 'bg-[#F5F5F5]'} `}>
            <img className="p-2" src={imagelist1} alt="image list" />
            <div className="flex justify-around items-center">
              <p className="font-matrice-bold">SILICON #2711</p>
              <div className="w-20 h-7 bg-[#CFCCC5] font-matrice-bold text-[12px] flex items-center justify-center text-center rounded-lg text-[#1E1E1E]">100 pts</div>
            </div>
            <button className="font-matrice-bold m-1 mt-2 rounded-md w-[18rem] h-8 bg-[#CFCCC5] flex justify-center items-center text-[#1E1E1E]">Unstake</button>
          </div>
          <div className={`w-[19rem] rounded-lg border-2 border-[#FFFFFF] h-[24rem] m-4 ${theme.theme === 'dark' ? 'bg-[#a6a6a6]' : 'bg-[#F5F5F5]'} `}>
            <img className="p-2" src={imagelist} alt="image list" />
            <div className="flex justify-around items-center">
              <p className="font-matrice-bold">SILICON #2711</p>
              <div className="w-20 h-7 bg-[#CFCCC5] font-matrice-bold text-[12px] flex items-center justify-center text-center rounded-lg text-[#767676]">0 pts</div>
            </div>
            <button className="font-matrice-bold m-1 mt-2 rounded-md w-[18rem] h-8 bg-[#1E1E1E] flex justify-center items-center text-[#FFFFFF]">Stake</button>
          </div>
          <div className={`w-[19rem] rounded-lg border-2 border-[#FFFFFF] h-[24rem] m-4 ${theme.theme === 'dark' ? 'bg-[#a6a6a6]' : 'bg-[#F5F5F5]'} `}>
            <img className="p-2" src={imagelist1} alt="image list" />
            <div className="flex justify-around items-center">
              <p className="font-matrice-bold">SILICON #2711</p>
              <div className="w-20 h-7 bg-[#CFCCC5] font-matrice-bold text-[12px] flex items-center justify-center text-center rounded-lg text-[#1E1E1E]">100 pts</div>
            </div>
            <button className="font-matrice-bold m-1 mt-2 rounded-md w-[18rem] h-8 bg-[#CFCCC5] flex justify-center items-center text-[#1E1E1E]">Unstake</button>
          </div>
          <div className={`w-[19rem] rounded-lg border-2 border-[#FFFFFF] h-[24rem] m-4 ${theme.theme === 'dark' ? 'bg-[#a6a6a6]' : 'bg-[#F5F5F5]'} `}>
            <img className="p-2" src={imagelist} alt="image list" />
            <div className="flex justify-around items-center">
              <p className="font-matrice-bold">SILICON #2711</p>
              <div className="w-20 h-7 bg-[#CFCCC5] font-matrice-bold text-[12px] flex items-center justify-center text-center rounded-lg text-[#767676]">0 pts</div>
            </div>
            <button className="font-matrice-bold m-1 mt-2 rounded-md w-[18rem] h-8 bg-[#1E1E1E] flex justify-center items-center text-[#FFFFFF]">Stake</button>
          </div>
          <div className={`w-[19rem] rounded-lg border-2 border-[#FFFFFF] h-[24rem] m-4 ${theme.theme === 'dark' ? 'bg-[#a6a6a6]' : 'bg-[#F5F5F5]'} `}>
            <img className="p-2" src={imagelist1} alt="image list" />
            <div className="flex justify-around items-center">
              <p className="font-matrice-bold">SILICON #2711</p>
              <div className="w-20 h-7 bg-[#CFCCC5] font-matrice-bold text-[12px] flex items-center justify-center text-center rounded-lg text-[#1E1E1E]">100 pts</div>
            </div>
            <button className="font-matrice-bold m-1 mt-2 rounded-md w-[18rem] h-8 bg-[#CFCCC5] flex justify-center items-center text-[#1E1E1E]">Unstake</button>
          </div>
        </div>
      </div>
    </div>
  );
}
