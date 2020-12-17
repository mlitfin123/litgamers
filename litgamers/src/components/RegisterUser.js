import React, { useState } from 'react';
import {PlayFabClient} from 'playfab-sdk';

function Register(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const display = useFormInput('');
    const [error, setError] = useState(null);

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
        console.log(registerRequest)
        PlayFabClient.RegisterPlayFabUser(registerRequest, function(error, response){
            console.log(response)
        })
    }
    return(
        <div>
            <h2>Register User</h2><br /><br />
            <div>
                Enter Your Name<br />
                <input id="display" type="text" {...display} autoComplete="new-password" />
            </div>
            <div>
                Enter Your Email Address<br />
                <input id="user" type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Enter Your Desired Password (must be 6 characters or more)<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            <input type="button"onClick={playFabRegister} value="Register User"/>
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