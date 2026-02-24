import type { Project } from './project_data';
import ProjectImage from './ProjectImage';
import './styles/ProjectCard.css';
import { useEffect, useRef } from 'react';
import ProjectLink from './ProjectLink';

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const ref = useRef<HTMLAnchorElement | null>(null);

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
        <ProjectLink
            className={`project-card ${project.cardClassName}`}
            ref={ref}
            projectId={project.id}
        >
            <>
                <ProjectImage project={project} />
                <div className="info">
                    <span className="title">{project.title}</span>
                    <span className="category">{project.category}</span>
                </div>
            </>
        </ProjectLink>
    );
}
