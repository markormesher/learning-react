var React = require('react'),
	Button = require('./button'),
	ListItem = require('./list-item');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			expanded: false,
			selectedValue: undefined,
			selectedLabel: undefined
		};
	},

	handleButtonClick: function() {
		this.setState({
			expanded: !this.state.expanded
		});
	},

	handleItemClick: function(value, label) {
		this.setState({
			expanded: false,
			selectedValue: value,
			selectedLabel: label
		});
	},

	render: function () {
		var listItems = this.props.options.map(function (opt) {
			return <ListItem
				label={opt.label}
				value={opt.value}
				className={this.state.selectedValue === opt.value ? 'active' : ''}
				handleClick={this.handleItemClick}
			/>;
		}.bind(this));

		return <div className='dropdown'>
			<Button
				label={this.state.selectedLabel || this.props.title}
				className='btn-default dropdown-toggle'
				spanClassName='test caret'
				handleClick={this.handleButtonClick}
			/>
			<ul className={'dropdown-menu ' + (this.state.expanded ? 'show' : 'hidden')}>
				{listItems}
			</ul>
		</div>
	}
});
