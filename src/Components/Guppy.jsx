import guppy from "../assets/imgs/guppy.svg";
import "./guppy.css";
export default function Guppy() {
  return (
    <div className="guppy-container">
      <a href=""><img src={guppy} alt="guppy" className="guppy-img" /></a>
    </div>
  );
}
