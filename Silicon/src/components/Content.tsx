import "../App.css";
import '../assets/fonts/Matrice font/Matrice SemiBold.otf';
import homeCharacter from "../assets/images/flat_cap.png";
export default function Content() {
  return (
    <div className="w-full h-[86%] flex justify-center items-center">
      <div className="h-full w-[90%] rounded-[30px] bg-transparent border-2 border-[#FFFFFF] relative">
        <div>
          <h1 className="font-Matrice">Fashion Reimagined.</h1>
          <p>Welcome to the world of SILICONS. 3D fashion digital collectibles on Solana, brought to you by CAW Studio. </p>
          <div>
            <button>Studio</button>
            <button>Vision</button>
          </div>
        </div>
        <div className="w-[25%] h-[90%] absolute right-0 bottom-0">
          <img className="w-full h-full" src={homeCharacter}/>
        </div>
      </div>
    </div>
  );
}
