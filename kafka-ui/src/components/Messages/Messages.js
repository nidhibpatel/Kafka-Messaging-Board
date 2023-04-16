import React from 'react'

const Messages = ({ messages, currentUser }) => {

    let renderMessage = (msg) => {
        const { from, message, color } = msg;
        const messageFromMe = currentUser.username === msg.from;
        const className = messageFromMe ? "Messages-message currentUser" : "Messages-message";
        return (
            <li className={className}>
                <span
                    className="avatar"
                    style={{ backgroundColor: color }}
                />
                <div className="Message-content">
                    <div className="username">
                        {from}
                    </div>
                    <div className="text">{message}</div>
                </div>
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