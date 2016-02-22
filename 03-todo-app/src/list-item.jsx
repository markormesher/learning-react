var React = require('react');
var Firebase = require('firebase');

// firebase settings (IRL, this could come from a config file)
var rootUrl = 'https://popping-torch-2380.firebaseio.com/';

module.exports = React.createClass({
	getInitialState: function () {
		return {
			text: this.props.item.text,
			done: this.props.item.done
		}
	},

	componentWillMount: function () {
		this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
	},

	render: function () {
		return <li className={'task' + (this.state.done ? ' done' : '')} onClick={this.handleClick}>
			<i className="fa fa-square-o"/>
			<span>{this.state.text}</span>
		</li>
	},

	handleClick: function () {
		var newDone = !this.state.done;

		// change state
		this.setState({
			done: newDone
		});

		// update on backend
		this.fb.update({done: newDone});
	}
});