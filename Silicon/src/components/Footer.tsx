import Switch from "./Switch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export default function Footer() {
  const theme = useContext(ThemeContext);
  if (!theme) return ;
  return (
    <div className="h-[8%] flex items-center justify-around">
        <Switch/>
        <div className="h-full w-[16rem]"></div>
        <img className="w-48 h-10" src={theme.mode.social}/>
    </div>
  );
}
