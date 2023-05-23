import React, { useState } from 'react';
import Header from './Header';
import Hamburger from '../assets/images/hamburger.png';
import Cross from '../assets/images/cross.png';
import { Link } from 'react-router-dom';

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
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link to="/booking" className="nav-link">Reservations</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Order Online</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
        {showNav && (
            <nav className='mobile-nav'>
                <ul className="mobile-navbar">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/booking" className="nav-link">Reservations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Order Online</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Login</Link>
                    </li>
                </ul>
            </nav>
        )}
        </>
    );
}

export default Nav;