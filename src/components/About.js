import ImageA from "../assets/images/Mario and Adrian A.jpg";
import ImageB from "../assets/images/Mario and Adrian b.jpg";

const About = () => {
    return (
        <section className="about-section">
            <section className="about-text-block">
                <h1 className="about-heading">Little Lemon</h1>
                <h3 className='about-subheading'>Chicago</h3>
                <p className='about-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </section>
            <section className="about-image-block">
                <img className="about-image-1" alt="Adrian & Mario" src={ImageA}/>
                <img className="about-image-2" alt="Adrian & Mario" src={ImageB}/>
            </section>
        </section>
    );
}

export default About;