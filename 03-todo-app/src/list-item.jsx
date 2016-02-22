var React = require('react');

module.exports = React.createClass({
	render: function () {
		var item = this.props.item;

		return <li className={item.done ? 'done' : ''}>
			<i className="fa fa-square-o"/>
			<span>{item.text}</span>
		</li>
	}
});