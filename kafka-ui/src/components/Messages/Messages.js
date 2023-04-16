import React from 'react'
import '../../App.css';

const Messages = ({ messages, currentUser }) => {

    let renderMessage = (msg) => {
        const { from, message, color } = msg;
        const messageFromMe = currentUser.username === msg.from;
        const className = messageFromMe ? "message-bubble sender" : "message-bubble non-sender";
        return (
            <li className={className}>
                    
                    <div className="sender-name">
                        {from}
                    </div>
                    <div className="message-content">{message}</div>
                
            </li>
            
        );
    };

    return (
        <ul className="messages-list">
            {messages.map(msg => renderMessage(msg))}
        </ul>
    )
}


export default Messages