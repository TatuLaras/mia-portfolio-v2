import type { CSSProperties } from 'react';
import './styles/Figure.css';

interface Props {
    title: string;
    img: string;
    className?: string;
    imgPadding?: string;
    style?: CSSProperties;
}

export default function Figure({
    title,
    img,
    className = '',
    imgPadding = '1em',
    style,
}: Props) {
    return (
        <div
            className={`figure ${className}`}
            style={{ '--img-padding': imgPadding, ...style } as CSSProperties}
        >
            <img src={img} alt={title} />
            <span>{title}</span>
        </div>
    );
}
