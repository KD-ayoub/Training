import { useContext } from "react";
import "../App.css";
import { ThemeContext } from "../ThemeContext";
export default function Header() {
  const theme = useContext(ThemeContext);
  if (!theme) return;
  console.log("header", theme);
  return (
    <div className="flex justify-around items-center p-4 h-[8%]">
      <div>
          <p className={`${theme.mode.text} font-Montserat text-[25px]`}>
            About
          </p>
      </div>
      <div className="w-[16rem] h-8 flex items-center">
        <img src={theme.mode.silicon}></img>
      </div>
      <div>
        <button
          className={`w-[11rem] h-8 p-0 text-[20px] font-Montserat ${theme.mode.text} bg-transparent border ${theme.mode.border} rounded-full`}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
