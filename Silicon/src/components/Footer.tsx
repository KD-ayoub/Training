import Switch from "./Switch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div className="h-[8%] flex items-center justify-around">
        <Switch/>
        <div className="h-full w-[16rem]"></div>
        <img className="w-40 h-6" src={theme?.mode.social}/>
    </div>
  );
}
