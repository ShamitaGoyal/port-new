import disk from "../../assets/imgs/disk.svg";
import "../Rotating-Disk/rotating.css";

export default function Rotating() {
  return (
    <div className="disk-container">
      <img src={disk} alt="Rotating" className="rotating-img" />
    </div>
  );
}
