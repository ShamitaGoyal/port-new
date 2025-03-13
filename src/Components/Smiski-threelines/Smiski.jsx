import smiski from "../../assets/imgs/smiski1.webp";
import smiski2 from "../../assets/imgs/smiski2.webp"
import threelines from "../../assets/imgs/threelines.svg"
import "../Smiski-threelines/smiski.css";

export default function Smiski() {
  return (
    <>
    <img src={smiski} alt="smiski" className="smiski-img" />
    <img src={smiski2} alt="smiski2" className="smiski2-img" />
    <img src={threelines} alt="threelines" className="threelines-img" />
    </>
  );
}
