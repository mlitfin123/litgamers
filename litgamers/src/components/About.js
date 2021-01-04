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
                <h1 className="title">About</h1>
            </div>
        </div>
    </main>
    );
}

export default About;