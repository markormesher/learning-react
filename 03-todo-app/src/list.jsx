var React = require('react');

module.exports = React.createClass({
	render: function () {
		return <ul>
			{this.renderList()}
		</ul>
	},

	renderList: function () {
		if (!this.props.loaded || !this.props.items) {
			// no data loaded yet
			return <li className="loading">
				<i className="fa fa-spinner fa-pulse"/>
				Loading
			</li>
		} else if (Object.keys(this.props.items).length === 0) {
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
					<li key={key} className={item.done ? 'done' : ''}>
						<i className="fa fa-square-o"/>
						<span>{item.text}</span>
					</li>
				);
			}
			return output;
		}
	}
});