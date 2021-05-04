import React, { useState, useEffect} from "react";
import '../../utils/TemplateData/style.css'
import Unity, { UnityContext } from "react-unity-webgl";
import {PlayFabClient} from 'playfab-sdk';

let unityContext = new UnityContext({
  codeUrl: "/games/CrazyPong/Build/Crazy_Pong Web.wasm.unityweb",
  loaderUrl: "/games/CrazyPong/Build/Crazy_Pong Web.loader.js",
  frameworkUrl: "/games/CrazyPong/Build/Crazy_Pong Web.framework.js.unityweb",
  dataUrl: "/games/CrazyPong/Build/Crazy_Pong Web.data.unityweb",
});

export default function CrazyPong01(props) {
  const [progression, setProgression] = useState(0);
  const [leaders, setLeaderboard] = useState([]);
  const [balance1, setBalance] = useState('');
  useEffect(()=>{
    getBalance();
    getLeaderboard()
    launchGame();
    }, [])

  unityContext.on("progress", progressionVal => {
    setProgression(progressionVal * 100);
    console.log(progression);
    });
  unityContext.on('loaded', () => {
    console.log('Done Loading!');
  });
  unityContext.on('receiveMessageFromUnity',  async function receiveMessageFromUnity(txt) {
    // Get element to assign the message
    const finalScore = txt;
    console.log("final" + " " + finalScore)
  
    await new Promise(resolve => setTimeout(resolve, 2000));
    var statisticsUpdate = 
      {
          PlayFabId: "1DF75",
          Statistics:[
          {
            StatisticName: "CrazyPongDaily",
            Value: finalScore
          }
        ]
      }
      PlayFabClient.UpdatePlayerStatistics(statisticsUpdate, function (error, result)
      {
        if (result != null){
          var subtractCurrency = {
            Amount: 1,
            VirtualCurrency: "US"
          }
          PlayFabClient.SubtractUserVirtualCurrency(subtractCurrency, function (error, result){
            sessionStorage.setItem("balance", (balance1 - .01).toFixed(2));
          })
          console.log("Leaderboard Updated!")}
          else if (result == null) {
            alert("Something went wrong sending the leaderboard, please contact us")
          }
        })
        alert("Play again to improve your score or play another game! Scores will be reset tomorrow.")
        props.history.push('/onecent');
    }
  );

  const onFullScreen = () => {
    unityContext.setFullscreen(true);
    };
    var balance;

    const getBalance = async () => {
      balance = sessionStorage.balance;
      setBalance(balance)
    }
    
    const launchGame = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
        if (balance <= .01 ){
            alert("Your account is inneficient, please deposit additional funds")
            props.history.push('/onecent');
        }
        else {
          verifyPayment();
        }
      }
      
      const verifyPayment = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (window.confirm("Please confirm 1¢ charge to your account to enter this tournament! You will only be charged if you finish the game and your score is sent to the leaderboard") == false)
        {
          props.history.push('/onecent');
        }
      }

      async function getLeaderboard(){
        await new Promise(resolve => setTimeout(resolve, 1500));
        var leaderboard = {
                StartPosition: 0,
                StatisticName: "CrazyPongDaily",
                MaxResultsCount: 50
            };
        PlayFabClient.GetLeaderboard(leaderboard, function (error, result)
                {
                    setLeaderboard(result.data.Leaderboard);
                    console.log(leaders)
                });
            }
    
      return (
        <main>
            <header>
                { balance !== null && (
                    <div className="balance">
                        <span className="balance1">Balance: ${balance1}</span>
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
                <div className="col-1">
                    <h2 className="title">Leaderboard</h2>
                </div>
                <div className="col-8">
                    <h1 className="title">Crazy Pong!</h1>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-2">
                  <ol className="leaderboardList">
                      {leaders.map((leaderMapped, index) => (
                          <li key={`${leaderMapped.DisplayName}_${leaderMapped.StatValue}`} className="leaderboardItem">{leaderMapped.DisplayName}: {leaderMapped.StatValue}</li>
                      ))}
                  </ol>
                </div>
                <div className="col-7">
            <div id="unity-container" class="unity-desktop">
                <Unity unityContext={unityContext} width="960px" height="600px"/>
                <div id="unity-loading-bar">
                    <div id="unity-logo"></div>
                    <div id="unity-progress-bar-empty">
                    <div id="unity-progress-bar-full"></div>
                    </div>
                </div>
                <div id="unity-footer">
                <button id="unity-fullscreen-button" onClick={onFullScreen}></button>
                </div>
            </div>
            </div>
            </div>
            <div className="col-3"></div>
        </main>
    ) ;
}