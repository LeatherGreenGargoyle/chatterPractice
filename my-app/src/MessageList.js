import React from 'react';
import MessageListEntry from './MessageListEntry';

var MessageList = (props) => {
	return <div id="messageList">
	"This is the message list"
	</div>
}

export default MessageList;
		// {props.messages.map((msg) => {
		// 	<MessageListEntry username={msg.username} message={msg.message}/>
		// })}