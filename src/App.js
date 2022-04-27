import Sidebar from "./components/Sidebar";
import "./App.css";
import Mainarea from "./components/mainarea/Mainarea";
function App() {
  return (
    <div className="home">
      <Sidebar className="sideBar" />
      <div className="divider"></div>
      <Mainarea />
    </div>
  );
}

export default App;
