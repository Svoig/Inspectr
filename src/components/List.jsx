import React from "react";

import Restaurant from "./Restaurant.jsx";

class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			elems: []
		}
	}

	componentDidMount() {
	}

	render() {
		if(this.props.places) {
			if(this.props.places.length > 1) {

				const newElems = this.props.places.map(function(place) {
					return <Restaurant key={place.place_id} name={place.name} address={place.address} phone={place.phone} />
				});


				return (
					<div>
						<div id='list'>
							{newElems}
						</div>
					</div>
				);

			} else {
				return (
					<div>
					</div>
				);
			}
		} else {
			return (
				<div>
				</div>
			);
		}
	}

}


List.propTypes = {
	results: React.PropTypes.array,
	places: React.PropTypes.array.isRequired
};

List.defaultProps = {
	results: [],
	places: [{name: "Testaurant"}]
};

export default List;