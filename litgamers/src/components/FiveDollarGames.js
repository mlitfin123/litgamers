import React from 'react';
import Sidebar from './Sidebar';
import {PlayFabClient} from 'playfab-sdk';
import axios from 'axios';

const FiveDollar = () => {
    var balance;

    const getBalance = () => {
        var userBalance = {
        }
        PlayFabClient.GetUserInventory(userBalance, function (error, result) {
            if (result != null){
                var currentBalance = result.data.VirtualCurrency.US
                balance = ((currentBalance / 100).toFixed(2))
                console.log(balance)
            }
            else if (result == null){

            }
            }
        )
    }

    const launchGame = async () => {
        getBalance();
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (balance >= 5 ){
            window.location.href ='https://litgamers-server.herokuapp.com/sauceFive'
        }
        else if (balance <= 5 ){
            alert("Your account is inneficient, please deposit additional funds")
        }
    }
    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div class="col">
                <h1 className="title">$5 Tournament</h1>
                <h5 className="title"><u>Payouts</u></h5>
                <div class="row">
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
                            <li>2nd: $5 minimum + split pot</li>
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
                    <table class="table">
                        <tbody>
                            <tr>
                            <td>
                                <div id="sauce" className="games">
                                <button onClick={launchGame}><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></button>
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

export default FiveDollar;