var React = require('react');

var ListItem = require('./list-item');

module.exports = React.createClass({
	render: function () {
		return <ul>
			{this.renderList()}
		</ul>
	},

	renderList: function () {
		if (!this.props.loaded) {
			// no data loaded yet
			return <li className="loading">
				<i className="fa fa-spinner fa-pulse"/>
				Loading
			</li>

		} else if (!this.props.items || !Object.keys(this.props.items).length) {
			// empty
			return <li className="empty">
				<i className="fa fa-thumbs-o-up"/>
				You have no tasks!
			</li>

		} else {
			// render list
			var output = [];
			for (var key in this.props.items) {
				// get item and assign key
				var item = this.props.items[key];
				item.key = key;

				// create UI
				output.push(
					<ListItem key={key} item={item}/>
				);
			}
			return output;
		}
	}
});