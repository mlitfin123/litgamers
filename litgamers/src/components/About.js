import React from 'react';
import Sidebar from './Sidebar';

const About = () => {
    return (
    <main>
        <div class="row">
            <div>
                <Sidebar />
            </div>
            <div class="col">
                <h1 className="title">About</h1>
            </div>
        </div>
    </main>
    );
}

export default About;