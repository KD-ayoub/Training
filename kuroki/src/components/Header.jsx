import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import mLogo from "../assets/images/mobile_logo.png";
import Logo from "../assets/images/desk_logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const pages = ["ABOUT", "CORE VALUES", "VISION MAP", "GALLERY", "STATEMENTS"];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="absolute top-0 w-full h-[8%] flex justify-between lg:justify-around items-center"
    >
      <div className="flex justify-center lg:hidden items-center w-24 h-8 bg-gradient-to-r from-[#5E0000] via-[#9C0B0B] to-[#5E0000] rounded-lg m-3">
        <img src={mLogo} alt="mobile logo" draggable={false} />
      </div>
      <div className="hidden lg:block lg:m-2">
        <img src={Logo} alt="desk logo" draggable={false} />
      </div>
      <div className="hidden lg:block trapezoid bg-gradient-to-r from-[#5E0000] via-[#9C0B0B] to-[#5E0000]">
        <div className="flex justify-between items-center h-full">
          {pages.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-white hover:bg-white hover:text-[#5E0000] p-1 text-[12px] cursor-pointer font-GoreBold tracking-wider hover:rounded-md">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <button className="hidden lg:block styled-btn-connect tracking-wider font-GoreBold text-white lg:text-[15px] lg:w-[13rem] lg:h-11">
        CONNECT WALLET
      </button>
      <div className="flex justify-center items-center lg:hidden w-8 h-8 bg-gradient-to-r from-[#5E0000] via-[#9C0B0B] to-[#5E0000] rounded-lg m-3">
        <RxHamburgerMenu size={20} color="white" />
      </div>
    </motion.div>
  );
}
