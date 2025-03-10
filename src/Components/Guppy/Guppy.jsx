import guppy from "../../assets/imgs/guppy.svg";
import "../Guppy/guppy.css"

export default function Guppy() {
  return (
    <div className="guppy-container">
      <a href=""><img src={guppy} alt="guppy" className="guppy-img" /></a>
    </div>
  );
}
