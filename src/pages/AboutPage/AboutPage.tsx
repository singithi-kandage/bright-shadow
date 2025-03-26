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
                  Hi, I’m Singithi! I've been practicing Western archetypal
                  astrology for ten years, and during this time, I have helped
                  my clients find direction, purpose, and meaning in their
                  lives. Most recently, I’ve been the manager of Montreal’s
                  Astrology Meetup since 2023, a role that has been an immense
                  pleasure to fulfill.
                </p>
                <p>
                  My work blends the psychological approach of archetypal
                  astrology with ancient techniques and philosophy of Vedic
                  teachings to offer a comprehensive and personalized reading to
                  each of my clients. I use the tropical zodiac, and employ an
                  intuitive approach to house systems, though I’m most often
                  using whole sign houses.
                </p>
                <p>
                  My services include birth chart readings, synastry and
                  composite chart analysis, and transit astrology. Currently, I
                  only provide my services in English. My readings are produced
                  solely with my skills and knowledge, and are free from AI
                  content.
                </p>
                <p>
                  Whether you are seeking guidance on love and relationships,
                  career and finances, health and wellness, or personal growth
                  and spirituality, I am here to help.
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
