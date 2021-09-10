import './App.css';
import { Switch, Route } from 'react-router-dom'
import Background from './components/Background';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Background />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
