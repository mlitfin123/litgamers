import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    let location = useLocation();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setActivePage('home');
            break;
            case '/availablespace':
                setActivePage('availablespace');
            break;
            case '/currenttenants':
                setActivePage('currenttenants');
            break;
            case '/history':
                setActivePage('history');
            break;
            case '/downtown':
                setActivePage('downtown');
            break;
            case '/contact':
                setActivePage('contact');
            break;
            case '/admin':
                setActivePage('admin');
            break;
            default: 
                setActivePage('home');
            break;
    }
}, [location.pathname]);
    return (
        <footer>
            <br></br>
            <br></br>
            <div class="nav justify-content-center">
                <Link id="navFoot" onClick={() => setActivePage('home')} className={activePage === 'home' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
                <Link id="navFoot" onClick={() => setActivePage('about')} className={activePage === 'about' ? 'nav-link active' : 'nav-link'} to="/about">How it Works</Link>
                <Link id="navFoot" onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
            </div>
            <div className="footer-content">
                <p>Copyright � 2020 <b>Fit-To-Tech (FTT) Technologies, LLC</b>&nbsp;&nbsp; All rights reserved.</p>
                Visit the Website <a id="navFoot" href="http://fittotech.net" target="_blank">fittotech.net</a><br></br>
            </div>
        </footer>
    )
}

export default Footer