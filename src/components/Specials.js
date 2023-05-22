import Button from "./Button";
import Card from "./Card";
import GreekSalad from '../assets/images/greek salad.jpg';
import Bruchetta from '../assets/images/bruchetta.svg';
import LemonDessert from '../assets/images/lemon dessert.jpg';

const Specials = () => {
    return (
        <section className="specials-section">
            <section className="specials-header">
                <h1 className="specials-heading">This week’s specials!</h1>
                <Button text="Online Menu" onClick={() => console.log('Online Menu!')}/>
            </section>
            <section className="specials-card-container">
                <Card image={GreekSalad} title={"Greek Salad"} price={"12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}/>
                <Card image={Bruchetta} title={"Bruchetta"} price={"5.99"} description={"Our Bruschetta is made from perfectly grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}/>
                <Card image={LemonDessert} title={"Lemon Dessert"} price={"5.00"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}/>
            </section>
        </section>
    );
}

export default Specials;