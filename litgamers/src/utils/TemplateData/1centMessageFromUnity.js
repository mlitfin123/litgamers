async function receiveMessageFromUnity(txt) {
    // Get element to assign the message
    const finalScore = txt;
    console.log("final" + " " + finalScore)
  
    await new Promise(resolve => setTimeout(resolve, 2000));
    var statisticsUpdate = 
      {
          PlayFabId: "1DF75",
          Statistics:[
          {
            StatisticName: "HotSauceDaily.50",
            Value: finalScore
          }
        ]
      }
    console.log(statisticsUpdate)
      PlayFabClient.UpdatePlayerStatistics(statisticsUpdate, function (result, error)
      {console.log(result)
        if (result != null){
          var subtractCurrency = {
            Amount: 50,
            VirtualCurrency: "US"
          }
          PlayFabClient.SubtractUserVirtualCurrency(subtractCurrency, function (result, error){
            console.log(result)
          })
          console.log("leaderboardupdated")}
          else if (result == null) {
            alert("Something went wrong sending the leaderboard, please contact us")
          }
        })
  }