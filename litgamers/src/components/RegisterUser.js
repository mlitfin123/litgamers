import React, { useState } from 'react';
import {PlayFabClient} from 'playfab-sdk';
import axios from 'axios';
import { setUserSession } from '../utils/Common';

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
                setSuccess("You have been successfully registered, logging in...")
                return(success);
            }
            else if (response == null) {
                setError(error.errorMessage)
                return(error);
            }
        })
    }
    const loggedIn = async () => {
        if (success != null) {
            await new Promise(resolve => setTimeout(resolve, 200));
            const pwd = password.value;
            PlayFabClient.settings.titleId = "1DF75";
            const email = username.value;
            var loginRequest = {
                Email: email,
                Password: pwd,
                TitleId: PlayFabClient.settings.titleId
            };
            PlayFabClient.LoginWithEmailAddress(loginRequest, async function (result, error) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                if (result == null) {
                    axios.post('https://litgamers-server.herokuapp.com/users/signin', { username: username.value, password: password.value }).then(response => {
                        console.log(response)
                        setUserSession(response.data.token, email, pwd);
                        props.history.push('/dashboard');
                        }).catch(error => {
                        if (error.response.status === 401) setError(error.response.data.message);
                            else alert("Something went wrong. Please try again later.");
                        });
                }
                else if (result !== null) {
                    console.log(result)
                    alert(result.errorMessage)
                    return(result);
                } 
            });
        }
    }
    loggedIn();
    const showPassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }

    return(
        <div className="contact-form">
            <h1  id="dashTitle" className="jumbotron p-4 p-md-2 text-white rounded bg-dark text-center">Register User</h1><br /><br />
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
                <input type="password" {...password} autoComplete="new-password" placeholder="password" id="password"/>
            </div>
            <div className="checkbox"><input type="checkbox" onChange={showPassword} />Show Password</div>
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