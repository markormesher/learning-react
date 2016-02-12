var React = require('react'),
	ReactDOM = require('react-dom'),
	ThumbnailList = require('./thumbnail-list');

var thumbListElement = React.createElement(ThumbnailList, {
	images: [
		{

			imageUrl: 'http://icons.iconarchive.com/icons/danleech/simple/1024/android-icon.png',
			header: 'Android...',
			description: '...is awesome.',
			badge: {
				title: 'Reasons why',
				number: 42
			}
		},
		{

			imageUrl: 'http://icons.iconarchive.com/icons/danleech/simple/1024/android-icon.png',
			header: 'Android...',
			description: '...is awesome.',
			badge: {
				title: 'Reasons why',
				number: 42
			}
		}
	]
});

ReactDOM.render(thumbListElement, document.querySelector('.target'));