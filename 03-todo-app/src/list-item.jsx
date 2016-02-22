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
		var deleteButton = this.state.done ?
			<i className="fa fa-trash-o" onClick={this.handleDeleteClick}/> :
			null;

		return <li className={'task' + (this.state.done ? ' done' : '')}>
			<i className="fa fa-square-o" onClick={this.handleCheckClick}/>
			{deleteButton}
			<span>{this.state.text}</span>
		</li>
	},

	handleCheckClick: function () {
		var newDone = !this.state.done;

		// change state
		this.setState({
			done: newDone
		});

		// update on backend
		this.fb.update({done: newDone});
	},

	handleDeleteClick: function () {
		this.fb.remove();
	}
});