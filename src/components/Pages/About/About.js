import React, { useState, useEffect } from "react";
import DatGuiStars from "../../Utils/DatGuiStars";
import { Button, Col, Row } from "antd";
import SinWave from "../../Utils/SinWave";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import { Link } from "react-router-dom";
import { AuthenticatedRoutesConstant } from "../../../libs/menuConstant";

function About() {

  const phrases = [
    `We are witnessing the 6th mass extinction 
    in the history of the planet.
    By 2100 50% of all species may face extinction.
    `,
    "This is a typing effect.",
    "You can change the phrases.",
    "Customize it as you like!",
  ];

  const [showAboutText, setShowAboutText] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAboutText(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let typingInterval;

    if (showAboutText) {
      typingInterval = setInterval(() => {
        setCurrentChar((prev) => prev + 1);
      }, 25);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [showAboutText]);

  useEffect(() => {
    if (currentChar === phrases[currentPhrase].length) {
      setTimeout(() => {
        setCurrentChar(0);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 3000);
    }
  }, [currentChar, currentPhrase]);

  const divElements = Array.from({ length: 22 }, (_, index) => (
    <div key={index}></div>
  ));


  return (
    <div className="AboutUsWrapper">
      {showAboutText && (
        <SinWave />
      )}
      {showAboutText ? (
        <div className="AboutUsInner">
          <div className="abtIntrostart">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dzIYgzQlNCU?si=e9SBBS-UovapcWwl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>
          <div className="aboutIntro">
            <div className="container">
              <Row
                align='middle'
              >
                <Col
                  span={16}
                  sm={{
                    span: 24,
                  }}
                  md={{
                    span: 16,
                  }}
                  lg={{
                    span: 16,
                  }}
                >
                  <div className="abtTextTyping ginger">
                    <h1 id="typing">
                      {phrases[currentPhrase].slice(0, currentChar)}
                    </h1>
                  </div>
                </Col>
                <Col
                  span={8}
                  sm={{
                    span: 24,
                  }}
                  md={{
                    span: 8,
                  }}
                  lg={{
                    span: 8,
                  }}
                >
                  <div className="aboutIntroBtn">
                    <Button className='ginger btnIntro'>
                      <Link to={AuthenticatedRoutesConstant.MUSIC_CAT}>
                        Skip Intro <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ) : (
        <DatGuiStars />
      )}
      {showAboutText && (
        <div className="css_animation">
          <div className="css_animationWrapper">
            {
              divElements
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
