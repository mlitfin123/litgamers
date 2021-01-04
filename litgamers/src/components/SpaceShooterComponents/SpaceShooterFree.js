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
            <div class="row">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <h1 className="title">Space Shooters!</h1>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
            <div id="unity-container" class="unity-desktop">
                <Unity unityContext={unityContext} width="1060px" height="600px"/>
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