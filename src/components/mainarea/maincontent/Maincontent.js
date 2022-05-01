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
				<div className="first">
					<div className="totalactive">
						<div>Total Active Users</div>
						<h4>+2.4%</h4>
						<h1>18,765</h1>
					</div>
					<div className="totalinstall">
						<div>Total Installs</div>
						<h4>+2.4%</h4>
						<h1>18,765</h1>
					</div>
				</div>
				<div className="second">
					<div className="totaldown">
						<div>Total Active Downloads</div>
						<h4>+2.4%</h4>
						<h1>18,765</h1>
					</div>
					<div className="totalrevenue">
						<div>Total Revenue</div>
						<h4>+2.4%</h4>
						<h1>18,765</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Maincontent;
