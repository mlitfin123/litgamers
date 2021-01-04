import React, { useState, useEffect }from 'react';

const Balance = () => {
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
    );
}

export default Balance;