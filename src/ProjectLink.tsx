import { type JSX, type RefObject } from 'react';

interface Props {
    projectId?: number;
    children: JSX.Element | string;
    className?: string;
    ref?: RefObject<HTMLAnchorElement | null>;
}

export default function ProjectLink({
    projectId,
    children,
    className = '',
    ref,
}: Props) {
    return (
        <a href={`#/project/${projectId}`} className={className} ref={ref}>
            {children}
        </a>
    );
}
