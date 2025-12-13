import About from './About';
import AboutDetails from './AboutDetails';
import Contact from './Contact';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import './styles/App.css';

function App() {
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
// <About />
// <Contact />

export default App;
