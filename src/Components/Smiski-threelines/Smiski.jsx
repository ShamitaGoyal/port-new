import smiski from "../../assets/imgs/smiski1.svg";
import smiski2 from "../../assets/imgs/smiski2.svg"
import threelines from "../../assets/imgs/threelines.svg"
import "../Smiski-threelines/smiski.css";

export default function Smiski() {
  return (
    <>
    <div className="smiski-container1">
      <img src={smiski} alt="smiski" className="smiski-img" />
    </div>

    <div className="smiski-container2">
      <img src={smiski2} alt="smiski2" className="smiski2-img" />
    </div>

    <div className="threelines">
    <img src={threelines} alt="threelines" className="threelines-img" />
    </div>




    </>
  );
}
