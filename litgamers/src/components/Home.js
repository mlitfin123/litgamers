import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div class="col">
                    <h1 className="title">Welcome Gamers!</h1>
                </div>
            </div>
        </main>
    );
}

export default Home;