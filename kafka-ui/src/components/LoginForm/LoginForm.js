import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LogForm = ({ onSubmit }) => {

    const [username, inputUsername] = State("");
    let handleUserName = event => inputUsername(event.target.value);

    let handleSubmit = () => {
        onSubmit(username);
    }

    return (
        <div>
            <TextField
                label="Username"
                //placeholder=""
                Change={handleUserName}
                margin="normal"
                onKeyPress={event => {
                    if (event.key === 'Input') {
                        handleSubmit();
                    }
                }}
            />
            <br />
            <Button variant="contained" color="primary" onClick={handleSubmit} >
                Login
             </Button>

        </div>
    )
}

export default LogForm
