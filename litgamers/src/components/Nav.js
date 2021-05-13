import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

    let location = useLocation();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setActivePage('home');
            break;
            case '/about':
                setActivePage('about');
            break;
            case '/contact':
                setActivePage('contact');
            break;
            case '/login':
                setActivePage('login');
            break;
            case '/free':
                setActivePage('freegames');
            break;
            case '/onecent':
                setActivePage('onecent');
            break;
            case '/fivecent':
                setActivePage('fivecent');
            break;
            case '/fiftycent':
                setActivePage('fiftycent');
            break;
            case '/onedollar':
                setActivePage('onedollar');
            break;
            case '/fivedollar':
                setActivePage('fivedollar');
            break;
            default: 
                setActivePage('/');
            break;
    }
}, [location.pathname]);

return (
    <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('home')} className={activePage === 'home' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('about')} className={activePage === 'about' ? 'nav-link active' : 'nav-link'} to="/about">How it Works</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link id="navHead" onClick={() => setActivePage('login')} className={activePage === 'login' ? 'nav-link active' : 'nav-link'} to="/login">Login/Dashboard</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Nav;