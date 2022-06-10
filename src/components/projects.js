export function Projects() {
    const projectList = [{
        projectName: "Ecommerce Storefront",
        projectImage: "#",
        projectImageAlt: "Ecommerce Storefront Image",
        projectDescription: "A storefront that allows users to navigate a carousel of different items for sale, add them to their cart, remove them, and checkout. ",
        projectLinkGithub: "https://github.com/DyllanMoore/OK-Coders-Store-Challenge"
    },
    {
        projectName: "Weather App",
        projectImage: "#",
        projectImageAlt: "Weather App Image",
        projectDescription: "An app that utilizes a weather REST API to give the weather for various locations.",
        projectLinkGithub: "https://github.com/DyllanMoore/OKCoders-Browser-Challenge"
    },
    {
        projectName: "Daily Homepage",
        projectImage: "#",
        projectImageAlt: "Daily Homepage Image",
        projectDescription: "An inspirational homepage that allows the user to see a quote of the day, the current weather, add goals for the day, and flip through cute puppy pictures.",
        projectLinkGithub: "https://github.com/DyllanMoore/inspirational-homepage"
    },
    {
        projectName: "Pokemon App",
        projectImage: "#",
        projectImageAlt: "Pokemon App Image",
        projectDescription: "An app that utilizes the Pokemon Pokidex API to allow the user to search for pokemon.",
        projectLinkGithub: "https://github.com/DyllanMoore/react-pokemon-app"
    },
    ];

    return (
        projectList.map((project) => (
            <div className="ProjectsContainer Container" id="Projects">
                <h4>
                    {project.projectName}
                </h4>
                <img src={project.projectImage} alt={project.projectImageAlt} />
                <p>
                    {project.projectDescription}
                </p>
                <a href={project.projectLinkGithub} target="_blank">View on GitHub</a>
            </div>
        )
        )
    )
}