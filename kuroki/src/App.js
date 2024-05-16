import "./App.css";
import LoadingPage from "./components/LoadingPage";
import Background from "./assets/images/background.png";

function App() {
  return (
    <div className="h-screen">
      <div className="w-full h-full max-h-full overflow-auto">
        <img src={Background} className="w-full h-full absolute -z-10" alt="bg" draggable={false} />
        <LoadingPage />
      </div>
    </div>
  );
}

export default App;
