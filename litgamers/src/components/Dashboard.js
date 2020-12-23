import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../utils/Common';
import {PlayFabClient} from 'playfab-sdk';

function Dashboard(props) {
    const [balance, setBalance] = useState('');
    const user = getUser();
    var orderId;
    var confirmURL;
    var addCurrency;

    useEffect(() => {
        getBalance();
    })

    const getBalance = () => {
        var userBalance = {
        }
        PlayFabClient.GetUserInventory(userBalance, function (error, result) {
            if (result != null){
                var currentBalance = result.data.VirtualCurrency.US
                setBalance((currentBalance / 100).toFixed(2))
                sessionStorage.setItem("balance", balance);
                console.log(balance)
            }
            else if (result == null){

            }
            }
        )
    }

    const depositTen = async () => {
        addCurrency = ({
            Amount: 1000,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(10)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }
    const depositFifteen = async () => {
        addCurrency = ({
            Amount: 1500,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(15)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }
    const depositTwenty = async () => {
        addCurrency = ({
            Amount: 2000,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(20)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }
    const depositTwentyFive = async () => {
        addCurrency = ({
            Amount: 2500,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(25)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }
    const depositFifty = async () => {
        addCurrency = ({
            Amount: 5000,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(50)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }
    const depositSeventyFive = async () => {
        addCurrency = ({
            Amount: 7500,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(75)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }
    const depositHundred= async () => {
        addCurrency = ({
            Amount: 10000,
            VirtualCurrency: "US"
        })
        var initiatePurchase = {
            Items: [{
                    ItemId: "CurrencyBundle(100)",
                    quantity: 1,
                    Annotation: "Purchased from Dashboard"
                }]
            }
        PlayFabClient.StartPurchase(initiatePurchase, function (error, result) {
            orderId = result.data.OrderId;
            console.log(result)
            if (result == null){
                alert("Something went wrong, please try again")
            }})
        handlePayment();
    }

    const handlePayment = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        var payPurchase = ({
            OrderId: orderId,
            ProviderName: "PayPal",
            Currency: "RM"
        });
        PlayFabClient.PayForPurchase(payPurchase, function (error, result) {
                if (result != null) {
                    confirmURL = result.data.PurchaseConfirmationPageURL
                    window.open(confirmURL, "width=300", "height=200")
                    console.log(result)
                }
                else if (result == null){
                    alert("Something went wrong")
                }
        })
        await new Promise(resolve => setTimeout(resolve, 2000));
        var confirmPurchase = ({
            OrderId: orderId
        });
        window.confirm("Select Ok once you have made your purchase to confirm")
        PlayFabClient.ConfirmPurchase(confirmPurchase, function (error, result) {
            console.log(result)
            if (result == null) {
                alert("The purchase was not confirmed, if this is in result please contact us")
            }
            else if (result != null){
                PlayFabClient.AddUserVirtualCurrency(addCurrency, function (error, result) {
                    console.log(result)})
                alert("Your purchase was confirmed! Good Luck!")
            }
        })
    }
    const handleWithdrawal = () => {

    }
    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }
    
    
    return (
        <div className="dashboard">
        <br></br>
        <h4>Welcome to your Dashboard!</h4><br /><br />
        <h4>Your Current Balance is ${balance}</h4><br></br><br></br>
        <h5>Add Additional Funds to your account using PayPal</h5><br></br>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositTen} value="$10" />
        </div>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositFifteen} value="$15" />
        </div>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositTwenty} value="$20" />
        </div>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositTwentyFive} value="$25" />
        </div>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositFifty} value="$50" />
        </div>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositSeventyFive} value="$75" />
        </div>
        <div className="paymentBTN">
            <input className="depositBTN" type="button" onClick={depositHundred} value="$100" />
        </div>
        <br></br>
        <br></br>
        <h5>Withdraw Funds</h5><br></br>
        <input type="button" onClick={handleWithdrawal} value="Request a Payment with Paypal" />
        <br></br>
        <br></br>
        <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default Dashboard;