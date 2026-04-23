import React from 'react';
import './About.css';
import profilePic from './IMG_0729.jpg';
import Resume from './Resume_Yasmine_Azzaoui.pdf';
import groupShot from './251025 Shecodes Portraits (323 of 331).jpeg'

function About() {
  return (
    <div className="about-wrapper">
      {/* Profile photo column */}
      <div className="about-photo-col">
        <img
          src={profilePic}
          alt="Yasmine Azzaoui Professional Headshot"
          className="profile-photo"
          width="200"
          height="200"
        />
      </div>

      {/* Content column */}
      <div className="about-content-col">
        <p className="about-intro">
          Howdy! I&apos;m <strong>Yasmine Azzaoui</strong>. Currently, I thrive as a{' '}
          <strong>Marketing Database Analyst at Auto &amp; General</strong>, where I blend data
          insights with strategic marketing. My heart, however, beats for technology, especially
          the intricate world of <strong>backend systems</strong>. I&apos;m passionately diving
          deep into <strong>Data Engineering</strong>, building robust pipelines and efficient
          data solutions.
        </p>

        <p className="description">
          My foundation in <strong>Sociology and Psychology</strong>, earned during my Bachelor&apos;s at <strong>Technical University Darmstadt</strong>, and my Master&apos;s in <strong>International Relations and Peace and Conflict Studies</strong> from the <strong>University of Queensland</strong>, provides a unique lens through which I approach data. This human-centric background allows me to understand user behaviour, contextualise complex data, and design solutions with a keen awareness of human impact and ethical considerations. Caroline Criado Perez&apos;s &quot;Invisible Women&quot; has profoundly inspired my journey, reinforcing the importance of data representation and challenging biases—skills I believe are invaluable in both marketing analytics and data engineering.
        </p>

        <p className="description">
          As a CALD woman born and raised in Germany, and a first-generation individual from my Moroccan descent on one side of my family, I bring a diverse perspective and strong cross-cultural communication abilities, which are invaluable assets in any collaborative and global tech environment.
        </p>

        <p className="about-shecodes">
          I successfully completed the{' '}
          <strong>SheCodes Plus program in Brisbane between 2025&ndash;2026</strong>, where I
          developed several key projects showcased below.
        </p>

        {/* SheCodes cohort photo */}
        <div className="cohort-photo-wrapper">
          <img
            src={groupShot}
            alt="Yasmine Azzaoui and SheCodes Plus cohort group photo"
            className="cohort-photo"
          />
          <p className="cohort-caption">SheCodes Plus Brisbane Cohort, 2025&ndash;2026</p>
        </div>

        <a
          href={Resume}
          download
          className="button resume-button"
          aria-label="Download Yasmine Azzaoui's Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default About;
