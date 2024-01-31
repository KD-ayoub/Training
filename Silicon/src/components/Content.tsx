import { useContext } from "react";
import "../App.css";
// import '../fonts/Matrice SemiBold.otf';

import { ThemeContext } from "../ThemeContext";
import { useNavigate } from "react-router-dom";
export default function Content() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="w-full h-[86%] flex justify-center items-center">
      <div className={`h-full w-[90%] rounded-[30px] ${theme?.mode.areaBackground} border-2 border-[#FFFFFF] relative`}>
        <div className="w-[54rem] absolute top-[15%] left-[5%]">
          <h1 className={`font-Matrice text-[85px] mb-16 ${theme?.mode.text}`}>Fashion Reimagined.</h1>
          <p className={`font-Montserat text-[26px] ${theme?.mode.text} mb-20`}>Welcome to the world of SILICONS. 3D fashion digital collectibles on Solana, brought to you by CAW Studio. </p>
          <div className="flex gap-10">
            <button className={`w-[14rem] h-16 p-0 text-[26px] rounded-[30px] font-Montserat ${theme?.mode.text} bg-button border border-[#FFFFFF] shadow-md shadow-[#1E1E1E]/50`} onClick={() => navigate('/studio')}>Studio</button>
            <button className={`w-[14rem] h-16 p-0 text-[26px] rounded-[30px] font-Montserat ${theme?.mode.text} bg-transparent border border-[#FFFFFF] shadow-md shadow-[#1E1E1E]/50`}>Vision</button>
          </div>
        </div>
        <div className="w-[25%] h-[90%] absolute right-0 bottom-0">
          <img className="w-full h-full" src={theme?.mode.character}/>
        </div>
      </div>
    </div>
  );
}
