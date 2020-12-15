import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {

    const fieryredhead = 'http://localhost:4000/fiery'
    const spaceshooter = 'http://localhost:4000/space'
    
    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div className="col">
                    <h1 className="title">Welcome Gamers!</h1>
                    <h3 className="title">Check out our Free Featured games</h3>
                    <table class="table">
                        <tbody>
                            <tr>
                            <td>
                                <div id="fiery" className="games">
                                    <a href={fieryredhead}><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Fiery Redhead</h3></a>
                                </div>
                            </td>
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

export default Home;