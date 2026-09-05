import React, { useState } from 'react';
import './App.css';
import bikecultme from './assets/bikecultme.jpg';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-dot"></span>
          Raymond Gantala
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="main-content" id="about">
        <section className="container_1" id="hero">
          <div className="hero-text">
            <div className="status-badge">
              🟢 Open to Junior Software Developer Opportunities
            </div>
            <p className="greeting">👋 Hello, I'm</p>

            <h1>Raymond Gantala</h1>

            <h2 className="hero-role">
              Junior Software Developer
            </h2>

            <p className="hero-description">
              Computer Engineering graduate focused on building responsive, user-friendly web applications with React, JavaScript, and Python.
              Currently looking for my first Junior Software Developer opportunity while continuously learning through real-world projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>

              <a
                href="/Raymond-Gantala-Resume.pdf"
                className="btn secondary"
              >
                Download Resume
              </a>
            </div>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Python</span>
            </div>

            <div className="social-links">
              <a href="https://github.com/ThreeSixty360">GitHub</a>
              <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
              <a href="mailto:rcgantala99@gmail.com">Email</a>
            </div>

          </div>

          <div className="hero-image">
            <img
              src={bikecultme}
              alt="Raymond Gantala"
              className="pfp"
            />
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