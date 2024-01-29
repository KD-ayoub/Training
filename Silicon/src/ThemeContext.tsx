import React, { PropsWithChildren, createContext, useState } from "react";
import SiliconSvg from './assets/images/silicon.svg';
import SiliconWhite from './assets/images/siliconwhite.svg';
import SocialDark from './assets/images/socialDark.svg';
import SocialWhite from './assets/images/socialwhite.svg';
type Theme = {
  background: string;
  text: string;
  silicon: string;
  social: string;
};
type ThemeType = {
  theme: string;
  mode: Theme;
  setTheme: (arg: "dark" | "light") => void;
};
const DarkTheme: Theme = {
  background: "#1E1E1E",
  text: "#FFFFFF",
  silicon: SiliconWhite,
  social: SocialWhite,
};

const LightTheme: Theme = {
  background: "#D9D9D9",
  text: "#1E1E1E",
  silicon: SiliconSvg,
  social: SocialDark,
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
