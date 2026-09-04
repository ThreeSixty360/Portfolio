import React, { useState } from 'react';
import './App.css';
import bikecultme from './assets/bikecultme.jpg';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Raymond Gantala</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="main-content" id="about">
        <section className="container_1">
          <div className="hero-text">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Raymond Gantala, a Junior Software Developer and Computer Engineering graduate with a passion for building clean, responsive, and user-friendly web applications.
              I'm currently growing my skills in HTML, CSS, JavaScript, React, and Python through hands-on projects and continuous learning. I enjoy solving problems, exploring new technologies, and turning ideas into functional applications.
              I'm excited to keep learning, contribute to real-world projects, and grow as a developer.
            </p>
          </div>
          <div className="hero-image">
            <img src={bikecultme} alt="Raymond Gantala" className="pfp" />
          </div>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>

          <div className="projects-grid">
            <div className="project-card">Project 1</div>
            <div className="project-card">Project 2</div>
            <div className="project-card">Project 3</div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contact</h2>
          <p>rcgantala99@gmail.com</p>
        </section>

      </main>
      <footer className="footer">
        <p>&copy; 2024 Raymond Gantala. All rights reserved.</p>
      </footer>
    </>
  );
}