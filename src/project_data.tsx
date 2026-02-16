import type { JSX } from 'react';
import Project_MikroGourmet from './project_pages/Project_MikroGourmet';
import Project_Logo from './project_pages/Project_Logo';
import Project_TripHop from './project_pages/Project_TripHop';
import Project_Echoes from './project_pages/Project_Echoes';
import Project_Planta from './project_pages/Project_Planta';
import Project_Bookra from './project_pages/Project_Bookra';
import Project_Sushi from './project_pages/Project_Sushi';

export interface ExternalLink {
    text: string;
    href: string;
}

export interface Project {
    id?: number;
    type: 'primary' | 'secondary';
    title: string;
    category: string;
    image: string;
    imageBgColor?: string;
    imageContain?: boolean;
    projectPage?: JSX.Element;
    projectPageDisablePadding?: boolean;
    cardClassName?: string;
    description?: string;
    year?: string;
    client?: string;
    scope?: string;
    externalLink?: ExternalLink;
}

const projects: Project[] = [
    {
        type: 'primary',
        cardClassName: 'item1',
        title: 'Trip-Hop Album Cover',
        category: 'Graphic Design',
        image: '/images/projects/trip-hop album cover/Simple Mockup Cover & CD.jpg',
        description: 'A personal project in which I explored creative design.',
        year: '2025',
        client: 'Personal',
        scope: 'Graphic Design',
        projectPage: <Project_TripHop />,
        projectPageDisablePadding: true,
    },
    {
        type: 'primary',
        cardClassName: 'item2 mikro-gourmet',
        title: 'Mikro Gourmet: A Live Production',
        category: 'Logo and Animation',
        image: '/images/projects/mikro gourmet/mikrogourmet_logo.svg',
        imageBgColor: '#206346',
        imageContain: true,
        description: 'Logos for a live broadcasted cooking gameshow.',
        year: '2025',
        client: 'School Project',
        scope: 'Logo Design, Animated Inserts & Graphical Operator',
        externalLink: { text: 'View Brand Manual', href: '#' },
        projectPage: <Project_MikroGourmet />,
    },
    {
        type: 'primary',
        cardClassName: 'item3',
        title: 'Planta Magazine Cover',
        category: 'Graphic Design',
        image: '/images/projects/planta magazine cover/Catalog-Magazine-Free-Mockup-Presentation_NY.jpg',
        description: 'A cover design for a plant and flower magazine.',
        year: '2024',
        client: 'Personal',
        scope: 'Graphic Design',
        projectPage: <Project_Planta />,
        projectPageDisablePadding: true,
    },
    {
        type: 'primary',
        cardClassName: 'item4',
        title: 'Delivery Restaurant Sushi Club',
        category: 'Branding & Visual Identity',
        image: '/images/projects/sushi club/Free_Poster_Frame_Mockup_1.jpg',
        description: 'A brand manual for a sushi delivery restaurant.',
        year: '2024',
        client: 'Personal',
        scope: 'Branding & Visual Identity',
        externalLink: {
            text: 'View Brand Manual',
            href: '/Sushi_Club_Brand_Manual.pdf',
        },
        projectPage: <Project_Sushi />,
    },

    {
        type: 'secondary',
        cardClassName: 'item5',
        title: 'Echoes among the peaks Magazine spread',
        category: 'Editorial',
        image: '/images/projects/echoes among the peaks magazine spread/magazine mockup preview.jpg',
        description: 'An engaging typography layout for an editorial piece.',
        year: '2024',
        client: 'Personal',
        scope: 'Editorial',
        projectPage: <Project_Echoes />,
        projectPageDisablePadding: true,
    },
    {
        type: 'secondary',
        cardClassName: 'item6',
        title: 'The Daily Logo Challenge',
        category: 'Logo Design',
        image: '/images/projects/the daily logo challenge/streaming music startup.svg',
        description:
            'Here I have gathered selected logos from my attempt at the daily logo challenge. The purpose of this project was to practise using Adobe Illustrator.',
        year: '2025',
        client: 'Personal',
        scope: 'Logo Design',
        projectPage: <Project_Logo />,
    },
    {
        type: 'secondary',
        cardClassName: 'item7',
        title: 'Library Management App Bookra',
        category: 'UX & UI',
        image: '/images/projects/library management app bookra/iPhone XR Isometric.jpg',
        description:
            'A user experience and interface design for a library management application.',
        year: '2024',
        client: 'Personal',
        scope: 'UX & UI',
        projectPage: <Project_Bookra />,
        projectPageDisablePadding: true,
    },
];

export function getProjects(type: 'primary' | 'secondary' | 'any' = 'any') {
    if (type == 'any') return projects;

    const returnProjects: Project[] = [];

    projects.forEach((project, i) => {
        project.id = i;
        if (project.type == type) returnProjects.push(project);
    });

    return returnProjects;
}

export function getProject(id: number): Project | null {
    if (!(id in projects)) return null;
    const project = projects[id];
    project.id = id;
    return project;
}
