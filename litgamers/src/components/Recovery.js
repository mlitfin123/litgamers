import React, { useState } from 'react';
import {PlayFabClient} from 'playfab-sdk';

function Recovery(props) {
    const username = useFormInput('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const playFabRecovery = () => {
        PlayFabClient.settings.titleId = "1DF75";
        const email = username.value;
        var recoveryRequest = {
            Email: email,
            TitleId: PlayFabClient.settings.titleId
        };
        PlayFabClient.SendAccountRecoveryEmail(recoveryRequest, function(error, response){
            if (response !== null) {
                console.log(response)
                setSuccess("Change Password Email Sent from Playfab")
                return(success);
            }
            else if (response == null) {
                console.log(error)
                setError(error.errorMessage)
                return(error);
            }
        })
    }

    return(
        <div className="contact-form">
            <h1  id="dashTitle" className="jumbotron p-4 p-md-2 text-white rounded bg-dark text-center">Password Reset</h1><br /><br />
            <div>
                <div className="login">
                    Enter Your Email Address Used to Register with<br />
                </div>
                <input id="user" type="text" {...username} autoComplete="new-email" placeholder="email" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
            {success && <><medium style={{ color: 'yellow' }}>{success}</medium><br /></>}
            <br />
            <div className="login">
                <input type="button"onClick={playFabRecovery} value="Reset Password"/>
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

export default Recovery;