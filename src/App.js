import './App.css';
import { Menu } from './components/menu';
import { Resume } from './components/resume';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { BackgroundImage } from './components/background';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Menu />
      <Resume />
      <About />
      <Skills />
      <h2 className="Heading Container">Projects</h2>
      <Projects />
      <Contact />
      <a href='https://www.freepik.com/vectors/polygon-shape'>
        Polygon shape vector created by freepik - www.freepik.com
      </a>
    </div>
  );
}

export default App;
