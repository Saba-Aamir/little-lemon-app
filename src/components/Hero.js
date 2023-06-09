import Button from "./Button";
import Image from "../assets/images/RestaurantFood.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-section">
            <section className="hero-text-block">
                <h1 className="hero-heading">Little Lemon</h1>
                <h3 className='hero-subheading'>Chicago</h3>
                <p className='hero-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button text='Reserve a Table' onClick={() => navigate("/booking")}/>
            </section>
            <section className="hero-image-block">
                <img className="hero-image" alt="Restaurant Food" src={Image}/>
            </section>
        </section>
    );
}

export default Hero;