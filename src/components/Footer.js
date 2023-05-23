import Logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <section className='footer-content'>
                <img alt="Little Lemon Restaurant" src={Logo}/>
                <section className='footer-navigation'>
                    <h5 className='navigation-heading'>Doormat Navigation</h5>
                    <ul>
                        <li className="navigation-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to="/" className="nav-link">About</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to="/" className="nav-link">Menu</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to="/booking" className="nav-link">Reservations</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to="/" className="nav-link">Order Online</Link>
                        </li>
                        <li className="navigation-item">
                            <Link to="/" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </section>
                <section className='footer-contact'>
                    <h5 className='contact-heading'>Contact</h5>
                    <ul>
                        <li className='contact-item'>Address</li>
                        <li className='contact-item'>Phone Number</li>
                        <li className='contact-item'>Email</li>
                    </ul>
                </section>
                <section className='footer-social'>
                    <h5 className='social-heading'>Social Media Links</h5>
                    <ul>
                        <li className='social-item'>Facebook</li>
                        <li className='social-item'>Instagram</li>
                        <li className='social-item'>Twitter</li>
                    </ul>
                </section>
            </section>
            <section className='footer-copyright'>
                <h5 className='copyright-heading'>&copy; 2023 Little Lemon Restaurant</h5>
            </section>
        </footer>
    );
}

export default Footer;