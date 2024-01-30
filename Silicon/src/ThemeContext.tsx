import React, { PropsWithChildren, createContext, useState } from "react";
import SiliconSvg from './assets/images/silicon.svg';
import SiliconWhite from './assets/images/siliconwhite.svg';
import SocialDark from './assets/images/socialDark.svg';
import SocialWhite from './assets/images/socialwhite.svg';
import darkCharacter from "./assets/images/darkMode_chr.png";
import whiteCharacter from "./assets/images/flat_cap.png";
type Theme = {
  background: string;
  areaBackground: string;
  text: string;
  border: string;
  silicon: string;
  social: string;
  character: string;
};
type ThemeType = {
  theme: string;
  mode: Theme;
  setTheme: (arg: "dark" | "light") => void;
};
const DarkTheme: Theme = {
  background: "bg-[#1E1E1E]",
  areaBackground: 'bg-area',
  text: "text-[#FFFFFF]",
  border: "border-[#FFFFFF]",
  silicon: SiliconWhite,
  social: SocialWhite,
  character: darkCharacter,
};

const LightTheme: Theme = {
  background: "bg-[#D9D9D9]",
  areaBackground: 'bg-transparent',
  text: "text-[#1E1E1E]",
  border: "border-[#1E1E1E]",
  silicon: SiliconSvg,
  social: SocialDark,
  character: whiteCharacter,
};

export const ThemeContext = createContext<ThemeType | null>(null);

export default function Context({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const mode = theme === "dark" ? DarkTheme : LightTheme;
  return (
    <ThemeContext.Provider value={{ mode, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
