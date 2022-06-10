import './App.css';
import { Menu } from './components/menu';
import { Resume } from './components/resume';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';

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

const contactList = {
  gitHub: "https://github.com/DyllanMoore",
  linkdin: "https://www.linkedin.com/in/dyllan-ellisor-9880a0229/"
}


function App() {
  return (
    <div className="App">
      <Menu />
      <Resume />
      <About />
      <Skills />
      <Projects
        projectName={projectList[0].projectName}
        projectImage={projectList[0].projectImage}
        projectImageAlt={projectList[0].projectImageAlt}
        projectDescription={projectList[0].projectDescription}
        projectLinkGithub={projectList[0].projectLinkGithub}
      />
      <Projects
        projectName={projectList[1].projectName}
        projectImage={projectList[1].projectImage}
        projectImageAlt={projectList[1].projectImageAlt}
        projectDescription={projectList[1].projectDescription}
        projectLinkGithub={projectList[1].projectLinkGithub}
      />
      <Projects
        projectName={projectList[2].projectName}
        projectImage={projectList[2].projectImage}
        projectImageAlt={projectList[2].projectImageAlt}
        projectDescription={projectList[2].projectDescription}
        projectLinkGithub={projectList[2].projectLinkGithub}
      />
      <Projects
        projectName={projectList[3].projectName}
        projectImage={projectList[3].projectImage}
        projectImageAlt={projectList[3].projectImageAlt}
        projectDescription={projectList[3].projectDescription}
        projectLinkGithub={projectList[3].projectLinkGithub}
      />
      <Contact
        gitHub={contactList.gitHub}
        linkdin={contactList.linkdin}
      />
    </div>
  );
}

export default App;
