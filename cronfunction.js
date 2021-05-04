const playfab = require('playfab-sdk')
require('dotenv').config();

function login(){
    playfab.PlayFab.settings.titleId = "1DF75";
    playfab.PlayFab.settings.developerSecretKey = process.env.DEVSECRET
        var loginRequest = {
            Email: process.env.EMAIL,
            Password: process.env.PASSWORD,
            TitleId: playfab.PlayFab.settings.titleId
        };
        playfab.PlayFabClient.LoginWithEmailAddress(loginRequest, function (error, result)
        {
            console.log(result)});
        }
function getPong5Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "HotSauceDaily.05",
            MaxResultsCount: 50
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var pong5Leaderboard = result.data.Leaderboard;
            var total = (pong5Leaderboard.length) * .05
            console.log(pong5Leaderboard[0].PlayFabId)
            console.log(pong5Leaderboard[1].PlayFabId)
            console.log(pong5Leaderboard.length)
            console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (pong5Leaderboard.length < 4) {
            var firstPlace = {
                Amount: Math.ceil((total * .55) * 100),
                PlayFabId: pong5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .20) * 100),
                PlayFabId: pong5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            console.log(firstPlace)
            console.log(secondPlace)
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log(result)
            })
        }
        else if (pong5Leaderboard.length >= 5 < 10) {
            var firstPlace = {
                Amount: Math.ceil((total * .44 ) * 100),
                PlayFabId: pong5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .24 ) * 100),
                PlayFabId: pong5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total * .12 ) * 100),
                PlayFabId: pong5Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log(result)
            })
        }
        else if (pong5Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total * .26 ) * 100),
                PlayFabId: pong5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .20 ) * 100),
                PlayFabId: pong5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total * .16 ) * 100),
                PlayFabId: pong5Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total * .10 ) * 100),
                PlayFabId: pong5Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total * .06 ) * 100),
                PlayFabId: pong5Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log(result)
            })
        }
    });
}

module.exports = {
    login,
    getPong5Leaderboard
    }