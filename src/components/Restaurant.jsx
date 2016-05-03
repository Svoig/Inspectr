import React from "react";

class Restaurant extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h3>{this.props.address}</h3>
				<p>{this.props.phone}</p>
			</div>
		)
	}

}

Restaurant.propTypes = {
	name: React.PropTypes.string.isRequired,
	address: React.PropTypes.string.isRequired,
	phone: React.PropTypes.string.isRequired
},

Restaurant.defaultProps = {
	name: 'Restaurant',
	address: '123 SW 1st St',
	phone: '(555) 555-5555'
}

export default Restaurant;