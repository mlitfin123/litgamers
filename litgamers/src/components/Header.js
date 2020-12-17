import React, { useState, useEffect }from 'react';
import Nav from './Nav';
import {PlayFabClient} from 'playfab-sdk';

const Header = () => {
    // const [balance, setBalance] = useState('');

    // useEffect(() => {
    //     getBalance();
    // })

    // const getBalance = () => {
    //     var userBalance = {
    //     }
    //     PlayFabClient.GetUserInventory(userBalance, function (error, result) {
    //         if (result != null){
    //             var currentBalance = result.data.VirtualCurrency.US
    //             setBalance((currentBalance / 100).toFixed(2))
    //             console.log(balance)
    //         }
    //         else if (result == null){
    //         }
    //         }
    //     )
    // }

    return (
        <header>
            <div id="banner">
                <Nav />
            </div>
        </header>
    );
}

export default Header;