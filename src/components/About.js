import React, { useState } from 'react';
import Firstabout from './pages/Firstabout';
import Secondabout from './pages/Secondabout';

function About() {
  const [about, setAbout] = useState(false);

  function handleAbout1() {
    setAbout(false);
  }

  function handleAbout2() {
    setAbout(true);
  }
  return (
    <div className="about-page">
      <div className="about-page-content">
        <div className="about-page-content-left">
          <div className="about-page-content-left-links">
            <button type="button" onClick={handleAbout1}>About 1</button>
            <button type="button" onClick={handleAbout2}>About 2</button>
          </div>
        </div>
      </div>
      <div className="about-page-content-right">
        {about ? <Secondabout /> : <Firstabout />}
      </div>
    </div>
  );
}

export default About;
