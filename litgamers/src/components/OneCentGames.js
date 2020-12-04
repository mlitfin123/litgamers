import React from 'react';
import Sidebar from './Sidebar';

const OneCent = () => {
    const fieryredhead = 'http://localhost:3001/fiery'
    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div class="col">
                <h1 className="title">1¢ Tournaments</h1>
                    <div id="fiery" className="games">
                        <a href={fieryredhead}><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                        <h3 className="gameLabel">Fiery Redhead</h3></a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OneCent;