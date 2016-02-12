var React = require('react'),
	Badge = require('./badge');

module.exports = React.createClass({
	render: function () {
		return <div className="col-md-3 col-sm-6 col-xs-6">
			<div className="thumbnail">
				<img src={this.props.imageUrl}/>
				<div className="caption">
					<h3>{this.props.header}</h3>
					<p>{this.props.description}</p>
					<p>
						<Badge {...this.props.badge} />
					</p>
				</div>
			</div>
		</div>;
	}
});