import React from 'react';
import Sidebar from './Sidebar';

const FreeGames = () => {

    const fieryredhead = 'http://localhost:4000/fiery'
    const spaceshooter = 'http://localhost:4000/space'

    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div class="col">
                    <h1 className="title">Free Games</h1>
                    <div id="fiery" className="games">
                        <a href={fieryredhead}><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                        <h3 className="gameLabel">Fiery Redhead</h3></a>
                    </div>
                    <div id="space" className="games">
                        <a href={spaceshooter}><img src="..\images\Space_Shooter icon.png" alt="play the game" width="150px"></img>
                        <h3 className="gameLabel">Space Shooter</h3></a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FreeGames;