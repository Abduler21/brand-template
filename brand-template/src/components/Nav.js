import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers";


function Nav() {


	return (
		<nav className="nav-links">
			    
			<ul className="nav-links">
			<li className= "nav-items">
				<Link to="/Collections">Collections</Link>
			</li>
			<li className= "nav-items">
				<Link to="/Products">Products</Link>
			</li>
			<li className= "nav-items">
				<Link to="/Contact">Contact</Link>
			</li>
				
			</ul>
			
		</nav>
	);
}


export default Nav;