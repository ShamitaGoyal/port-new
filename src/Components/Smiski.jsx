import smiski from "../assets/imgs/smiski1.svg";
import "./smiski.css";
export default function Smiski() {
  return (
    <div className="smiski-container">
      <img src={smiski} alt="smiski" className="smiski-img" />
    </div>
  );
}
