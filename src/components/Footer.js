import Logo from '../assets/images/Logo.svg';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <section className='footer-content'>
                <img alt="Little Lemon Restaurant" src={Logo}/>
                <section className='footer-navigation'>
                    <h5 className='navigation-heading'>Doormat Navigation</h5>
                    <ul>
                        <li className='navigation-item'>
                            <a href="/">Home</a>
                        </li>
                        <li className='navigation-item'>
                            <a href="/">About</a>
                        </li>
                        <li className='navigation-item'>
                            <a href="/">Menu</a>
                        </li>
                        <li className='navigation-item'>
                            <a href="/">Reservations</a>
                        </li>
                        <li className='navigation-item'>
                            <a href="/">Order Online</a>
                        </li>
                        <li className='navigation-item'>
                            <a href="/">Login</a>
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