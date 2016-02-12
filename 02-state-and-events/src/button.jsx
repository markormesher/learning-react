var React = require('react');

module.exports = React.createClass({
	render: function () {
		return <button onClick={this.props.handleClick} className={'btn ' + this.props.className} type='button'>
			{this.props.label} <span className={this.props.spanClassName}>{this.props.spanClassValue}</span>
		</button>
	}
});
