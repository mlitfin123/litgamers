import React from 'react';
import Sidebar from './Sidebar';

const FiftyCent = () => {
    const fieryredhead = 'http://localhost:3001/fiery'
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
                            <li>2nd: $0.30 minimum + split pot</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h7>5 to 9 player entries</h7>
                        <ul>
                            <li>1st: $1.13 minimum + split pot</li>
                            <li>2nd: $0.63 minimum + split pot</li>
                            <li>3rd: $0.38 minimum + split pot</li>
                        </ul>
                    </div>
                        <div class="col">
                            <h7>10 or more player entries</h7>
                            <ul>
                                <li>1st: $1.35 minimum + split pot</li>
                                <li>2nd: $1.10 minimum + split pot</li>
                                <li>3rd: $0.85 minimum + split pot</li>
                                <li>4th: $0.60 minimum + split pot</li>
                                <li>5th: $0.40 minimum + split pot</li>
                            </ul>
                        </div>
                    </div>
                    <table class="table">
                        <tbody>
                            <tr>
                            <td>
                                <div id="fiery" className="games">
                                    <a href={fieryredhead}><img src="..\images\Icon.PNG" alt="play the game" width="150px"></img>
                                    <h3 className="gameLabel">Fiery Redhead</h3></a>
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