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
		return {
			items: {},
			loaded: false
		};
	},

	// copy all properties from ReactFire to this component
	mixins: [ReactFire],

	// called exactly once, when the component will be mounted to the DOM
	componentWillMount: function () {
		// new Firebase(...) -> create a Firebase instance with the given URL
		this.fb = new Firebase(rootUrl + 'items/');

		// bindAsObject(...) -> part of the ReactFire library, binds in two places:
		//   this.firebaseRefs.items -> the "manager"
		//   this.state.items -> the plain data
		this.bindAsObject(this.fb, 'items');

		// called when data arrives from the FB backend
		this.fb.on('value', this.handleDataLoaded);
	},

	// render UI
	render: function () {
		console.log(this.state);

		return <div className="row panel panel-default">
			<div className="col-md-8 col-md-offset-2">
				<h2 className="text-center">Todo List</h2>
				<Header itemsStore={this.firebaseRefs.items}/>
				<hr />
				<List items={this.state.items} loaded={this.state.loaded}/>
				{this.renderDeleteCompletedButton()}
				<hr />
			</div>
		</div>
	},

	renderDeleteCompletedButton: function () {
		if (!this.state.loaded) {
			return null;
		} else {
			// check if any are completed
			var show = false;
			for (var key in this.state.items) {
				if (this.state.items[key].done) {
					show = true;
					break;
				}
			}
			if (!show) return null;

			// return button
			return <div>
				<hr />
				<div className="text-center">
					<button className="btn btn-sm btn-default" onClick={this.deleteCompleted}>
						<i className="fa fa-trash-o"/>
						Clear completed items
					</button>
				</div>
			</div>
		}
	},

	deleteCompleted: function () {
		for (var key in this.state.items) {
			if (this.state.items[key].done) {
				this.fb.child(key).remove();
			}
		}
	},

	handleDataLoaded: function () {
		this.setState({loaded: true});
	}
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
