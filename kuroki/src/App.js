import "./App.css";
import { motion } from "framer-motion";
import Background from "./assets/images/background.png";
import Kuroki from "./assets/images/kuroki.png";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={Background} className="w-full h-full" alt="bg image" />
      <motion.div
        className="absolute flex flex-col gap-10 items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <img src={Kuroki} alt="kuroki logo" />
        <motion.button
          className="styled-btn font-GoreBold text-white text-[25px] w-[20rem] h-[3.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Enter
        </motion.button>
        {/* <button className="styled-btn font-GoreBold text-white text-[25px] w-[20rem] h-[3.5rem]">Enter</button> */}
      </motion.div>
    </div>
  );
}

export default App;