import { getProjects } from '../data/projects.data';

const Projects = () => (
    getProjects().map((value,index) => 
    <li key={index}>
        <a 
            href={value.href}
        >
            {value.name}
        </a>
        <a 
            className="right-align-links" 
            {...(value.target ? {target: '_blank'} : {})}
            href={value.githubHref}
        >
            {value.description}
        </a>
    </li>
    )
);

export default Projects;
