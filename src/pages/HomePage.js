import About from "../components/About";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
    return (
        <main>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
    );
}

export default HomePage;