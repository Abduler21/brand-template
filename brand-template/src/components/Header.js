import React from "react";
import Navigation from "./Nav";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header >
		<div className="App">
      <h1> GG DENIM </h1> {/* insert title name here */}
    </div>
			<div>
				<Navigation 
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;