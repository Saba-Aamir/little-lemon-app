import Logo from '../assets/images/Logo.svg';

const Header = () => {
    return (
        <header className="app-header">
            <img alt="Little Lemon Logo" src={Logo}/>
        </header>
    );
}

export default Header;