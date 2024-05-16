import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Kuroki from "../assets/images/kuroki.png";
import HomePage from "./HomePage";

export default function LoadingPage() {
  const [enter, setEnter] = useState(false);
  return (
    <>
      <AnimatePresence>
      {!enter && (
          <motion.div
            className="absolute flex flex-col gap-5 lg:gap-10 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.5 }}}
          >
            <img className="" src={Kuroki} alt="kuroki logo" draggable={false} />
            <motion.button
              className="styled-btn font-GoreBold tracking-wider text-white text-[12px] sm:text-[18px] lg:text-[25px] w-[7rem] h-6 sm:w-[9rem] sm:h-8 lg:w-[20rem] lg:h-[3.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              onClick={() => setEnter(true)}
            >
              Enter
            </motion.button>
          </motion.div>
      )}
      </AnimatePresence>
      {enter && <HomePage/>}
    </>
  );
}
