import React, { useState } from "react";
import { useEffect } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from "./Nav";
import $ from 'jquery';



function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  

	return (

    <footer className="footbar">
    <div className="float-left-title">
    <Link to="/">
      <h1><span>GG</span><span>DENIM</span></h1> {/* insert title name here */}
			</Link>
    </div>
    <Navigation></Navigation>
    <ul className="nav-links">
        <li className="nav-items">
            <form onsubmit="event.preventDefault();" role="search">
                <label for="search">Search</label>
                <input id="search" type="search" placeholder="Search..." autofocus required />
                <button type="submit">Go</button>
            </form>
        </li>
    </ul>
    <button  onclick={scrollToTop} title="Back to top">Scroll to Top</button>
</footer>
	);
}

export default Footer;