import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Input = ({ onSendMessage }) => {
    const [text, selectText] = useState("")

    let Change = (e) => {
        selectText(e.target.value)
    }

    let onSubmit = () => {
        selectText("")
        onSendMessage(text);
    }

    return (
        <div className="message-type">
            <TextField
                className="input"
                label="Type message here..."
                placeholder="Enter your message"
                onChange={e => Change(e)}
                margin="normal"
                value={text}
                onKeyPress={event => {
                    if (event.key === 'Select') {
                        onSubmit(text);
                    }
                }}
                style={{ height: "40px", width: "75%" }}
            />

            <Button variant="contained" color="primary" Click={onSubmit}>
                Send
            </Button>
        </div>
    );
}

