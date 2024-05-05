import React, { useContext, useEffect, useState } from "react";
import close from "../assets/images/close.svg";
import imagelist from "../assets/images/image_list.png";
import { ThemeContext } from "../ThemeContext";
import downloadbutton from '../assets/images/downloadbutton.svg';
import dwbutton from '../assets/images/dwbutton.svg';
import listdow from '../assets/images/listdownload.svg';
import listdowwhite from '../assets/images/listdownloadwhite.svg';
import d3modal from '../assets/images/3dmodal.svg';
import d3modaldark from '../assets/images/3dmodaldark.svg';
import tpos from '../assets/images/tposeblend.svg';
import tposdark from '../assets/images/tposblenddark.svg';

export default function Modal({ closeModal }: { closeModal: (v: boolean) => void }) {
  const theme = useContext(ThemeContext);
  const [show, setShow] = useState('opacity-0 invisible');
  const array = [
    { name: "Outerwear", subname: "Eggshell Prep" },
    { name: "Bottoms", subname: "Eggshell Cargo Shorts" },
    { name: "Shoes", subname: "Black 2288s" },
    { name: "Skins", subname: "Purple Glass" },
    { name: "Backdrop", subname: "Green" },
    { name: "Eyes", subname: "Tangerine" },
    { name: "Headwear", subname: "Chrome Visor" },
  ];
  if (!theme) return;
useEffect(() => {
  const mouseMove = (e: MouseEvent) => {
    console.log(e);
  }

  window.addEventListener("mousemove", mouseMove);
})

  return (
    <div className="h-full w-full flex justify-center items-center bg-transparent backdrop-blur z-10 absolute">
      <div className="w-[100rem] h-[38rem] border-2 border-[#FFFFFF] rounded-[35px] bg-button">
        <div className="my-2 mx-12 flex">
          <div
            className={`w-[27rem] rounded-[25px] border-2 border-[#FFFFFF] h-[35rem] m-4 ${
              theme.theme === "dark" ? "bg-[#000000]" : "bg-[#FFFFFF]"
            } `}
          >
            <img
              className="p-2 rounded-lg"
              src={imagelist}
              alt="image list"
              //   onClick={() => setOpenModal(true)}
            />
            <div className="flex justify-around items-center">
              <p
                className={`font-matrice-bold text-[22px] ${
                  theme.theme === "dark" ? "text-[#FFFFFF]" : "text-[#1E1E1E]"
                }`}
              >
                SILICON #2711
              </p>
              <div className="w-28 h-[2.75rem] bg-[#CFCCC5] font-matrice-bold text-[18px] flex items-center justify-center text-center rounded-lg text-[#767676]">
                0 pts
              </div>
            </div>
            <button
              className={`font-matrice-bold m-3 mt-4 rounded-md text-[18px] w-[25rem] h-12 ${
                theme.theme === "dark" ? "bg-[#E4E4E4]" : "bg-[#1E1E1E]"
              } flex justify-center items-center ${
                theme.theme === "dark" ? "text-[#1E1E1E]" : "text-[#FFFFFF]"
              }`}
            >
              Stake
            </button>
          </div>
          <div className="w-full h-[36rem] flex flex-col gap-3">
            <div
              className={`w-full h-[28rem] flex flex-col gap-3 mt-4 rounded-[30px] p-[1.5rem] pl-8 ${
                theme.theme === "dark" ? "bg-black" : "bg-[#FFFFFF]"
              }`}
            >
              {array.map((item, index) => {
                return (
                  <div key={index} className="flex gap-3">
                    <button
                      className={`font-matrice-bold w-44 h-12 rounded-xl ${
                        theme.theme === "dark"
                          ? "bg-[#E4E4E4] text-[#1E1E1E]"
                          : "bg-[#1E1E1E] text-[#FFFFFF]"
                      }`}
                    >
                      {item.name}
                    </button>
                    <button
                      className={`font-matrice-bold h-12 w-[48rem] rounded-xl border ${
                        theme.theme === "dark"
                          ? "border-[#FFFFFF] text-[#FFFFFF]"
                          : "border-[#000000] text-[#1E1E1E]"
                      }`}
                    >
                      {item.subname}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className={`w-full h-24 p-5 pl-12 rounded-[30px] flex gap-4 ${theme.theme === 'dark' ? 'bg-[#000000]' : 'bg-[#FFFFFF]'}`}>
                <img id="list" className={`absolute z-10 w-[19rem] h-[10rem] bottom-[0px] transition-all ease-in-out delay-150 ${show}`} src={theme.theme === 'dark' ? listdow : listdowwhite} alt="list dow" />
              <div onMouseLeave={() => setShow('opacity-0 invisible')} onMouseEnter={() => setShow('opacity-100 visible')} className={`w-[19rem] transition-all ease-in-out delay-150 h-[3.5rem] flex justify-center items-center p-4 rounded-xl hover:border hover:bg-transparent ${theme.theme === 'dark' ? ' bg-[#E4E4E4]' : 'border-[#000000] bg-[#1E1E1E]'}`}>
                <img id="dw" className="onhover" src={theme.theme === 'dark' ? dwbutton : downloadbutton} alt="download button" />
              </div>
              <div className={`w-[19rem] transition-all ease-in-out delay-150 h-[3.5rem] flex justify-center items-center p-4 rounded-xl hover:border hover:bg-transparent ${theme.theme === 'dark' ? ' bg-[#E4E4E4]' : 'border-[#000000] bg-[#1E1E1E]'}`}>
                <img className="onhover" src={theme.theme === 'dark' ? d3modaldark : d3modal} alt="d3 button" />
              </div>
              <div className={`w-[19rem] transition-all ease-in-out delay-150 h-[3.5rem] flex justify-center items-center p-4 rounded-xl hover:border hover:bg-transparent ${theme.theme === 'dark' ? ' bg-[#E4E4E4]' : 'border-[#000000] bg-[#1E1E1E]'}`}>
                <img className="onhover" src={theme.theme === 'dark' ? tposdark : tpos} alt="d3 button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={() => closeModal(false)}
        className="absolute w-12 h-12 top-[12%] right-[5.5rem]"
        src={close}
        alt="close modal"
      />
    </div>
  );
}
