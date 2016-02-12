var React = require('react');

module.exports = React.createClass({
	render: function () {
		// this.props is an object with properties passed into this class
		console.log(this.props);

		// properties can be used as below:
		return <button className="btn btn-primary" type="button">
			{this.props.title} <span className="badge">{this.props.number}</span>
		</button>
	}
});