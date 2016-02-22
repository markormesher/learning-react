var React = require('react');

module.exports = React.createClass({
	render: function () {
		return <ul>
			{this.renderList()}
		</ul>
	},

	renderList: function () {
		if (this.props.items && Object.keys(this.props.items).length === 0) {
			// empty (or still loading)
			return <li className="empty">You have nothing to do!</li>
		} else {
			// list
			var output = [];
			for (var key in this.props.items) {
				// get item
				if (!this.props.items.hasOwnProperty(key)) continue;
				var item = this.props.items[key];

				// create UI
				output.push(
					<li key={key}>
						{item.text}
					</li>
				);
			}
			return output;
		}
	}
});