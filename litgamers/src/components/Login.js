import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../utils/Common';
import {PlayFabClient} from 'playfab-sdk';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    
    const playFabLogin = () => {
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
                    setLoading(false);
                    setUserSession(response.data.token, email, pwd);
                    props.history.push('/dashboard');
                    }).catch(error => {
                    setLoading(false);
                    if (error.response.status === 401) setError(error.response.data.message);
                        else setError("Something went wrong. Please try again later.");
                    });
            }
            else if (result !== null) {
                console.log(result)
                setLoading(false);
                setError(result.errorMessage)
                return(result);
            } 
        });
    }
    
    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        playFabLogin();
    }
    
    return (
        <div>
        <h1 className="title">Login</h1><br /><br />
        <div className="contact-form">
        <div>
            Username<br />
            <input id="user" type="text" {...username} autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
            Password<br />
            <input type="password" {...password} autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <div className="login">
                <div className="login">
                    <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
                </div>
                <Link id="register" to="/register">Register New User</Link>
                </div>
            </div>
        </div>
    );
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
    
export default Login;