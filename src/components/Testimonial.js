import Star from '../assets/images/Star.png';

const Testimonial = ({ image, rating, name, review }) => {
    return (
        <article className="testimonial">
            <section className="testimonial-rating">
                {rating >= 1 && <img alt="star" src={Star}/>}
                {rating >= 2 && <img alt="star" src={Star}/>}
                {rating >= 3 && <img alt="star" src={Star}/>}
                {rating >= 4 && <img alt="star" src={Star}/>}
                {rating === 5 && <img alt="star" src={Star}/>}
            </section>
            <section className="testimonial-content">
                <section className="testimonial-image">
                    <img alt={name} src={image}/>
                </section>
                <h3 className="testimonial-name">{name}</h3>
            </section>
            <p className="testimonial-review">{review}</p>
        </article>
    );
}

export default Testimonial;