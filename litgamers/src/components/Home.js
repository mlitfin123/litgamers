import React from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const Home = () => {

    const spaceshooter = 'https://litgamers-server.herokuapp.com/space'
    
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
                                <div id="sauce" className="games">
                                    <Link to="/saucefree"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
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