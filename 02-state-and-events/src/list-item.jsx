var React = require('react');

module.exports = React.createClass({
	handleClick: function() {
		this.props.handleClick(this.props.value, this.props.label);
	},
	render: function () {
		return <li className={this.props.className}>
			<a onClick={this.handleClick}>{this.props.label}</a>
		</li>;
	}
});
