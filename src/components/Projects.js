import React from 'react';
import './Projects.css';

/* ─────────────────────────────────────────────────────────────
   Project data
   ───────────────────────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'My First Portfolio (HTML/CSS)',
    description:
      'My very first personal portfolio page, built using foundational web technologies: HTML for structure and CSS for styling. This project marked my initial step into web development.',
    technologies: ['HTML', 'CSS'],
    githubLinks: [
      { label: 'GitHub', url: 'https://github.com/yourusername/first-html-css-portfolio' }
    ],
    liveDemoLink: 'https://yasmine-azzaoui.github.io/',
    iframeDemo: null,
  },
  {
    id: 2,
    title: 'Childcare Support Fundraiser',
    description:
      'A platform to connect marginalised families with childcare needs to community support. Users could donate time (requiring a verified blue card) or money, and manage user accounts. Backend handled by Django, frontend built with React.',
    technologies: ['React', 'Django', 'Python', 'User Authentication'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/Yasmine-azzaoui/crowdfunding-frontend' },
      { label: 'Backend', url: 'https://github.com/Yasmine-azzaoui/crowdfunding_back_end' }
    ],
    liveDemoLink: 'https://lively-nasturtium-d3c5e8.netlify.app/',
    iframeDemo: null,
  },
  {
    id: 3,
    title: 'Interactive Bookclub Platform',
    description:
      'A collaborative group project to build a feature-rich online book club. My primary contribution was to the backend, designing data models and building robust API endpoints with Django to support user interactions, book management, and club functionalities. The frontend was developed in React.',
    technologies: ['React', 'Django', 'Python', 'REST APIs', 'PostgreSQL', 'Group Collaboration'],
    githubLinks: [
      { label: 'Frontend', url: 'https://github.com/SheCodesAus/debug-a-lotl-frontend' },
      { label: 'Backend', url: 'https://github.com/SheCodesAus/debug-a-lotl-backend' }
    ],
    liveDemoLink: 'https://your-bookclub-demo.netlify.app',
    iframeDemo: null,
  },
];

/* ─────────────────────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────────────────────── */
function TechTag({ label }) {
  return <li className="tech-tag">{label}</li>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-label={`Project: ${project.title}`}>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {/* Illustrative iframe – only rendered for project 4 */}
        {project.iframeDemo && (
          <div className="project-iframe-wrapper">
            <iframe
              src={project.iframeDemo}
              title={`Live preview: ${project.title}`}
              className="project-iframe"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
              aria-label={`Embedded preview of ${project.title}`}
            />
            <p className="project-iframe-caption">
              Illustrative iframe demo &mdash; OpenLibrary.org book search
            </p>
          </div>
        )}

        <ul className="tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </ul>
      </div>

      <div className="project-links">
        {project.githubLinks && project.githubLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--outline project-link"
            aria-label={`View ${project.title} ${link.label} on GitHub`}
          >
            {link.label}
          </a>
        ))}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button project-link"
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main export
   ───────────────────────────────────────────────────────────── */
function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
