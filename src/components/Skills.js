import React from 'react';
import './Skills.css';

/* ─────────────────────────────────────────────────────────────
   Skill data
   ───────────────────────────────────────────────────────────── */
const hardSkills = [
  'SQL',
  'Python',
  'Django, DRF, FLASK',
  'Data Warehousing',
  'Microsoft Excel (data modelling, VBA macros)',
  'Statistical analysis (A/B testing, regression, t-tests)',
  'Braze, Salesforce Marketing Cloud, Hubspot',
  'Cloud Platforms (Snowflake, GCP)',
  'Version Control (Git, GitHub, Bitbucket)',
  'API design & consumption (REST, authenticstion, payloads)',
  'Postman, Insomnia',
  'Data Modelling',
  'Business Intelligence (Power BI)',
  'JavaScript, React',
  'HTML/CSS',
];

const softSkills = [
  'Problem-Solving',
  'Analytical Thinking',
  'Sprint Planning',
  'Storytelling',
  'Communication',
  'Collaboration',
  'Adaptability',
  'Continuous Learning',
  'Stakeholder Management',
  'Curiosity',
  'Critical Thinking',
];

/* ─────────────────────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────────────────────── */
function SkillPill({ label }) {
  return <li className="skill-item">{label}</li>;
}

function SkillCategory({ title, emoji, emojiLabel, skills }) {
  return (
    <div className="skills-category" aria-label={`${title} category`}>
      <h3 className="skills-category__title">
        <span role="img" aria-label={emojiLabel} className="skills-category__icon">
          {emoji}
        </span>{' '}
        {title}
      </h3>
      <ul className="skill-list">
        {skills.map((skill) => (
          <SkillPill key={skill} label={skill} />
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main export
   ───────────────────────────────────────────────────────────── */
function Skills() {
  return (
    <div className="skills-wrapper">
      <SkillCategory
        title="Hard Skills"
        emoji="🛠️"
        emojiLabel="Tools icon"
        skills={hardSkills}
      />
      <SkillCategory
        title="Soft Skills"
        emoji="🤝"
        emojiLabel="Handshake icon"
        skills={softSkills}
      />
    </div>
  );
}

export default Skills;
