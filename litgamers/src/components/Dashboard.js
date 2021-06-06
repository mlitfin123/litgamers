import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../utils/Common';
import {PlayFabClient} from 'playfab-sdk';
import emailjs from 'emailjs-com';

function Dashboard(props) {
    const [balance, setBalance] = useState('');
    const [username, setUsername] = useState('');
    const user = useFormInput('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    var orderId;
    var confirmURL;
    var addCurrency;

    useEffect(() => {
        getBalance();
        getUserName();
    })

    const getBalance = () => {
        var userBalance = {
        }
        PlayFabClient.GetUserInventory(userBalance, function (error, result) {
            if (result != null){
                var currentBalance = result.data.VirtualCurrency.US
                setBalance((currentBalance / 100).toFixed(2))
                sessionStorage.setItem("balance", balance);
            }
            else if (result == null){
                setBalance(<medium style={{ color: 'red' }}>error retrieving balance</medium>)
            }
            }
        )
    }
    const zeroBalance = () => {
        var removeBalance = {
            Amount: Number(balance * 100),
            VirtualCurrency: "US"
        }
        PlayFabClient.SubtractUserVirtualCurrency(removeBalance, async function (error, result) {
            await new Promise(resolve => setTimeout(resolve, 500));
            if (result != null){
                // console.log(result)
                alert("You will recieve your payment shortly!")
                window.location.reload();
            }
            else if (result == null){
                alert("Something went wrong, please try again");
                // window.location.reload();
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
                console.log(error)
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
        console.log(payPurchase)
        PlayFabClient.PayForPurchase(payPurchase, function (error, result) {
                if (result != null) {
                    confirmURL = result.data.PurchaseConfirmationPageURL
                    window.open(confirmURL, "width=300", "height=200")
                    console.log(result)
                }
                else if (result == null){
                    console.log(error)
                    alert("Something went wrong")
                }
        })
        await new Promise(resolve => setTimeout(resolve, 2000));
        var confirmPurchase = ({
            OrderId: orderId
        });
        console.log(confirmPurchase)
        window.confirm("Select Ok once you have made your purchase to confirm")
        PlayFabClient.ConfirmPurchase(confirmPurchase, function (error, result) {
            console.log(result)
            console.log(error)
            if (result == null) {
                alert("The purchase was not confirmed, if this is in error please contact us")
            }
            else if (result != null){
                alert("Your purchase was confirmed! Good Luck!")
            }
        })
    }
    const getUserName = () => {
        // setUsername((sessionStorage.getItem("user")).replace(/['"]+/g, ''));
        var displayName = {
            ShowDisplayName: "true"
        }
        PlayFabClient.GetPlayerProfile(displayName, function (error, result) {
            if (result != null){
                setUsername(result.data.PlayerProfile.DisplayName)
            }
            else if (result == null){
                setUsername("Error Getting Name")
            }
            }
        )
    }
    const changeEmail = () => {
        var email = user.value;
        var emailChange = ({
            EmailAddress: email
        });
        PlayFabClient.AddOrUpdateContactEmail(emailChange, function (error, result) {
                if (result != null) {
                    console.log(result)
                    setSuccess("Contact Email Successfully Changed")
                    console.log(error)
                }
                else if (result == null){
                    console.log(error)
                    setError("Something went wrong, email not changed")
                    console.log(error)
                }
        })
    }

    const handleWithdrawal = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s2e1vlm', 'template_nc6k0qa', e.target, 'user_F50HIjhG7V6zUkMAsw8UL')
            .then((result) => {
                console.log(result.text);
                zeroBalance();
            }, (error) => {
                console.log(error.text);
            });
        }
    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
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
            <div className="dashboard">
                <h2 id="dashTitle" className="jumbotron p-4 p-md-2 text-white rounded bg-dark text-center">Welcome to your Dashboard!</h2>
            <div className="dashForm">
            <h4>Welcome {username}!!</h4><br></br>
            <h4>Your Current Balance is ${balance}</h4><br></br><br></br>
            <h5 className="dashUnder">Add Additional Funds To Your Account Using PayPal</h5><br></br>
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
            <h5 className="dashUnder">Withdraw Funds Using Your PayPal Email</h5><br></br>
            <form className="withdraw-form" onSubmit={handleWithdrawal}>
                        <div className="form-group">
                            <input type="hidden" name="contact_number" />
                            <input type="hidden" name="from_name" placeholder="Name" value={username}/>
                        </div>
                        <label>Enter the email connected to your paypal account:</label>
                        <div className="form-group">
                            <input type="email" name="from_email" placeholder="Email"  required/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="subject" placeholder="Subject" value="Withdraw Request"/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="html_message" placeholder="Message" value={balance}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Request a Payment with Paypal" />
                        </div>
                    </form>
                <br></br>
                <br></br>
                <div>
                    Change Contact Email Address Associated with Account &#40;This will not change the login email address, please contact us to change the login&#41; <br />
                    <span className="emailChange"><input id="emailChange" type="email" {...user}/></span>
                    <input type="button" onClick={changeEmail} value="Submit" />
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                    {success && <><small style={{ color: 'yellow' }}>{success}</small><br /></>}
                </div>
                <br></br>
                <br></br>
                <input type="button" onClick={handleLogout} value="Logout" />
            </div>
            </div>
        </main>
    );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Dashboard;