var React = require('react');

module.exports = React.createClass({
	getInitialState: function () {
		return {inputText: ''};
	},

	render: function () {
		return <div className="input-group">
			<input
				value={this.state.inputText}
				onChange={this.handleInputChange}
				type="text"
				className="form-control"/>
			<span className="input-group-btn">
				<button
					onClick={this.handleButtonClick}
					className="btn btn-default"
					type="button">
					Add
				</button>
			</span>
		</div>
	},

	handleButtonClick: function () {
		this.props.itemsStore.push({
			text: this.state.inputText,
			done: false
		});

		this.setState({inputText: ''});
	},

	handleInputChange: function (event) {
		this.setState({inputText: event.target.value});
	}
});