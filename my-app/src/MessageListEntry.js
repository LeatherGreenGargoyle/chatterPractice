import React from 'react';

var MessageListEntry = (props) => {
	return <div id='messageListEntry'>
		<div id="username">{props.username}</div>
		<div id="msg">{props.message}</div>
	</div>
}

export default MessageListEntry;