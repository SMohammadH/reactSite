import React from 'react';
import './HomeSectionOne.css';

const HomeSectionOne = () => {
  return (
    <div className="section-one">
      <h2>Technologies I Used on This Website:</h2>
      <section>
        <div className="html5">
          <i className="fab fa-html5 fa-10x"></i>
          <h3>HTML</h3>
        </div>
        <div className="css3">
          <i className="fab fa-css3-alt fa-10x"></i>
          <h3>CSS</h3>
        </div>
        <div className="js">
          <i className="fab fa-js fa-10x"></i>
          <h3>JS</h3>
        </div>
        <div className="react">
          <i className="fab fa-react fa-10x"></i>
          <h3>React</h3>
        </div>
      </section>
    </div>
  );
};

export default HomeSectionOne;
