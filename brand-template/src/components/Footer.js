import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "./Nav";


function Footer() {
	

	return (
    <footer class="footbar">
    <div class="float-left-title">
    <Link to="/">
      <h1><span>GG</span><span>DENIM</span></h1> {/* insert title name here */}
			</Link>
    </div>
    <Navigation></Navigation>
    <ul class="nav-links">
        <li class="nav-items">
            <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit">Go</button>
            </form>
        </li>
    </ul>
    <button onclick="topFunction()" id="myBtn" title="Go to top">Scroll to Top</button>
</footer>
	);
}

export default Footer;