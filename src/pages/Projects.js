import React, { useState } from 'react';
import UseState from './projects/UseState';
import UseEffect from './projects/UseEffect';
import './Projects.css';

const Projects = () => {
  const [state, setState] = useState('');

  return (
    <div className={`projects-container + ${state}`}>
      <div className="container p-20 text-center">
        <h1>Projects</h1>
        <p className="p-10">
          Well! In this page I'm going to prove my knowledge, Those things that
          I know about HTML, CSS, JS, React etc (Nothings is copied):
        </p>

        <h2>React Router:</h2>
        <p>
          I should mention that I used ReactRouter for purpose of navigating
          through pages on this site.
        </p>
        <UseState setState={setState} />
        <h1>UseEffect Hook:</h1>
        <p>
          I used UseEffect and axios to fetch data asyncrinously from RandomUser
          API then rendered on to the screen.
        </p>
        <div className="main-container">
          <UseEffect />
          <UseEffect />
          <UseEffect />
          <UseEffect />
          <UseEffect />
          <UseEffect />
        </div>
      </div>
    </div>
  );
};

export default Projects;
