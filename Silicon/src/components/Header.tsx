import '../App.css'
import SiliconSvg from '../assets/silicon.svg';
export default function Header() {
  return (
    <div className="flex justify-around items-center p-4 h-[8%]">
      <div>
        <p className="text-[#1E1E1E] font-Montserat">About</p>
      </div>
      <div className='w-[13rem] h-8 flex items-center'>
        <img src={SiliconSvg}></img>
      </div>
      <div>
        <button className="w-[8rem] h-6 p-0 text-[14px] font-Montserat text-[#1E1E1E] bg-transparent border border-[#1E1E1E] rounded-full">Connect Wallet</button>
      </div>
    </div>
  );
}
