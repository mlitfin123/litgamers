import React from 'react';
import Sidebar from './Sidebar';

const Contact = () => {
    return (
        <main>
            <div class="row">
                <div>
                    <Sidebar />
                </div>
                <div class="col">
                    <h1 className="title">Contact</h1>
                </div>
            </div>
        </main>
    );
}

export default Contact;