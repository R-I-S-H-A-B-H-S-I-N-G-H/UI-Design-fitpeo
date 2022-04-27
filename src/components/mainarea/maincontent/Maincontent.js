import "./maincontent.css";
import girl from "../../../assets/girl.png";
function Maincontent(params) {
  return (
    <div className="main-content">
      <div className="welcome">
        <div className="dashbord">
          <div className="greetings">
            <h2>Welcome back!</h2>
            <h2>User</h2>
            <p>Reprehenderit mollit aute cillum dolor exercitation sunt</p>
            <button>Go Now</button>
          </div>
          <div className="box">
            <img src={girl}></img>
          </div>
        </div>
        <div className="features">
          <img src="https://images.pexels.com/photos/1535972/pexels-photo-1535972.jpeg?auto=compress&cs=tinysrgb&h=200&w=300"></img>
        </div>
      </div>
      <div className="dvdr"></div>
      <div className="activity">
        
      </div>
    </div>
  );
}
export default Maincontent;
