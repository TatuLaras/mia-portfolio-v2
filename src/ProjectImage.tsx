import type { CSSProperties } from 'react';
import type { Project } from './project_data';
import './styles/ProjectImage.css';

interface Props {
    project: Project;
}

export default function ProjectImage({ project }: Props) {
    return (
        <div
            className="project-image"
            style={{
                backgroundColor: project.imageBgColor,
            }}
        >
            <div
                style={
                    {
                        backgroundImage: `url('${project.image}')`,
                        backgroundSize: project.imageContain
                            ? 'contain'
                            : 'cover',
                    } as CSSProperties
                }
            ></div>
        </div>
    );
}
