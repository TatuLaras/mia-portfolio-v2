import './styles/Button.css';

interface Props {
    children?: string;
    onClick?: () => void;
    href?: string;
    extraPadding?: boolean;
}

export default function Button({
    children,
    onClick,
    href = '#',
    extraPadding,
}: Props) {
    return onClick ? (
        <button
            className={`button ${extraPadding && 'pad-extra'}`}
            onClick={onClick}
        >
            {children}
        </button>
    ) : (
        <a href={href} className={`button ${extraPadding && 'pad-extra'}`}>
            {children}
        </a>
    );
}
