import React, { useState, useEffect }from 'react';
import Sidebar from './Sidebar';

const About = () => {
    const [balance, setBalance] = useState('');

    useEffect(() => {
        getBalance();
    })

    const getBalance = async () => {
        if (sessionStorage.getItem("balance")) {
            setBalance(sessionStorage.balance);
            console.log(balance)
        }
        else {
            setBalance(null);
            console.log(balance)
        }
        
    }
    return (
    <main>
        <header>
            { balance !== null && (
                <div className="balance">
                    <span className="balance1">Balance: ${balance}</span>
                </div>
                )
            }
            { balance === null && (
                <div className="balance">
                    <span className="balance1">Not Logged In</span> <br></br>
                    <span className="balance1">Balance: $0</span>
                </div>
                )
            }
        </header>
        <div class="row">
            <div>
                <Sidebar />
            </div>
            <div class="col">
                <h1 className="title">How it Works</h1>
                <h4 className="titleU">Step 1: Register as a user for the site.</h4>
                <h4 className="titleU">Step 2: Access your dashboard to add funds to your account.</h4>
                <h4 className="titleU">Step 3: Select the button of your desired amount to add playable cash.</h4>
                <h4 className="titleU">Step 4: Navigate the page to select the tournament you wish to enter.</h4>
                <h4 className="titleU">Step 5: Play the game!</h4>
                <h4 className="titleU">Step 6: At the conclusion of the game your high score will be added to the leaderboard.</h4>
                <h4 className="titleU">Step 7: If your score ranks among the leaders at the end of the tournament then you win! Your funds will be added to your account.</h4>
                <h4 className="titleU">Step 8: Choose another tournament to enter and either redeem yourself or try to win again!</h4>
                <h4 className="titleU">Step 9: At any time you choose you can request a payout through PayPal using the Dashboard, verify your email connected to your account is correct.</h4>
                <h4 className="titleU">Step 10: Use the Contact Form to contact us for any questions, comments, suggestions, or concerns.</h4>
            </div>
            
        </div>
    </main>
    );
}

export default About;