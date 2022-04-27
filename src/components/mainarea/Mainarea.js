import "./mainarea.css";
import Maincontent from "./maincontent/Maincontent";
import Navbar from "./navbar/Navbar";
function Mainarea() {
  return (
    <div className="mainarea">
      <Navbar />
      <Maincontent />
    </div>
  );
}
export default Mainarea;
