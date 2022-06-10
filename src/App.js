import './App.css';
import { Menu } from './components/menu';
import { Resume } from './components/resume';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';

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
      <Projects />
      <Contact
        gitHub={contactList.gitHub}
        linkdin={contactList.linkdin}
      />
    </div>
  );
}

export default App;
