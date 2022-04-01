import logo from "./logo.svg";
import React, { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import Contact from './components/Contact';
import Collections from './components/Collections';
import Products from './components/Products';


function App() {
  const [currentTab, setCurrentTab] = useState("collections");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "collections":
				return <Collections />;
			case "contact":
				return <Contact />;
			case "products":
				return <Products />;
			default:
				return null;
		}
	};


  return (
    <div>
    <div className="mobile-header">
    <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
  </div>
    <div>
				<main currentTab={currentTab} setCurrentTab={setCurrentTab}>{renderTab()}</main>
			</div>
  </div>
  );
}

export default App;
