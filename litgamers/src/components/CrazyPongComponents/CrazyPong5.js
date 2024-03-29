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

export default function CrazyPong5(props) {
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
            StatisticName: "CrazyPongDaily5",
            Value: finalScore
          }
        ]
      }
      PlayFabClient.UpdatePlayerStatistics(statisticsUpdate, function (error, result)
      {
        if (result != null){
          alert("Your Final Score is: " + finalScore + "!")
          alert("Play again to improve your score or play another game! Scores will be reset on Sunday night after 12 PM EST.")
          props.history.push('/fivedollar');
          console.log("Leaderboard Updated!")}
          else if (result == null) {
            alert("Something went wrong sending the leaderboard, please contact us")
            props.history.push('/fivedollar');
          }
        })
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
        if (balance <= 5 ){
            alert("Your account is inneficient, please deposit additional funds")
            props.history.push('/fivedollar');
        }
        else {
          verifyPayment();
        }
      }
      
      const verifyPayment = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (window.confirm("Please confirm $5 charge to your account to enter this tournament! You will be charged upon clicking Ok.") == false)
        {
          props.history.push('/fivedollar');
        }
        else {
          alert("Do not refresh or navigate to another page until your score has been sent to the leaderboard at the end of the game, good luck!.")
          var subtractCurrency = {
            Amount: 500,
            VirtualCurrency: "US"
          }
          PlayFabClient.SubtractUserVirtualCurrency(subtractCurrency, function (error, result){
            if (result != null) {
              sessionStorage.setItem("balance", (balance - 5).toFixed(2));
              getBalance();
            }
            else {
              alert("There was an error charging your account")
              props.history.push('/fivedollar');
            }
          })
        }
      }

      async function getLeaderboard(){
        await new Promise(resolve => setTimeout(resolve, 1500));
        var leaderboard = {
                StartPosition: 0,
                StatisticName: "CrazyPongDaily5",
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
            {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (
            <div>
            <div className="row">
              <div className="col-12">
                <h1 className="title">Crazy Pong!</h1>
              </div>
            </div>
            <div className="row">
            <div className="col-12">
                <div id="not-available"><h4>This game is not available on this screen size</h4></div>
            <div id="unity-container" class="unity-desktop">
            <Unity unityContext={unityContext} width="100%" height="100%"/>
                <div id="unity-loading-bar">
                    <div id="unity-logo"></div>
                    <div id="unity-progress-bar-empty">
                    <div id="unity-progress-bar-full"></div>
                    </div>
                </div>
                <div id="unity-footer">
                    <button id="unity-fullscreen-button" onClick={onFullScreen}></button>
                </div>
                <br></br>
                <div className="controls">
                <h4><u>Controls</u></h4>
                    <ol>On PC use the left and right arrows to move back and forth to block the ball from hitting the bottom of the screen.</ol>
                    <ol>The mouse can also be used by clicking on either side of the paddle to move in the corresponding direction.</ol>
                    <ol>Attempt to direct the ball to avoid the grenades and collect gems and crates.</ol>
                    <span style={{ color: 'red' }}>Warning: This game works best on PC</span>
                    <ol>On mobile touch the screen to the right of the paddle to move to the right and left to move left.</ol>
                <h4><u>Scoring</u></h4>
                    <ol>Crate = 50 points</ol>
                    <ol>Gem = 10 points</ol>
                    <ol>Top-of-Screen = 1 point</ol>
                    <ol>Bottom-of-Screen = -1 life</ol>
                </div>
            </div>
            </div> 
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="title">Leaderboard</h2>
                    <ol className="leaderboardList">
                        {leaders.map((leaderMapped, index) => (
                            <li key={`${leaderMapped.DisplayName}_${leaderMapped.StatValue}`} className="leaderboardItem">{leaderMapped.DisplayName}: {leaderMapped.StatValue}</li>
                        ))}
                    </ol>
                </div>
              </div>
            </div>)
            :
            <div>
                <div className="row">
                    <div className="col-2">
                        <h2 className="title">Leaderboard</h2>
                    </div>
                    <div className="col-7">
                        <h1 className="title">Crazy Pong!</h1>
                    </div>
                    <div className="col-3"></div>
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
                    <div id="not-available"><h4>This game is not available on this screen size</h4></div>
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
                    <br></br>
                    <h4><u>Controls</u></h4>
                    <ol>On PC use the left and right arrows to move back and forth to block the ball from hitting the bottom of the screen.</ol>
                    <ol>The mouse can also be used by clicking on either side of the paddle to move in the corresponding direction.</ol>
                    <ol>Attempt to direct the ball to avoid the grenades and collect gems and crates.</ol>
                    <span style={{ color: 'red' }}>Warning: This game works best on PC</span>
                    <ol>On mobile touch the screen to the right of the paddle to move to the right and left to move left.</ol>
                  <h4><u>Scoring</u></h4>
                    <ol>Crate = 50 points</ol>
                    <ol>Gem = 10 points</ol>
                    <ol>Top-of-Screen = 1 point</ol>
                    <ol>Bottom-of-Screen = -1 life</ol>
                </div>
                </div>
                </div>
                <div className="col-3"></div>
                </div>
              }
        </main>
    ) ;
}