import React from "react";

import List from "./List.jsx";

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			vegan: false,
			gf: false,
			keyword: '',
			results: [],
			class: "uncollapsed"
		}
	}

	setKeyword(event) {
		this.setState({
			keyword: event.target.value + " restaurant"
		});
	}

	setVegan() {
		if( !this.state.vegan ) {
			this.setState({
				vegan: true
			});
		} else {
			this.setState({
				vegan: false
			});
		}
	}

	setGf() {
		if( !this.state.gf ) {
			this.setState({
				gf: true
			});
		} else {
			this.setState({
				gf: false
			});
		}
	}

	handleKey(event) {
		//If user hits enter, search
		if (event.key == "Enter") {
			this.search();
		} else console.log("key was ", event.key);
	}

	search() {
		//IF there are markers,
		if (this.state.markers) {
			//remove all markers on new search
			this.state.markers.forEach(function(marker) {
				marker.setMap(null);
			});
			this.setState({markers: []});
		}

		//Prepare the search query
		let query = this.state.keyword;
		if (this.state.vegan) query += " vegan";
		if(this.state.gf) query += " gluten free";

		const request = {
			bounds: map.getBounds(),
			keyword: query
		};
		service.radarSearch(request, this.handleRes.bind(this));
	}

	handleRes(res) {

		const self = this;

		const places = [];
		const markers = [];

		res.forEach(function(obj) {
			let newObj = {};
			newObj.lat = obj.geometry.location.lat();
			newObj.lng = obj.geometry.location.lng();
			newObj.place_id = obj.place_id;

			const req = {placeId: newObj.place_id};

			service.getDetails(req, function(data) {
				if(data !== null) {
					newObj.name = data.name;
					newObj.address = data.formatted_address;
					newObj.phone = data.formatted_phone_number;

					let myLatLng = new google.maps.LatLng(newObj.lat, newObj.lng);

					let marker = new google.maps.Marker({
						position: myLatLng,
						map: map,
						title: newObj.name,
						label: newObj.name,
						animation: google.maps.Animation.DROP
					});

					const info = new google.maps.InfoWindow({
						content: newObj.name + "\n" + "Address: " 
						+ "\n" + newObj.address + "\n" +
						"Phone: " + "\n" + newObj.phone
					});
							
					marker.addListener("mouseover", function() {
						console.log("Marker for ", newObj.name, " moused over!");
						info.open(map, marker);

					});

					marker.addListener("mouseout", function() {
						console.log("Marker moused out");
						info.close();
					});

					places.push(newObj);

					markers.push(marker);

					self.setState({
						places: places,
						markers: markers
					});

				} else return null;
			});

		});





	}

	render() {
		return (
			<div>
				<div id="search-box">

					<div id="vegan-box">
						<input id="vegan-input" name="vegan" type="checkbox" value="Vegan" onChange={this.setVegan.bind(this)}></input>
						<label for="vegan">Vegan</label>
					</div>

					<div id="gf-box">
						<input id="gf-input" name="gf" type="checkbox" value="Gluten-Free" onChange={this.setGf.bind(this)}></input>
						<label for="gf">Gluten Free</label>
					</div>

					<div id="keyword-box">
						<input id="keyword-input" type="text" placeholder="Search . . ." onChange={this.setKeyword.bind(this)} onKeyUp={this.handleKey.bind(this)}></input>
						<div id="search-btn" onClick={this.search.bind(this)} >Go</div>
					</div>

					<hr></hr>
				</div>
				<List places={this.state.places} />

			</div>

		)
	}

}

export default Search;