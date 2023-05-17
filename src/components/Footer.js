import Logo from '../assets/images/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <img alt="Little Lemon Restaurant" src={Logo}/>
            <div>
                <h5>Doormat Navigation</h5>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order Online</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <h5>Contact</h5>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h5>Social Media Links</h5>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div>
                <h5>&copy; 2023 Little Lemon Restaurant</h5>
            </div>
        </footer>
    );
}

export default Footer;