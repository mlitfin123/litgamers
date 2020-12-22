import React from 'react';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const FiftyCent = () => {
    
    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
            <div class="col">
            <h1 className="title">50¢ Tournaments</h1>
            <h5 className="title"><u>Payouts</u></h5>
                <div class="row">
                    <div class="col">
                        <h7>4 or less player entries</h7>
                        <ul>
                            <li>1st: $0.55 minimum + split pot</li>
                            <li>2nd: $0.20 minimum + split pot</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h7>5 to 9 player entries</h7>
                        <ul>
                            <li>1st: $1.08 minimum + split pot</li>
                            <li>2nd: $0.55 minimum + split pot</li>
                            <li>3rd: $0.25 minimum + split pot</li>
                        </ul>
                    </div>
                        <div class="col">
                            <h7>10 or more player entries</h7>
                            <ul>
                                <li>1st: $1.25 minimum + split pot</li>
                                <li>2nd: $1.00 minimum + split pot</li>
                                <li>3rd: $0.75 minimum + split pot</li>
                                <li>4th: $0.50 minimum + split pot</li>
                                <li>5th: $0.25 minimum + split pot</li>
                            </ul>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                            <tr>
                            <td>
                                <div id="sauce" className="games">
                                    <Link to="/sauce50"><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Hot Sauce Fury</h3></Link>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </main>
    );
}

export default FiftyCent;