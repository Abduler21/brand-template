import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers";

function Nav(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav >
			    {/* <ul className="nav-links">
                <li className="nav-items"><a href="#">Home</a></li>
                <li className="nav-items"><a href="#">Explore</a></li>
                <li className="nav-items"><a href="#">Collections</a></li>
                <li className="nav-items">
                    <a href="#">Search</a>
                </li>
            </ul> */}
			<ul className="nav-links">
				<li className= "nav-items">
					{/* <span onClick={() => setCurrentTab("collections")}>Collections</span> */}
					<Link to="/Products">Products</Link>
				</li>
				<li className= "nav-items">
					{/* <span onClick={() => setCurrentTab("collections")}>Collections</span> */}
					<Link to="/Collections">Collections</Link>
				</li>
				{/* <li className={currentTab === "contact" ? "nav-items" : "nav-items"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "products" ? "nav-items" : "nav-items"}>
					<span onClick={() => setCurrentTab("products")}>Products</span>
				</li> */}
			</ul>
		</nav>
	);
}


export default Nav;