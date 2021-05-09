import React, { useState, useEffect }from 'react';
import '../../utils/TemplateData/style.css'
import Unity, { UnityContext } from "react-unity-webgl";

let unityContext = new UnityContext({
    codeUrl: "/games/HotSauce/Build/HotSauce Fury Web.wasm.unityweb",
    loaderUrl: "/games/HotSauce/Build/HotSauce Fury Web.loader.js",
    frameworkUrl: "/games/HotSauce/Build/HotSauce Fury Web.framework.js.unityweb",
    dataUrl: "/games/HotSauce/Build/HotSauce Fury Web.data.unityweb",
});

export default function HotSauceFree(props) {
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
    unityContext.on('receiveMessageFromUnity',  async function receiveMessageFromUnity(txt) {
        // Get element to assign the message
        const finalScore = txt;
        console.log("final" + " " + finalScore)

        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Play again or play another game!")
        props.history.push('/free');
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
                    <h1 className="title">Hot Sauce Fury!</h1>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
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
                <h4>Controls</h4>
                    <ol>On PC use the left and right arrows to dodge the hot sauce and collect the food and snacks.</ol>
                    <ol>Not currently Mobile friendly.</ol>
                <h4>Scoring</h4>
                    <ol>Chocolate = 100 points</ol>
                    <ol>Food = Random points between 7 and 12</ol>
                    <ol>Hot Sauce = -1 life</ol>
            </div>
            </div>
            </div>
            <div className="col-3"></div>
        </main>
    ) ;
}