import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

function Nav(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav >
			<ul>
				<li className={currentTab === "collections" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("collections")}>Collections</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
			</ul>
		</nav>
	);
}


export default Nav;