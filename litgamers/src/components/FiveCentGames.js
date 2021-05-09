import React, { useState, useEffect }from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const FiveCent = () => {
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
                <h1 className="title">5¢ Tournaments</h1>
                <h3 className="title">Tournaments Currently Reset Weekly</h3>
                <h5 className="title"><u>Payouts</u></h5>
                <div class="row">
                    <div class="col">
                        <h7>4 or less player entries</h7>
                        <ul>
                            <li>1st: 6¢ minimum + split pot</li>
                            <li>2nd: 2¢ minimum + split pot</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h7>5 to 9 player entries</h7>
                        <ul>
                            <li>1st: 11¢ minimum + split pot</li>
                            <li>2nd: 6¢ minimum + split pot</li>
                            <li>3rd: 3¢ minimum + split pot</li>
                        </ul>
                    </div>
                        <div class="col">
                            <h7>10 or more player entries</h7>
                            <ul>
                                <li>1st: 13¢ minimum + split pot</li>
                                <li>2nd: 10¢ minimum + split pot</li>
                                <li>3rd: 8¢ minimum + split pot</li>
                                <li>4th: 5¢ minimum + split pot</li>
                                <li>5th: 3¢ minimum + split pot</li>
                            </ul>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                            <tr>
                            <td>
                                <div id="sauce" className="games">
                                    <Link to="/sauce05"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                            </td>
                            <td>
                                <div id="pong" className="games">
                                    <Link to="/pong05"><img src="..\images\pong_icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Crazy Pong</h3></Link>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default FiveCent;