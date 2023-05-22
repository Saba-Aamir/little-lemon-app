import Scooter from '../assets/images/Scooter.png';

const Card = ({ image, title, price, description }) => {
    return (
        <article className="card">
            <section className="card-image">
                <img alt={title} src={image}/>
            </section>
            <section className="card-content">
                <section className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <h3 className="card-price">${price}</h3>
                </section>
                <p className="card-description">{description}</p>
                <h5 className="card-tagline">Order a delivery <img alt="Scooter" src={Scooter}/></h5>
            </section>
        </article>
    );
}

export default Card;