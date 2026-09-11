import React, { useMemo } from "react";
import "./App.css";

function App() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "C", icon: "💻" },
    { name: "C#", icon: "🔷" },
    { name: "Data Structure", icon: "🧠" },
  ];

  const skillValues = useMemo(() => {
    return skills.map(() => Math.floor(Math.random() * 21) + 75);
  }, []);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-logo">
          KT<span>.</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://github.com/trivedikhushi380-web"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hello">
            HELLO, I'M <span>KHUSHI TRIVEDI</span>
          </p>

          <h1>
            Full Stack
            <br />
            <span>Developer</span>
          </h1>

          <p className="hero-text">
            I build modern, responsive and user-friendly web applications.
            I love turning ideas into clean, functional and beautiful
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/trivedikhushi380-web"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <span>•</span>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-glow"></div>

          <div className="code-card">
            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Khushi Trivedi"</span>,
              </p>

              <p className="indent">
                role: <span className="green">"Full Stack Developer"</span>,
              </p>

              <p className="indent">
                passion: <span className="green">"Building"</span>
              </p>

              <p>{"}"}</p>

              <p className="cursor-line">
                <span className="purple">console</span>.
                <span className="blue">log</span>(developer);
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section about" id="about">
        <div className="section-heading">
          <p>01 — ABOUT ME</p>
          <h2>Who I <span>Am</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>
              Turning ideas into
              <span> digital reality.</span>
            </h3>

            <p>
              I'm <strong>Khushi Trivedi</strong>, a passionate Full Stack
              Developer who enjoys creating websites and applications that
              are both visually appealing and technically strong.
            </p>

            <p>
              I have knowledge of frontend development, programming
              fundamentals and data structures. I continuously work on
              improving my skills and learning new technologies.
            </p>

            <a
              href="https://github.com/trivedikhushi380-web"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Explore my GitHub →
            </a>
          </div>

          <div className="about-box">
            <div className="about-number">01</div>
            <h4>Full Stack</h4>
            <p>Frontend + Backend Development</p>

            <div className="about-number">02</div>
            <h4>Problem Solver</h4>
            <p>Data Structures & Logical Thinking</p>

            <div className="about-number">03</div>
            <h4>Always Learning</h4>
            <p>Improving skills every day</p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p>02 — MY SKILLS</p>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <div className="skill-name">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>

                <strong>{skillValues[index]}%</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skillValues[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section projects" id="projects">
        <div className="section-heading">
          <p>03 — MY WORK</p>
          <h2>Featured <span>Projects</span></h2>
        </div>

        <div className="project-grid">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Portfolio Website</h3>

            <p>
              A modern responsive personal portfolio website created to
              showcase my skills, projects and development journey.
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/trivedikhushi380-web"
              target="_blank"
              rel="noreferrer"
            >
              View Project ↗
            </a>
          </div>

          <div className="project-card featured">
            <div className="project-number">02</div>

            <h3>Web Application</h3>

            <p>
              A full-stack style web application focused on responsive
              design, clean UI and efficient application logic.
            </p>

            <div className="tags">
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Data Structure</span>
            </div>

            <a
              href="https://github.com/trivedikhushi380-web"
              target="_blank"
              rel="noreferrer"
            >
              View Project ↗
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Programming Projects</h3>

            <p>
              Programming and problem-solving projects using C and C#
              with a focus on logical thinking and data structures.
            </p>

            <div className="tags">
              <span>C</span>
              <span>C#</span>
              <span>DSA</span>
            </div>

            <a
              href="https://github.com/trivedikhushi380-web"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub ↗
            </a>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section contact" id="contact">
        <div className="contact-box">
          <p>04 — CONTACT</p>

          <h2>
            Let's build something
            <span> amazing.</span>
          </h2>

          <p className="contact-text">
            Have an idea, project or opportunity? I'd love to hear from you.
          </p>

          <a
            href="https://github.com/trivedikhushi380-web"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Visit My GitHub →
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div>
          <strong>
            Khushi<span>.</span>
          </strong>
          <p>Full Stack Developer</p>
        </div>

        <a
          href="https://github.com/trivedikhushi380-web"
          target="_blank"
          rel="noreferrer"
        >
          github.com/trivedikhushi380-web
        </a>

        <p>© 2026 Khushi Trivedi</p>
      </footer>

    </div>
  );
}

export default App;