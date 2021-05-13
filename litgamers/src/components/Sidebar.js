import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

    let location = useLocation();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setActivePage('home');
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
                setActivePage('home');
            break;
    }
}, [location.pathname]);

return (
        <div className="sidenav">
            <div id="sidenav-down">
            <div className="navbar-nav">
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('freegames')} className={activePage === 'freegames' ? 'nav-link active' : 'nav-link'} to="/free">Free Games</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('onecent')} className={activePage === 'onecent' ? 'nav-link active' : 'nav-link'} to="/onecent">1¢ Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('fivecent')} className={activePage === 'fivecent' ? 'nav-link active' : 'nav-link'} to="/fivecent">5¢ Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('fiftycent')} className={activePage === 'fiftycent' ? 'nav-link active' : 'nav-link'} to="/fiftycent">50¢ Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('onedollar')} className={activePage === 'onedollar' ? 'nav-link active' : 'nav-link'} to="/onedollar">$1 Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('fivedollar')} className={activePage === 'fivedollar' ? 'nav-link active' : 'nav-link'} to="/fivedollar">$5 Tournaments</Link>
                    </div>
                </div>
            </div>
            <div id="sidenav-across">
                <div class="nav justify-content-center">
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('freegames')} className={activePage === 'freegames' ? 'nav-link active' : 'nav-link'} to="/free">Free Games</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('onecent')} className={activePage === 'onecent' ? 'nav-link active' : 'nav-link'} to="/onecent">1¢ Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('fivecent')} className={activePage === 'fivecent' ? 'nav-link active' : 'nav-link'} to="/fivecent">5¢ Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('fiftycent')} className={activePage === 'fiftycent' ? 'nav-link active' : 'nav-link'} to="/fiftycent">50¢ Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('onedollar')} className={activePage === 'onedollar' ? 'nav-link active' : 'nav-link'} to="/onedollar">$1 Tournaments</Link>
                    </div>
                    <div className="nav-item">
                        <Link id="navSide" onClick={() => setActivePage('fivedollar')} className={activePage === 'fivedollar' ? 'nav-link active' : 'nav-link'} to="/fivedollar">$5 Tournaments</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;