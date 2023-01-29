import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import { MdOutlinePets } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="pet_watermark" style={{ top: "15rem", right: "10rem" }}>
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "30rem", right: "12rem", transform: "rotate(-40deg)" }}
      >
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "7rem", left: "40%", transform: "rotate(40deg)" }}
      >
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "50%", left: "35%", transform: "rotate(-90deg)" }}
      >
        <MdOutlinePets />
      </div>
      <div
        className="pet_watermark"
        style={{ top: "50%", left: "5%", transform: "rotate(-40deg)" }}
      >
        <MdOutlinePets />
      </div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
