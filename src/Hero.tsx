import { useEffect, useRef } from 'react';
import './styles/Hero.css';

export default function Hero() {
    const bgRef = useRef<HTMLHeadingElement | null>(null);

    const onScroll = () => {
        if (!bgRef.current) return;

        if (window.scrollY > 200) bgRef.current.classList.add('zoom');
        else bgRef.current.classList.remove('zoom');
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header id="hero">
            <h1>Mia Mäntylampi</h1>
            <p>
                I’m a graphic and visual designer who specializes in creating
                inviting designs with the target audience in mind.
            </p>
            <div className="bg" ref={bgRef} aria-hidden="true"></div>
            <div className="gradient" aria-hidden="true"></div>
        </header>
    );
}
