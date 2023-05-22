import React, { useState } from 'react';
import Header from './Header';
import Hamburger from '../assets/images/hamburger.png';
import Cross from '../assets/images/cross.png';

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
        <nav className="app-nav">
            <Header/>
            <section className="hamburger" onClick={() => setShowNav(!showNav)}>
                <img alt="Hamburger" src={showNav ? Cross : Hamburger}/>
            </section>
            <ul className="navbar">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Reservations</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Order Online</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Login</a>
                </li>
            </ul>
        </nav>
        {showNav && (
            <nav className='mobile-nav'>
                <ul className="mobile-navbar">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Reservations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Order Online</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                </ul>
            </nav>
        )}
        </>
    );
}

export default Nav;