import React from 'react';

/**
 * Section – reusable page section wrapper.
 *
 * Props:
 *   id           {string}  – HTML id attribute (used for nav anchor links)
 *   title        {string}  – Section heading text
 *   altBackground {bool}   – If true, applies the alternate (off-white) background
 *   children     {node}    – Section body content
 */
function Section({ id, title, altBackground, children }) {
  return (
    <section
      id={id}
      className={`section${altBackground ? ' section--alt' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <h2 className="section-title" id={`${id}-title`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
