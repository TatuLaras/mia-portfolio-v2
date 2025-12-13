import { useEffect, useRef, useState } from 'react';

interface Props {
    onLinkClicked?: () => void;
}
import './styles/Navbar.css';

export default function Navbar({ onLinkClicked = () => {} }: Props) {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('nav a');
        links.forEach((link) =>
            link.addEventListener('click', onNavbarLinkClicked),
        );

        return () => {
            links.forEach((link) =>
                link.removeEventListener('click', onNavbarLinkClicked),
            );
        };
    }, []);

    function onNavbarLinkClicked() {
        setShowHamburger(false);
        onLinkClicked();
    }

    return (
        <nav ref={navRef}>
            <ul className="regular-menu">
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li className="name">
                    <a href="#about">Mia Mäntylampi</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger-menu">
                <a href="#about" className="name">
                    Mia Mäntylampi
                </a>
                <div
                    className={`hamburger-button ${showHamburger ? 'x' : ''}`}
                    onClick={() => setShowHamburger((old) => !old)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={showHamburger ? 'show' : ''}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#cv">CV</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
