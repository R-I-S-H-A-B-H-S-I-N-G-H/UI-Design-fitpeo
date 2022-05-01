import "./navbar.css";
import searchPng from "../../../assets/search.png";
import bell from "../../../assets/bell.png";
import menu from "../../../assets/menu.png";
import group from "../../../assets/group.png";

function Navbar(params) {
	return (
		<div className="navbar-area">
			<div className="left">
				<img src={searchPng}></img>
				<img src={menu}></img>
			</div>
			<div className="right">
				<img src={bell}></img>
				<img src={group}></img>
			</div>
		</div>
	);
}
export default Navbar;
