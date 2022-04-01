import React from "react";
import Navigation from "./Nav";
import "../index.css";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header >
			<div className="navbar">
		
      <h1> GG DENIM </h1> {/* insert title name here */}
    
				<Navigation 
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;