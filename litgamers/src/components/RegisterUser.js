import React, { useState } from 'react';
import {PlayFabClient} from 'playfab-sdk';

function Register(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const display = useFormInput('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const playFabRegister = () => {
        const pwd = password.value;
        const displayed = display.value;
        PlayFabClient.settings.titleId = "1DF75";
        const email = username.value;
        var registerRequest = {
            TitleId: PlayFabClient.settings.titleId,
            DisplayName: displayed,
            Email: email,
            Password: pwd,
            RequireBothUsernameAndEmail: false
        };
        PlayFabClient.RegisterPlayFabUser(registerRequest, function(error, response){
            if (response !== null) {
                setSuccess("You have been successfully registered")
                return(success);
            }
            else if (response == null) {
                setError(error.errorMessage)
                return(error);
            }
        })
    }
    return(
        <div className="contact-form">
            <h1 className="title">Register User</h1><br /><br />
            <div>
                <div className="login">
                    Enter Your Name (must be 3 characters or more)<br />
                </div>
                <div className="login">
                    <input id="display" type="text" {...display} autoComplete="new-name" placeholder="name" />
                </div>
            </div>
            <div>
                <div className="login">
                    Enter Your Email Address (must be a valid email address)<br />
                </div>
                <input id="user" type="text" {...username} autoComplete="new-email" placeholder="email" />
            </div>
            <div style={{ marginTop: 10 }}>
                <div className="login">
                    Enter Your Desired Password (must be 6 characters or more)<br />
                </div>
                <input type="password" {...password} autoComplete="new-password" placeholder="password"/>
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
            {success && <><medium style={{ color: 'yellow' }}>{success}</medium><br /></>}
            <br />
            <div className="login">
                <input type="button"onClick={playFabRegister} value="Register User"/>
            </div>
        </div>
    )
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
    }

export default Register;