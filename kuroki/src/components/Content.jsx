import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/homePage.css";
import AnimePic from "../assets/images/anime_image.png";
import JoinBtn from "../assets/images/join-btn.png";
import MobileContent from "./MobileContent";

export default function Content() {
  return (
    <>
      <motion.div className="absolute h-[92%] w-full bottom-0 p-3 max-h-full overflow-auto">
        <MobileContent />
        <div className="flex-col hidden lg:flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-3 mx-10">
            <div>
              <img className="w-[70rem]" src={AnimePic} alt="anime" />
            </div>
            <div className="flex flex-col gap-3">
              <motion.h1
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gradiant font-GoreBold text-[41px] lg:text-[73px] mx-10"
              >
                Redefining the narrative.
              </motion.h1>
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center items-center gap-3"
              >
                <button className="styled-btn-Lore tracking-wider font-GoreBold text-white text-[14px] w-[12rem] h-8">
                  ENTER LORE
                </button>
                <div className="relative w-[12rem] cursor-pointer">
                  <img
                    className="w-[12rem] h-8"
                    src={JoinBtn}
                    alt="join btn"
                    draggable={false}
                  />
                  <p className="text-gradiant font-GoreBold absolute -top-1 -left-9 text-[14px] translate-x-1/2 translate-y-1/2">
                    Join community
                  </p>
                </div>
              </motion.div>
              <div>
                <p>
                  KUROKI is a Collection of 4,000 exclusively hand-drawn anime
                  styled art NFTs. The NFT grants holders exclusive access to
                  The ROOFTOP. KUROKI is an anime brand tapping into a tale of
                  revival to craft a dystopian fantasy world through
                  storytelling and art, while leveraging IP to transcend web3.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-GoreBold text-[#5E5E5E] text-[12px]">
              <span className="font-GoreBold text-[#5e0000]">KUROKI&nbsp;</span>
              2024&nbsp; ALL RIGHT RESERVED
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
