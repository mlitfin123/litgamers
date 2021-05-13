import React, { useState, useEffect }from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const FiveDollar = () => {
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
                <h1 className="title">$5 Tournament</h1>
                <h3 className="title">Tournaments Currently Reset Weekly</h3>
                <h5 className="title"><u>Payouts</u></h5>
                <div class="row" id ="payouts">
                    <div class="col">
                        <h7>4 or less player entries</h7>
                        <ul>
                            <li>1st: $5.50 minimum + split pot</li>
                            <li>2nd: $2 minimum + split pot</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h7>5 to 9 player entries</h7>
                        <ul>
                            <li>1st: $10.75 minimum + split pot</li>
                            <li>2nd: $5.50 minimum + split pot</li>
                            <li>3rd: $2.50 minimum + split pot</li>
                        </ul>
                    </div>
                        <div class="col">
                            <h7>10 or more player entries</h7>
                            <ul>
                                <li>1st: $12.50 minimum + split pot</li>
                                <li>2nd: $10 minimum + split pot</li>
                                <li>3rd: $7.50 minimum + split pot</li>
                                <li>4th: $5 minimum + split pot</li>
                                <li>5th: $2.50 minimum + split pot</li>
                            </ul>
                        </div>
                    </div>
                    <table class="table" id="gamesLarge">
                        <tbody>
                            <tr>
                            <td>
                                <div id="sauce" className="games">
                                    <Link to="/saucefive"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                            </td>
                            <td>
                                <div id="pong" className="games">
                                    <Link to="/pongfive"><img src="..\images\pong_icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Crazy Pong</h3></Link>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table" id="gamesSmall">
                        <tbody>
                            <tr>
                                <div id="sauce" className="games">
                                    <Link to="/saucefive"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                                <br></br>
                            </tr>
                            <tr>
                                <div id="pong" className="games">
                                    <Link to="/pongfive"><img src="..\images\pong_icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Crazy Pong</h3></Link>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default FiveDollar;