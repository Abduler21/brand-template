import logo from "./logo.svg";
import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
// import Contact from './components/Contact';
import Collections from './components/Collections';
import Products from './components/Products';


function App() {
  // const [currentTab, setCurrentTab] = useState("collections");

	// // This function checks to see which tab is selected and then generates the appropriate tab.
	// const renderTab = () => {
	// 	switch (currentTab) {
	// 		case "collections":
	// 			return <Collections />;
	// 		case "contact":
	// 			return <Contact />;
	// 		case "products":
	// 			return <Products />;
	// 		default:
	// 			return null;
	// 	}
	// };

	// currentTab={currentTab} setCurrentTab={setCurrentTab}
  return (
    <div>
    <div className="mobile-header">
    <Header ></Header>
		<Routes>
		<Route path="/" element="" />
		<Route path="/Collections" element={<Collections />} />
			<Route path="/Products" element={<Products />} />
	</Routes>
  </div>
    <div>
				{/* <main >{renderTab()}</main> */}
				<Outlet />
			</div>

  </div>
  );
}

export default App;
