import React, { useState, useEffect } from 'react';
import DatGuiStars from '../../Utils/DatGuiStars';
import './About.css';

function About() {
  // const [reloadKey, setReloadKey] = useState(0);
  const [showAboutText, setShowAboutText] = useState(false);

  // function reloadComponent() {
  //   setReloadKey(true);
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAboutText(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAboutText ? (
        <div>
          <h1>About Us</h1>
          <p>This is the About Us page content.</p>
        </div>
      ) : (
        <DatGuiStars/>
      )}
    </>
  );
}

export default About;
