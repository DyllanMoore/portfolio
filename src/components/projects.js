export function Projects(props) {


    return (
        <div cllassName="ProjectsContainer" id="Projects">
            <h4>
                {props.projectName}
            </h4>
            <img src={props.projectImage} alt={props.projectImageAlt} />
            <p>
                {props.projectDescription}
            </p>
            <a href={props.projectLinkGithub} target="_blank">View on GitHub</a>
        </div>
    )
}