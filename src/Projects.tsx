import { useState } from 'react';
import Button from './Button';
import ProjectCard from './ProjectCard';
import { getProjects } from './project_data';
import './styles/Projects.css';

export default function Projects() {
    const [viewAll, setViewAll] = useState(false);

    return (
        <div id="projects" className={viewAll ? 'expanded' : ''}>
            <h2 className="section-title">
                Selected
                <br />
                projects
            </h2>

            {getProjects(viewAll ? 'any' : 'primary').map((project) => (
                <ProjectCard project={project} key={project.title} />
            ))}

            {!viewAll && (
                <div className="view-all">
                    <Button
                        onClick={() => {
                            setViewAll(true);
                        }}
                    >
                        View all projects
                    </Button>
                </div>
            )}
        </div>
    );
}
