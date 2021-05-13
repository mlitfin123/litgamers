import React, { useState, useEffect }from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const FreeGames = () => {
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
                    <h1 className="title">Free Games</h1>
                    <h3 className="title">Play these games as often as you'd like to either practice for a tournament or for fun completely free!</h3>
                    <table className="table" id="gamesLarge">
                        <tbody>
                            <tr>
                            <td>
                                <div id="sauce" className="games">
                                    <Link to="/saucefree"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                            </td>
                            <td>
                                <div id="pong" className="games">
                                    <Link to="/pongfree"><img src="..\images\pong_icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Crazy Pong</h3></Link>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div id="space" className="games">
                                    <Link to="/spacefree"><img src="..\images\Space_Shooter icon.png" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Space Shooter</h3></Link>
                                </div>
                            </td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table" id="gamesSmall">
                        <tbody>
                            <tr>
                                <div id="sauce" className="games">
                                    <Link to="/saucefree"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                                <br></br>
                            </tr>
                            <tr>
                                <div id="space" className="games">
                                    <Link to="/spacefree"><img src="..\images\Space_Shooter icon.png" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Space Shooter</h3></Link>
                                </div>
                                <br></br>
                            </tr>
                            <tr>
                                <div id="pong" className="games">
                                    <Link to="/pongfree"><img src="..\images\pong_icon.PNG" alt="play the game" width="150px"></img>
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

export default FreeGames;