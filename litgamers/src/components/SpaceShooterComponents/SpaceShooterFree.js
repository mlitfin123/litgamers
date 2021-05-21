import React, { useState, useEffect }from 'react';
import '../../utils/TemplateData/style.css'
import Unity, { UnityContext } from "react-unity-webgl";

let unityContext = new UnityContext({
    codeUrl: "/games/SpaceShooters/Build/Space_Shooter Web.wasm.unityweb",
    loaderUrl: "/games/SpaceShooters/Build/Space_Shooter Web.loader.js",
    frameworkUrl: "/games/SpaceShooters/Build/Space_Shooter Web.framework.js.unityweb",
    dataUrl: "/games/SpaceShooters/Build/Space_Shooter Web.data.unityweb",
});

export default function SpaceShooterFree(props) {
    const [balance, setBalance] = useState('');

    useEffect(() => {
        getBalance();
    })

    const getBalance = async () => {
        if (sessionStorage.getItem("balance")) {
            setBalance(sessionStorage.balance);
            console.log(balance)
        }
        else {
            setBalance(null);
            console.log(balance)
        }
    }
    const [progression, setProgression] = useState(0);

    unityContext.on("progress", progressionVal => {
        setProgression(progressionVal * 100);
        console.log(progression);
        });
    unityContext.on('loaded', () => {
        console.log('Done Loading!');
    });

    const onFullScreen = () => {
        unityContext.setFullscreen(true);
    };
    
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
                <h1 className="title">Space Shooters!</h1>
                <div id="not-available"><h4>This game is not available on this screen size</h4></div>
            <div id="unity-container" class="unity-desktop">
                {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (<Unity unityContext={unityContext} width="100%" height="100%"/>) :
                (<Unity unityContext={unityContext} width="1060px" height="600px"/>)
            }
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
                    <ol>On PC use the up and down arrows to dodge the meteors and enemy ships.</ol>
                    <ol>The mouse can also be used by clicking on either side of the ship to move in the corresponding direction.</ol>
                    <ol>Press the space bar or click the mouse to shoot.</ol>
                    <ol>Destroy the boss ship at the end of the level to advance to the next level.</ol>
                    <ol>Game is over after your ship is destroyed 3 times.</ol>
                    <span style={{ color: 'red' }}>Warning: This game works best on PC</span>
                    <ol>On mobile touch the screen above the ship to move up and below the ship to move down.</ol>
                    <ol>On mobile touch the screen to shoot.</ol>
                <h4><u>Scoring</u></h4>
                    <ol>Basic Enemy Ship = 10 points</ol>
                    <ol>Meteor = 10 points</ol>
                    <ol>Advanced Enemy Ship = 15 points</ol>
                    <ol>Boss = 100 points</ol>
                    <ol>Player Ship Destroyed = -1 life</ol>
                </div>
            </div>
        </main>
    ) ;
}