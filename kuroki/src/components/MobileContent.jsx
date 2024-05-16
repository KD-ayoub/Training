import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/homePage.css";
import AnimePic from "../assets/images/anime_image.png";
import JoinBtn from "../assets/images/join-btn.png";

export default function MobileContent() {
  return (
    <div className="flex flex-col justify-between lg:hidden items-center h-full">
      <div className="flex flex-col justify-center items-center ">
        <motion.h1
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gradiant font-GoreBold text-[41px] text-center px-32 sm:px-32 md:px-[11rem] sm:text-[63px] md:text-[73px]"
        >
          Redefining the narrative.
        </motion.h1>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=""
        >
          <img
            className="w-[14rem] h-[16rem] sm:w-[22rem] sm:h-[24rem] md:w-[25rem] md:h-[27rem]"
            src={AnimePic}
            alt="anime pic"
            draggable={false}
          />
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center items-center gap-3"
        >
          <button className="styled-btn-Lore tracking-wider font-GoreBold text-white text-[14px] sm:text-[18px] w-[12rem] h-8 sm:w-[16rem] sm:h-10 md:w-[18rem] md:h-12">
            ENTER LORE
          </button>
          <div className="relative w-[12rem] sm:w-[16rem] md:w-[18rem] cursor-pointer">
            <img
              className="w-[12rem] h-8 sm:w-[16rem] sm:h-10 md:w-[18rem] md:h-12"
              src={JoinBtn}
              alt="join btn"
              draggable={false}
            />
            <p className="text-gradiant w-full text-center font-GoreBold absolute top-1/2 left-1/2 text-[14px] sm:text-[18px] -translate-x-1/2 -translate-y-1/2">
              Join community
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="font-GoreBold text-[#5E5E5E] text-[12px] sm:text-[14px]">
          <span className="font-GoreBold text-[#5e0000]">KUROKI&nbsp;</span>
          2024&nbsp; ALL RIGHT RESERVED
        </p>
      </motion.div>
    </div>
  );
}
