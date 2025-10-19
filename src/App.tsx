import './App.css'
import {Header} from './layout/header/Header';
import {Mains}  from './layout/sections/main/Mains.tsx'
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Mains/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App
