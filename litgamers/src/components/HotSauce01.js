import React, { Component, useState, useEffect} from "react";
import '../utils/TemplateData/style.css'
import Unity, { UnityContext } from "react-unity-webgl";
import {PlayFabClient} from 'playfab-sdk';

let unityContext = new UnityContext({
  codeUrl: "/games/HotSauce/Build/HotSauce Fury Web.wasm.unityweb",
  loaderUrl: "/games/HotSauce/Build/HotSauce Fury Web.loader.js",
  frameworkUrl: "/games/HotSauce/Build/HotSauce Fury Web.framework.js.unityweb",
  dataUrl: "/games/HotSauce/Build/HotSauce Fury Web.data.unityweb",
});

export default function HotSauce01(props) {
  const [progression, setProgression] = useState(0);
  useEffect(()=>{
    getBalance();
    launchGame();
    verifyPayment();
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
            StatisticName: "HotSauceDaily.50",
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
    }
    
    const launchGame = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
        if (balance <= .01 ){
            alert("Your account is inneficient, please deposit additional funds")
            props.history.push('/onecent');
        }
      }
      
      const verifyPayment = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (window.confirm("Please confirm 1¢ charge to your account to enter this tournament! You will only be charged if you finish the game and your score is sent to the leaderboard") == false)
        {
          props.history.push('/onecent');
        }
      }
    
        return (
          <main>
              <h1 className="title">Hot Sauce Fury!</h1>
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
      </main>
      ) ;
    }
  