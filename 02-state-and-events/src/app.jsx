var React = require('react'),
	ReactDOM = require('react-dom'),
	DropDown = require('./drop-down');

var dropDownElement = React.createElement(DropDown, {
	title: 'Pick a Tech',
	options: [
		{value: 1, label: 'Android'},
		{value: 2, label: 'Node.js'},
		{value: 3, label: 'C# .NET'},
		{value: 4, label: 'PHP'},
		{value: 5, label: 'Python'}
	]
});

ReactDOM.render(dropDownElement, document.querySelector('.target'));