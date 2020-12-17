import React from 'react';
import Sidebar from './Sidebar';

const FreeGames = () => {

    const hotSauce = 'https://litgamers-server.herokuapp.com/sauceFree'
    const spaceshooter = 'https://litgamers-server.herokuapp.com/space'

    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div class="col">
                    <h1 className="title">Free Games</h1>
                    <table class="table">
                        <tbody>
                            <tr>
                            <td>
                                <div id="sauce" className="games">
                                    <a href={hotSauce}><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div id="space" className="games">
                                    <a href={spaceshooter}><img src="..\images\Space_Shooter icon.png" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Space Shooter</h3></a>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default FreeGames;