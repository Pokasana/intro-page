import React from 'react';

function ProjectCard() {
  return (
    <section>
      <h3>CODEPEN</h3>
      <iframe
        height="300"
        style={{ width: '100%' }}
        scrolling="no"
        title="Three.js Brain Stretch"
        src="https://codepen.io/sanaspoon/embed/WNVVzPW?default-tab=html%2Cresult"
        frameBorder="no"
        loading="lazy"
        allowTransparency="true"
        allowFullScreen="true"
      >
        See the Pen{' '}
        <a href="https://codepen.io/sanaspoon/pen/WNVVzPW">
          Three.js Brain Stretch
        </a>{' '}
        by Sanae Soma (
        <a href="https://codepen.io/sanaspoon">@sssoma</a>) on{' '}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </section>
  )
};

export default ProjectCard;