import React from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const FreeGames = () => {

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
                                    <Link to="/saucefree"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div id="space" className="games">
                                    <Link to="/spacefree"><img src="..\images\Space_Shooter icon.png" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Space Shooter</h3></Link>
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