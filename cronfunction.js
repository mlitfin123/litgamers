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
function getPongDailyLeaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "CrazyPongDaily"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var pongDailyLeaderboard = result.data.Leaderboard;
            var total = (pongDailyLeaderboard.length) * .01
            // console.log(pongDailyLeaderboard[0].PlayFabId)
            // console.log(pongDailyLeaderboard[1].PlayFabId)
            // console.log(pongDailyLeaderboard.length)
            console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (pongDailyLeaderboard.length == 1) {
                var firstPlace = {
                    Amount: 2,
                    PlayFabId: pongDailyLeaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (pongDailyLeaderboard.length >= 2 && pongDailyLeaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total * .55) * 100),
                PlayFabId: pongDailyLeaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total * .20) * 100),
                PlayFabId: pongDailyLeaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (pongDailyLeaderboard.length >= 5 && pongDailyLeaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total * .43 ) * 100),
                PlayFabId: pongDailyLeaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .22 ) * 100),
                PlayFabId: pongDailyLeaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total * .10 ) * 100),
                PlayFabId: pongDailyLeaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (pongDailyLeaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total * .25 ) * 100),
                PlayFabId: pongDailyLeaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .20 ) * 100),
                PlayFabId: pongDailyLeaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total * .15 ) * 100),
                PlayFabId: pongDailyLeaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total * .10 ) * 100),
                PlayFabId: pongDailyLeaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total * .05 ) * 100),
                PlayFabId: pongDailyLeaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getPong05Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "CrazyPongDaily.05"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var pong05Leaderboard = result.data.Leaderboard;
            var total05 = (pong05Leaderboard.length) * .05
            // console.log(pong05Leaderboard[0].PlayFabId)
            // console.log(pong05Leaderboard[1].PlayFabId)
            // console.log(pong05Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (pong05Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 6,
                    PlayFabId: pong05Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (pong05Leaderboard.length >= 2 && pong05Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total05 * .55) * 100),
                PlayFabId: pong05Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total05 * .20) * 100),
                PlayFabId: pong05Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (pong05Leaderboard.length >= 5 && pong05Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total05 * .43 ) * 100),
                PlayFabId: pong05Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total05 * .22 ) * 100),
                PlayFabId: pong05Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total05 * .10 ) * 100),
                PlayFabId: pong05Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (pong05Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total05 * .25 ) * 100),
                PlayFabId: pong05Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total05 * .20 ) * 100),
                PlayFabId: pong05Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total05 * .15 ) * 100),
                PlayFabId: pong05Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total05 * .10 ) * 100),
                PlayFabId: pong05Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total05 * .05 ) * 100),
                PlayFabId: pong05Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getPong50Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "CrazyPongDaily.50"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var pong50Leaderboard = result.data.Leaderboard;
            var total50 = (pong50Leaderboard.length) * .50
            // console.log(pong50Leaderboard[0].PlayFabId)
            // console.log(pong50Leaderboard[1].PlayFabId)
            // console.log(pong50Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (pong50Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 55,
                    PlayFabId: pong50Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            if (pong50Leaderboard.length >= 2 && pong50Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total50 * .55) * 100),
                PlayFabId: pong50Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total50 * .20) * 100),
                PlayFabId: pong50Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (pong50Leaderboard.length >= 5 && pong50Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total50 * .43 ) * 100),
                PlayFabId: pong50Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total50 * .22 ) * 100),
                PlayFabId: pong50Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total50 * .10 ) * 100),
                PlayFabId: pong50Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (pong50Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total50 * .25 ) * 100),
                PlayFabId: pong50Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total50 * .20 ) * 100),
                PlayFabId: pong50Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total50 * .15 ) * 100),
                PlayFabId: pong50Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total50 * .10 ) * 100),
                PlayFabId: pong50Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total50 * .05 ) * 100),
                PlayFabId: pong50Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getPong1Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "CrazyPongDaily1"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var pong1Leaderboard = result.data.Leaderboard;
            var total1 = (pong1Leaderboard.length) * 1
            // console.log(pong1Leaderboard[0].PlayFabId)
            // console.log(pong1Leaderboard[1].PlayFabId)
            // console.log(pong1Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (pong1Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 110,
                    PlayFabId: pong1Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (pong1Leaderboard.length >= 2 && pong1Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total1 * .55) * 100),
                PlayFabId: pong1Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total1 * .20) * 100),
                PlayFabId: pong1Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)

            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (pong1Leaderboard.length >= 5 && pong1Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total1 * .43 ) * 100),
                PlayFabId: pong1Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total1 * .22 ) * 100),
                PlayFabId: pong1Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total1 * .10 ) * 100),
                PlayFabId: pong1Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (pong1Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total1 * .25 ) * 100),
                PlayFabId: pong1Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total1 * .20 ) * 100),
                PlayFabId: pong1Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total1 * .15 ) * 100),
                PlayFabId: pong1Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total1 * .10 ) * 100),
                PlayFabId: pong1Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total1 * .05 ) * 100),
                PlayFabId: pong1Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getPong5Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "CrazyPongDaily5"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var pong5Leaderboard = result.data.Leaderboard;
            var total5 = (pong5Leaderboard.length) * 5
            // console.log(pong5Leaderboard[0].PlayFabId)
            // console.log(pong5Leaderboard[1].PlayFabId)
            // console.log(pong5Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (pong5Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 550,
                    PlayFabId: pong5Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (pong5Leaderboard.length >= 1 && pong5Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total5 * .55) * 100),
                PlayFabId: pong5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total5 * .20) * 100),
                PlayFabId: pong5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (pong5Leaderboard.length >= 5 && pong5Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total5 * .43 ) * 100),
                PlayFabId: pong5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total5 * .22 ) * 100),
                PlayFabId: pong5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total5 * .10 ) * 100),
                PlayFabId: pong5Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (pong5Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total5 * .25 ) * 100),
                PlayFabId: pong5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total5 * .20 ) * 100),
                PlayFabId: pong5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total5 * .15 ) * 100),
                PlayFabId: pong5Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total5 * .10 ) * 100),
                PlayFabId: pong5Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total5 * .05 ) * 100),
                PlayFabId: pong5Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getSauceDailyLeaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "HotSauceDaily"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var sauceDailyLeaderboard = result.data.Leaderboard;
            var total = (sauceDailyLeaderboard.length) * .01
            // console.log(sauceDailyLeaderboard[0].PlayFabId)
            // console.log(sauceDailyLeaderboard[1].PlayFabId)
            // console.log(sauceDailyLeaderboard.length)
            console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (sauceDailyLeaderboard.length == 1) {
                var firstPlace = {
                    Amount: 2,
                    PlayFabId: sauceDailyLeaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (sauceDailyLeaderboard.length >= 2 && sauceDailyLeaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total * .55) * 100),
                PlayFabId: sauceDailyLeaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log(firstPlace)
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total * .20) * 100),
                PlayFabId: sauceDailyLeaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (sauceDailyLeaderboard.length >= 5 && sauceDailyLeaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total * .43 ) * 100),
                PlayFabId: sauceDailyLeaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .22 ) * 100),
                PlayFabId: sauceDailyLeaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total * .10 ) * 100),
                PlayFabId: sauceDailyLeaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (sauceDailyLeaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total * .25 ) * 100),
                PlayFabId: sauceDailyLeaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total * .20 ) * 100),
                PlayFabId: sauceDailyLeaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total * .15 ) * 100),
                PlayFabId: sauceDailyLeaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total * .10 ) * 100),
                PlayFabId: sauceDailyLeaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total * .05 ) * 100),
                PlayFabId: sauceDailyLeaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getSauce05Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "HotSauceDaily.05"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var sauce05Leaderboard = result.data.Leaderboard;
            var total05 = (sauce05Leaderboard.length) * .05
            // console.log(sauce05Leaderboard[0].PlayFabId)
            // console.log(sauce05Leaderboard[1].PlayFabId)
            // console.log(sauce05Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (sauce05Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 6,
                    PlayFabId: pongDailyLeaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            if (sauce05Leaderboard.length >= 2 && sauce05Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total05 * .55) * 100),
                PlayFabId: sauce05Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total05 * .20) * 100),
                PlayFabId: sauce05Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)

            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (sauce05Leaderboard.length >= 5 && sauce05Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total05 * .43 ) * 100),
                PlayFabId: sauce05Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total05 * .22 ) * 100),
                PlayFabId: sauce05Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total05 * .10 ) * 100),
                PlayFabId: sauce05Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (sauce05Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total05 * .25 ) * 100),
                PlayFabId: sauce05Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total05 * .20 ) * 100),
                PlayFabId: sauce05Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total05 * .15 ) * 100),
                PlayFabId: sauce05Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total05 * .10 ) * 100),
                PlayFabId: sauce05Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total05 * .05 ) * 100),
                PlayFabId: sauce05Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getSauce50Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "HotSauceDaily.50"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var sauce50Leaderboard = result.data.Leaderboard;
            var total50 = (sauce50Leaderboard.length) * .50
            // console.log(sauce50Leaderboard[0].PlayFabId)
            // console.log(sauce50Leaderboard[1].PlayFabId)
            // console.log(sauce50Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (sauce50Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 55,
                    PlayFabId: sauce50Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (sauce50Leaderboard.length >= 2 && sauce50Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total50 * .55) * 100),
                PlayFabId: sauce50Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total50 * .20) * 100),
                PlayFabId: sauce50Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (sauce50Leaderboard.length >= 5 && sauce50Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total50 * .43 ) * 100),
                PlayFabId: sauce50Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total50 * .22 ) * 100),
                PlayFabId: sauce50Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total50 * .10 ) * 100),
                PlayFabId: sauce50Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (sauce50Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total50 * .25 ) * 100),
                PlayFabId: sauce50Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total50 * .20 ) * 100),
                PlayFabId: sauce50Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total50 * .15 ) * 100),
                PlayFabId: sauce50Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total50 * .10 ) * 100),
                PlayFabId: sauce50Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total50 * .05 ) * 100),
                PlayFabId: sauce50Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getSauce1Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "HotSauceDaily1"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var sauce1Leaderboard = result.data.Leaderboard;
            var total1 = (sauce1Leaderboard.length) * 1
            // console.log(sauce1Leaderboard[0].PlayFabId)
            // console.log(sauce1Leaderboard[1].PlayFabId)
            // console.log(sauce1Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (sauce1Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 110,
                    PlayFabId: sauce1Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (sauce1Leaderboard.length >= 2 && sauce1Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total1 * .55) * 100),
                PlayFabId: sauce1Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total1 * .20) * 100),
                PlayFabId: sauce1Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)

            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (sauce1Leaderboard.length >= 5 && sauce1Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total1 * .43 ) * 100),
                PlayFabId: sauce1Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total1 * .22 ) * 100),
                PlayFabId: sauce1Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total1 * .10 ) * 100),
                PlayFabId: sauce1Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (sauce1Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total1 * .25 ) * 100),
                PlayFabId: sauce1Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total1 * .20 ) * 100),
                PlayFabId: sauce1Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total1 * .15 ) * 100),
                PlayFabId: sauce1Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total1 * .10 ) * 100),
                PlayFabId: sauce1Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total1 * .05 ) * 100),
                PlayFabId: sauce1Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}
function getSauce5Leaderboard(){
    var leaderboard = {
            StartPosition: 0,
            StatisticName: "HotSauceDaily5"
            
        };
    playfab.PlayFabClient.GetLeaderboard(leaderboard, async function (error, result)
        {
            console.log(result)
            var sauce5Leaderboard = result.data.Leaderboard;
            var total5 = (sauce5Leaderboard.length) * 5
            // console.log(sauce5Leaderboard[0].PlayFabId)
            // console.log(sauce5Leaderboard[1].PlayFabId)
            // console.log(sauce5Leaderboard.length)
            // console.log(total)
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (sauce5Leaderboard.length == 1) {
                var firstPlace = {
                    Amount: 550,
                    PlayFabId: sauce5Leaderboard[0].PlayFabId,
                    VirtualCurrency: "US"
                };
                playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
                {
                    console.log("1st")
                    console.log(result)
                })
            }
            else if (sauce5Leaderboard.length >= 2 && sauce5Leaderboard.length <= 4) {
            var firstPlace = {
                Amount: Math.ceil((total5 * .55) * 100),
                PlayFabId: sauce5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabAdmin.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            var secondPlace = {
                Amount: Math.ceil((total5 * .20) * 100),
                PlayFabId: sauce5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            // console.log(firstPlace)
            // console.log(secondPlace)
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabAdmin.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
        }
        else if (sauce5Leaderboard.length >= 5 && sauce5Leaderboard.length < 10) {
            var firstPlace = {
                Amount: Math.ceil((total5 * .43 ) * 100),
                PlayFabId: sauce5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total5 * .22 ) * 100),
                PlayFabId: sauce5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total5 * .10 ) * 100),
                PlayFabId: sauce5Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
        }
        else if (sauce5Leaderboard.length >= 10 ) {
            var firstPlace = {
                Amount: Math.ceil((total5 * .25 ) * 100),
                PlayFabId: sauce5Leaderboard[0].PlayFabId,
                VirtualCurrency: "US"
            };
            var secondPlace = {
                Amount: Math.ceil((total5 * .20 ) * 100),
                PlayFabId: sauce5Leaderboard[1].PlayFabId,
                VirtualCurrency: "US"
            };
            var thirdPlace = {
                Amount: Math.ceil((total5 * .15 ) * 100),
                PlayFabId: sauce5Leaderboard[2].PlayFabId,
                VirtualCurrency: "US"
            };
            var fourthPlace = {
                Amount: Math.ceil((total5 * .10 ) * 100),
                PlayFabId: sauce5Leaderboard[3].PlayFabId,
                VirtualCurrency: "US"
            };
            var fifthPlace = {
                Amount: Math.ceil((total5 * .05 ) * 100),
                PlayFabId: sauce5Leaderboard[4].PlayFabId,
                VirtualCurrency: "US"
            };
            playfab.PlayFabClient.AddUserVirtualCurrency(firstPlace, function (error, result)
            {
                console.log("1st")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(secondPlace, function (error, result)
            {
                console.log("2nd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(thirdPlace, function (error, result)
            {
                console.log("3rd")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fourthPlace, function (error, result)
            {
                console.log("4th")
                console.log(result)
            })
            await new Promise(resolve => setTimeout(resolve, 2000));
            playfab.PlayFabClient.AddUserVirtualCurrency(fifthPlace, function (error, result)
            {
                console.log("5th")
                console.log(result)
            })
        }
    });
}

async function leaderPayout() {
    login();
    await new Promise(resolve => setTimeout(resolve, 2000));
    getPongDailyLeaderboard();
    await new Promise(resolve => setTimeout(resolve, 3000));
    getPong05Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 4000));
    getPong50Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 5000));
    getPong1Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 6000));
    getPong5Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 7000));
    getSauceDailyLeaderboard();
    await new Promise(resolve => setTimeout(resolve, 8000));
    getSauce05Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 9000));
    getSauce50Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 10000));
    getSauce1Leaderboard();
    await new Promise(resolve => setTimeout(resolve, 11000));
    getSauce5Leaderboard();
};

// leaderPayout();

module.exports = {
    leaderPayout
}