import React from "react";

class Restaurant extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			class: 'uncollpased',
			arrow: ' glyphicon glyphicon-chevron-up'
		};
	}

	toggleCollapse() {

		if (this.state.class === "collapsed") {
			this.setState({
				class: "uncollpased",
				arrow: "glyphicon glyphicon-chevron-up"
			});
		} else {
			this.setState({
				class: 'collapsed',
				arrow: "glyphicon glyphicon-chevron-down"
			});
		}
	}

	render() {
		return(

			<div className={this.state.class}>

				<div className="top-bar">
					<h1>
						{this.props.name}
						<i onClick={this.toggleCollapse.bind(this)} className={this.state.arrow}></i>
					</h1> 
					<hr></hr>
				</div>

				<div className="details">
					<h3>{this.props.address}</h3>
					<p>{this.props.phone}</p>
				</div>

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