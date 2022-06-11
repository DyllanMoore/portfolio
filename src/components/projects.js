import weather from '../resources/weather-app.png';
import ecommerce from '../resources/ecommerce.png';
import pokemon from '../resources/pokemon.png';
import homepage from '../resources/homepage.png';

export function Projects() {
    const projectList = [
        {
            projectName: "Daily Homepage",
            projectImage: homepage,
            projectImageAlt: "Daily Homepage Image",
            projectDescription: "An inspirational homepage that allows the user to see a quote of the day, the current weather, add goals for the day, and flip through cute puppy pictures.",
            projectLinkGithub: "https://github.com/DyllanMoore/inspirational-homepage"
        },
        {
            projectName: "Ecommerce Storefront",
            projectImage: ecommerce,
            projectImageAlt: "Ecommerce Storefront Image",
            projectDescription: "A storefront that allows users to navigate a carousel of different items for sale, add them to their cart, remove them, and checkout. ",
            projectLinkGithub: "https://github.com/DyllanMoore/OK-Coders-Store-Challenge"
        },
        {
            projectName: "Weather App",
            projectImage: weather,
            projectImageAlt: "Weather App Image",
            projectDescription: "An app that utilizes a weather REST API to give the weather for various locations.",
            projectLinkGithub: "https://github.com/DyllanMoore/OKCoders-Browser-Challenge"
        },
        ,
        {
            projectName: "Pokemon App",
            projectImage: pokemon,
            projectImageAlt: "Pokemon App Image",
            projectDescription: "An app that utilizes the Pokemon Pokidex API to allow the user to search for pokemon.",
            projectLinkGithub: "https://github.com/DyllanMoore/react-pokemon-app"
        },
    ];

    return (
        projectList.map((project) => (
            <div className="ProjectsContainer Container" id="Projects">
                <h4 className="ProjectName">
                    {project.projectName}
                </h4>
                <img className="ProjectImage" src={project.projectImage} alt={project.projectImageAlt} />
                <p className="ProjectDescription">
                    {project.projectDescription}
                </p>
                <a className="ProjectLink" href={project.projectLinkGithub} target="_blank">View on GitHub</a>
            </div>
        )
        )
    )
}