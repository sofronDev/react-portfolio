import { useEffect, useRef, useState } from 'react';
import './App.css'; // Main styles for App component
// import './index.css'; // Global styles are already imported in main.jsx

// SVGs for icons (simple examples, replace with actual SVGs or an icon library)
const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="1em" height="1em">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
  </svg>
);
const LocationIcon = () => (
 <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
  </svg>
);


function App() {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = {
    hero: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  // Smooth scroll for navigation
  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for fade-in and active nav link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust as needed, 0.3 means 30% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          setActiveSection(entry.target.id);
        } else {
          // Optional: remove is-visible if you want fade-out on scroll away
          // entry.target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.section-wrapper, .timeline-item');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);


  const projectsData = [
    {
      title: 'Modela AIoT App',
      description: 'Developed and published Modela AIoT mobile app (Android/iOS). Designed and built UI layouts as required.',
      tech: 'Flutter, Dart, Firebase',
      links: [
        { name: 'Google Play', url: 'https://play.google.com/store/apps/details?id=app.modela.modelaaiotdevice&hl=en&pli=1' },
        { name: 'App Store', url: 'https://apps.apple.com/th/app/modela-aiot-device/id6736358188?l=th' },
      ],
    },
    {
      title: 'react-portfolio (This Site)',
      description: 'A personal portfolio website built with React and Vite, designed with a clean, Apple-inspired aesthetic and smooth animations.',
      tech: 'React, Vite, CSS, JavaScript',
      links: [
        { name: 'GitHub', url: 'https://github.com/sofronDev/react-portfolio' },
        { name: 'Live Demo', url: 'https://react-portfolio-wine-chi.vercel.app/' },
      ],
    },
  ];

  const skillsData = ['Flutter', 'Python', 'ChatGPT', 'DeepSeek', 'MongoDB', 'JavaScript', 'React', 'Node.js', 'Firebase'];

  const experienceData = [
    {
      role: 'Mobile App Developer',
      company: 'Modela Iot Co., Ltd.',
      date: '2023 - Present',
      details: [
        'Developed and published Modela AIoT mobile app (Android/iOS)',
        'Designed and built UI layouts as required',
      ],
      icon: '🏢',
    },
    {
      role: 'Final Year Project',
      company: 'Prince of Songkhla University',
      date: '2022 - 2023',
      details: ['Created a Flutter + MongoDB app with CRUD & compass features'],
      icon: '📱',
    },
    {
      role: 'Intern, Mobile Developer',
      company: 'Bonmek Co., Ltd.',
      date: 'June 2021 - August 2021',
      details: [
        'Developed 6 front-end pages with Flutter',
        'Built UI from Figma, managed database for accuracy',
      ],
      icon: '🧑‍💻',
    },
    {
      role: 'B.Eng. Computer Engineering',
      company: 'Prince of Songkhla University',
      date: '2019 - 2023',
      details: ['CGPA: 3.21'],
      icon: '🎓',
    },
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Sofron Kuwa</div>
        <ul className="nav-links">
          <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className={activeSection === 'experience' ? 'active' : ''}>Experience & Skills</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="hero" ref={sectionRefs.hero} className="hero-section section-wrapper">
          <h1>Sofron Kuwa</h1>
          <p className="role">Mobile Developer</p>
          <p className="summary">
            Passionate and results-oriented Mobile Developer with experience in Flutter and Python. Dedicated to creating impactful mobile applications that enhance user experience and solve real-world problems. Eager to contribute to innovative projects and continuously expand my technical expertise.
          </p>
        </section>

        <section id="projects" ref={sectionRefs.projects} className="projects-section section-wrapper">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech">Tech: {project.tech}</p>
                <div className="project-links">
                  {project.links.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="button-like">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" ref={sectionRefs.experience} className="experience-skills-section section-wrapper">
          <h2>Experience & Skills</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>

          <div className="timeline">
            {experienceData.map((item, index) => (
              <div key={index} className="timeline-item"> {/* is-visible class added by IntersectionObserver */}
                <div className="timeline-dot">{/* item.icon ? <span>{item.icon}</span> : null */}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="date">{item.date}</p>
                  <ul>
                    {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" ref={sectionRefs.contact} className="contact-section section-wrapper">
          <h2>Get in Touch</h2>
          <ul className="contact-list">
            <li><PhoneIcon /><a href="tel:0950850902">095-085-0902</a></li>
            <li><EmailIcon /><a href="mailto:sofron.kuwa@gmail.com">sofron.kuwa@gmail.com</a></li>
            <li><GithubIcon /><a href="https://github.com/sofronDev" target="_blank" rel="noopener noreferrer">github.com/sofronDev</a></li>
            <li><LinkedInIcon /><a href="https://www.linkedin.com/in/sofron-kuwa/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            <li><LocationIcon />Satun, Thailand</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sofron Kuwa. Inspired by Apple Design.</p>
      </footer>
    </div>
  );
}

export default App;
