import Testimonial from "./Testimonial";
import John from '../assets/images/John.png';
import Amy from '../assets/images/Amy.png';
import Beth from '../assets/images/Beth.png';
import Kris from '../assets/images/Kris.png';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h1 className="testimonials-heading">Testimonials</h1>
            <section className="testimonial-container">
                <Testimonial image={John} rating={5} name={'John McRoe'} review={'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes and beautiful presentation.'}/>
                <Testimonial image={Amy} rating={4} name={'Amy Winehouse'} review={'This place is great! This might have been the best meal I have ever been served. Service was delightful and very professional'}/>
                <Testimonial image={Beth} rating={5} name={'Beth Maddleton'} review={'Do yourself a favor and visit this lovely restaurant in Chicago. The service is unmatched. I enjoyed every single bite.'}/>
                <Testimonial image={Kris} rating={5} name={'Kris Adams'} review={'The food is always fantastic and no matter what I order I am always delighted with my meal! Excellent, unassuming and wonderful find.'}/>
            </section>
        </section>
    );
}

export default Testimonials;