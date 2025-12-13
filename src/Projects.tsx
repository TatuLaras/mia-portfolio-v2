import { useState } from 'react';
import Button from './Button';
import ProjectCard from './ProjectCard';
import './styles/Projects.css';

export default function Projects() {
    const [viewAll, setViewAll] = useState(false);

    const additionalProjects = (
        <>
            <ProjectCard
                className="item5"
                title="Echoes among the peaks Magazine spread"
                category="Editorial"
                image="/images/projects/echoes among the peaks magazine spread/Magazine Mockup.jpg"
            />
            <ProjectCard
                className="item6"
                title="The Daily Logo Challenge"
                category="Logo Design"
                image="/images/projects/the daily logo challenge/streaming music startup.svg"
            />
            <ProjectCard
                className="item7"
                title="Library Management App Bookra"
                category="UX & UI"
                image="../public/images/projects/library management app bookra/iPhone XR Isometric.jpg"
            />
        </>
    );

    return (
        <div id="projects" className={viewAll ? 'expanded' : ''}>
            <h2 className="section-title">
                Selected
                <br />
                projects
            </h2>

            <ProjectCard
                className="item1"
                title="Trip-Hop Album Cover"
                category="Graphic Design"
                image="/images/projects/trip-hop album cover/CD Case and Disk Mockup.jpg"
            />
            <ProjectCard
                className="item2 mikro-gourmet"
                title="Mikro Gourmet: A Live Production"
                category="Logo and Animation"
                image="/images/projects/mikro gourmet/mikrogourmet_logo.svg"
                imageBgColor="#206346"
                contain
            />
            <ProjectCard
                className="item3"
                title="Magazine Cover"
                category="Graphic Design"
                image="/images/projects/planta magazine cover/OM Uppg 3 - Magasinomslag_NY.jpg"
            />
            <ProjectCard
                className="item4"
                title="Sushi Club"
                category="Branding & Visual Identity"
                image="/images/projects/sushi club/Free_Poster_Frame_Mockup_1.jpg"
            />
            {viewAll && additionalProjects}
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
