import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "./Nav";


function Header() {
	

	return (
		<header className="header" >
			<div className="navbar">
			
			<div className="float-left-title">
			<Link to="/">
      <h1><span>GG</span><span>DENIM</span></h1> {/* insert title name here */}
			</Link>
			</div>
				<Navigation></Navigation>
				<div className="right-container">
				<Link to="/Login" className="login-link">Login</Link>
				<br />
				<Link to="/Signup" className="login-link">Sign Up</Link>
			</div>
			</div>

		</header>
	);
}

export default Header;