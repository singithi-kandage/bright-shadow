import { Fragment } from "react";
import FadeInSection from "@/components/FadeInSection/FadeInSection";
import Footer from "@/components/Footer/Footer";
import "./AboutPage.scss";

import about_page from "@/assets/about_page.png";

const AboutPage = () => {
  return (
    <Fragment>
      <div className="page">
        <section className="section about-section">
          <FadeInSection>
            <div
              className="section-content section-content--divided"
              style={{ marginBottom: "200px" }}
            >
              <div className="image-container">
                <img src={about_page}></img>
              </div>
              <div className="text-container">
                <h2>About</h2>

                <p>
                  I am an astrologer with a passion for helping people gain
                  insight into their lives through the ancient science of
                  astrology. I have been practicing Western archetypal astrology
                  for several years, and during this time, I have helped
                  countless individuals find direction, purpose, and meaning in
                  their lives.
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
                <p>
                  My services include birth chart readings, synastry and
                  composite chart analysis, and transit astrology. Currently, I
                  only provide my services in English.
                </p>
                <p>
                  Thank you for considering me for your astrological needs. I
                  look forward to helping you gain clarity and insight into your
                  life through the transformative power of astrology.
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
