import { useContext } from 'react';
import '../App.css'
import { ThemeContext } from '../ThemeContext';
export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <div className="flex justify-around items-center p-4 h-[8%]">
      <div>
        <p className={`text-[${theme?.mode.text}] font-Montserat`}>About</p>
      </div>
      <div className='w-[13rem] h-8 flex items-center'>
        <img src={theme?.mode.silicon}></img>
      </div>
      <div>
        <button className={`w-[8rem] h-6 p-0 text-[14px] font-Montserat text-[${theme?.mode.text}] bg-transparent border border-[${theme?.mode.text}] rounded-full`}>Connect Wallet</button>
      </div>
    </div>
  );
}
