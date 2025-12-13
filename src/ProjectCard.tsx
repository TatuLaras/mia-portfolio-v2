import './styles/ProjectCard.css';
import { useEffect, useRef, type CSSProperties } from 'react';

interface Props {
    title: string;
    category: string;
    image: string;
    imageBgColor?: string;
    className?: string;
    contain?: boolean;
}

export default function ProjectCard({
    title,
    category,
    image,
    imageBgColor = 'black',
    className = '',
    contain,
}: Props) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', checkIfCardInView);
        window.addEventListener('resize', checkIfCardInView);
        checkIfCardInView();

        return () => {
            window.removeEventListener('scroll', checkIfCardInView);
            window.removeEventListener('resize', checkIfCardInView);
        };
    }, []);

    const checkIfCardInView = () => {
        if (!ref.current) return;

        const topLeeway = 120;
        const bottomLeeway = 140;

        let inView = false;
        const rect = ref.current?.getBoundingClientRect();

        if (rect.top + topLeeway < window.innerHeight) inView = true;
        if (rect.bottom < bottomLeeway) inView = false;

        if (inView) ref.current.classList.add('in-view');
        else ref.current.classList.remove('in-view');
    };

    return (
        <div className={`project-card ${className}`} ref={ref}>
            <div
                className="image-container"
                style={{
                    backgroundColor: imageBgColor,
                }}
            >
                <div
                    className="image"
                    style={
                        {
                            backgroundImage: `url('${image}')`,
                            backgroundSize: contain ? 'contain' : 'cover',
                        } as CSSProperties
                    }
                ></div>
            </div>
            <div className="info">
                <span className="title">{title}</span>
                <span className="category">{category}</span>
            </div>
        </div>
    );
}
