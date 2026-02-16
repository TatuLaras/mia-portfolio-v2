import About from './About';
import AboutDetails from './AboutDetails';
import Contact from './Contact';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';

export default function FrontPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <div id="app">
                <Projects />
                <About />
                <AboutDetails />
                <Contact />
            </div>
        </>
    );
}
