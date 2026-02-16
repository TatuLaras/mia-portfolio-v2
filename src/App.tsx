import './styles/App.css';
import FrontPage from './FrontPage';
import ProjectPage from './ProjectPage';
import { getProject } from './project_data';

function App() {
    const path = window.location.pathname;

    if (path == '/') return <FrontPage />;

    const projectRoute = '/project/';
    if (path.startsWith(projectRoute)) {
        const projectId = parseInt(path.slice(projectRoute.length));
        const project = getProject(projectId);
        if (project) return <ProjectPage project={project} />;
    }

    return <h1>404 - Not found</h1>;
}

export default App;
