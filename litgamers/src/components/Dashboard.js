import React, { useState } from 'react';
import { getUser, removeUserSession } from '../utils/Common';
import {PlayFabClient} from 'playfab-sdk';

function Dashboard(props) {
    const [balance, setBalance] = useState();
    const user = getUser();
    var orderId;
    var confirmURL;

    const depositTen = async () => {
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
        var addCurrency = ({
            Amount: 10,
            VirtualCurrency: "US"
        })
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
        <div>
        <br></br>
        <h4>Welcome {user.name}!</h4><br /><br />
        <h4>Your Current Balance is ""</h4><br></br><br></br>
        <h5>Add Additional Funds to your account using PayPal</h5><br></br>
        <input type="button" onClick={depositTen} value="$10" />
        <input type="button" onClick={depositFifteen} value="$15" />
        <input type="button" onClick={depositTwenty} value="$20" />
        <input type="button" onClick={depositTwentyFive} value="$25" />
        <input type="button" onClick={depositFifty} value="$50" />
        <input type="button" onClick={depositSeventyFive} value="$75" />
        <input type="button" onClick={depositHundred} value="$100" />
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