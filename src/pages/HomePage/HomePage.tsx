import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FadeInSection from "@/components/FadeInSection/FadeInSection";
import Footer from "@/components/Footer/Footer";

import background_home2 from "@/assets/background_home2.svg";
import headshot from "@/assets/headshot.jpg";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <Fragment>
      <div className="page">
        <section className="section home-section">
          <div className="section-background">
            <div
              className="section-background-image"
              style={{ backgroundImage: `url(${background_home2})`, zIndex: 0 }}
            ></div>
          </div>
          <div className="section-background-overlay"></div>
          <div className="section-body">
            <div className="section-content">
              <div className="section-header">
                <h1>
                  <div id="first-word">Bright</div>
                  <div id="second-word">Shadow</div>
                  <div id="third-word">Astrology</div>
                </h1>
                <h2>Helping you find your story written in the stars.</h2>
                <Link to="/mission">
                  <button className="button button--bestia">
                    <div className="button__bg"></div>
                    <span>Let's Go</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section about-section">
          <div className="section-body" style={{ position: "relative" }}>
            <FadeInSection>
              <div
                className="section-content section-content--divided"
                style={{ border: "none" }}
              >
                <div className="title-container">
                  <img src={headshot}></img>
                </div>
                <div className="text-container">
                  <h2>About</h2>
                  <p>
                    I am a astrologer with a passion for helping people gain
                    insight into their lives through the ancient science of
                    astrology. I have been practicing Western archetypal
                    astrology for several years, and during this time, I have
                    helped countless individuals find direction, purpose, and
                    meaning in their lives.
                  </p>
                  <p>
                    My approach to astrology combines the psychological approach
                    to Western astrology, which I blend with the ancient
                    techniques of Vedic teaching to offer a comprehensive and
                    personalized reading to each of my clients. Whether you are
                    seeking guidance on love and relationships, career and
                    finances, health and wellness, or personal growth and
                    spirituality, I am here to help.
                  </p>
                  <Link to="/about">
                    <button className="button button--bestia">
                      <div className="button__bg"></div>
                      <span>Learn More</span>
                    </button>
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
        <section className="section services-section">
          <div className="section-background-overlay"></div>
          <div className="section-body">
            <div
              className="section-content"
              style={{ border: "none", marginTop: "100px" }}
            >
              <FadeInSection customStyle={{ flexDirection: "column" }}>
                <h2>Services</h2>
                <div className="services-list">
                  <article>
                    <div className="service-description">
                      <span>Lightning Reads</span>
                      <p>
                        A 10-minute audio recording of a reading that focuses on
                        one specific question or area of your life. Perfect for
                        quick insights and guidance.
                      </p>
                    </div>
                    <button>
                      <Link
                        to="https://calendly.com/brightshadowastrology/lightning-read"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </button>
                  </article>
                  <article>
                    <div className="service-description">
                      <span>Natal Chart Readings</span>
                      <p>
                        A 60-minute deep dive into your natal chart. Learn about
                        your strengths, weaknesses, and life path.
                      </p>
                    </div>
                    <button>
                      <Link
                        to="https://calendly.com/brightshadowastrology/natal-chart-reading"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </button>
                  </article>
                  <article>
                    <div className="service-description">
                      <span>Synastry Readings</span>
                      <p>
                        A 60-minute reading that compares two natal charts to
                        determine compatibility and potential challenges.
                      </p>
                    </div>
                    <button>
                      <Link
                        to="https://calendly.com/brightshadowastrology/synastry-chart-reading"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </button>
                  </article>
                </div>
                <Link to="/services">
                  <button className="button button--bestia">
                    <div className="button__bg"></div>
                    <span>See All My Services</span>
                  </button>
                </Link>
              </FadeInSection>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
