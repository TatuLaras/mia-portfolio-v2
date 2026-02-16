import Button from './Button';
import Contact from './Contact';
import Navbar from './Navbar';
import type { Project } from './project_data';
import ProjectImage from './ProjectImage';
import './styles/ProjectPage.css';
import Table from './Table';

interface Props {
    project: Project;
}

export default function ProjectPage({ project }: Props) {
    const tableItems = [];
    if (project.year) tableItems.push({ left: 'Year', right: project.year });
    if (project.client)
        tableItems.push({ left: 'Client', right: project.client });
    if (project.scope)
        tableItems.push({ left: 'Scope of work', right: project.scope });

    return (
        <>
            <Navbar />
            <div id="project-page">
                <header>
                    <div>
                        <span className="label">Project</span>
                        <h1>{project.title} </h1>
                        <p>{project.description}</p>
                        <Table items={tableItems} />
                        {project.externalLink && (
                            <Button href={project.externalLink.href}>
                                {project.externalLink.text}
                            </Button>
                        )}
                    </div>
                    <ProjectImage project={project} />
                </header>
            </div>
            <div
                id="project-page-custom-content"
                className={
                    project.projectPageDisablePadding ? 'no-padding' : ''
                }
            >
                {project.projectPage}
            </div>
            <Contact />
        </>
    );
}
