var ThumbnailList = React.createClass({
	render: function () {
		var list = this.props.images.map(function (imageProps) {
			return <Thumbnail {...imageProps} />
		});
		return <div>{list}</div>;
	}
});