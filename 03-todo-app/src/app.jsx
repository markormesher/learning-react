// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');

// react classes
var Header = require('./header.jsx');
var List = require('./list.jsx');

// firebase settings
var rootUrl = 'https://popping-torch-2380.firebaseio.com/';

var App = React.createClass({
	// blank state
	getInitialState: function () {
		return {items: {}};
	},

	// copy all properties from ReactFire to this component
	mixins: [ReactFire],

	// called exactly once, when the component will be mounted to the DOM
	componentWillMount: function () {
		// new Firebase(...) -> create a Firebase instance with the given URL
		// bindAsObject(...) -> part of the ReactFire library, binds in two places:
		//   this.firebaseRefs.items -> the "manager"
		//   this.state.items -> the plain data
		this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
	},

	// render UI
	render: function () {
		console.log(this.state);

		return <div className="row panel panel-default">
			<div className="col-md-8 col-md-offset-2">
				<h2 className="text-center">Todo List</h2>
				<Header itemsStore={this.firebaseRefs.items} />
				<hr />
				<List items={this.state.items} />
			</div>
		</div>
	}
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
