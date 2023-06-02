import React, { useRef } from 'react';
import './App.css';

const App = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <header className="header">
        <button className="nav-button" onClick={() => scrollToRef(aboutRef)}>
          About
        </button>
        <button className="nav-button" onClick={() => scrollToRef(experienceRef)}>
          Experience
        </button>
        <button className="nav-button" onClick={() => scrollToRef(projectsRef)}>
          Projects
        </button>
        <button className="nav-button" onClick={() => scrollToRef(contactsRef)}>
          Contacts
        </button>
      </header>
      <div className="container">
        <div className="block about" ref={aboutRef}>
          <h2>About</h2>
          <p>I am a software developer and this is my portfolio</p>
        </div>
        <div className="block experience" ref={experienceRef}>
          <h2>Experience</h2>
          <ul>
            <li>Company A - Position A</li>
            <li>Company B - Position B</li>
          </ul>
        </div>
        <div className="block projects" ref={projectsRef}>
          <h2>Projects</h2>
          <ul>
            <li>Project A</li>
            <li>Project B</li>
          </ul>
        </div>
        <div className="block contacts" ref={contactsRef}>
          <h2>Contacts</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <button className="download-button">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default App;


