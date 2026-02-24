import './styles/App.css';
import FrontPage from './FrontPage';
import ProjectPage from './ProjectPage';
import { getProject } from './project_data';
import { useEffect, useState, type JSX } from 'react';

function App() {
    const [page, setPage] = useState<JSX.Element>(<FrontPage />);

    const refreshHash = () => {
        const path = window.location.hash;
        const projectRoute = '#/project/';

        if (path.startsWith(projectRoute)) {
            const projectId = parseInt(path.slice(projectRoute.length));
            const project = getProject(projectId);
            if (project) {
                setPage(<ProjectPage project={project} />);
                return;
            }
        }

        setPage(<FrontPage />);
    };

    useEffect(() => {
        window.addEventListener('hashchange', refreshHash);
        refreshHash();
        return () => {
            window.removeEventListener('hashchange', refreshHash);
        };
    }, []);

    useEffect(() => {
        const path = window.location.hash;

        let idElement = document.getElementById(path.slice(1));
        console.log(idElement, path);
        if (idElement != null) setTimeout(() => idElement.scrollIntoView(), 0);
        else setTimeout(() => window.scrollTo(0, 0), 10);
    }, [page]);

    return page;
}

export default App;
