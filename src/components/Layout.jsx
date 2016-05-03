import React from "react";

import List from "./List.jsx"
import Restaurant from "./Restaurant.jsx"; 
import Search from "./Search.jsx";


class Layout extends React.Component {
	render() {
		return (
			<div>
				<div id='main-title'>
					<h1>Vegan Restaurants</h1>
				</div>

			<Search />

			</div>
		)
	}
}

export default Layout;