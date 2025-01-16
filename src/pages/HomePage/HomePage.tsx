// boilerplate for home page
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <section className="section home-section">
        <div
          className="section-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Bright Shadow Astrology</h1>
          <h2>Providing cosmic healing through deep insight and feeling. </h2>
          <button>Book a Reading</button>
        </div>
      </section>
      <section className="section about-section">
        <div className="section-content">
          <h1>About</h1>
          <p>
            I am a astrologer with a passion for helping people gain insight
            into their lives through the ancient science of astrology. I have
            been practicing Western archetypal astrology for several years, and
            during this time, I have helped countless individuals find
            direction, purpose, and meaning in their lives.
          </p>
          <p>
            My approach to astrology combines the psychological approach to
            Western astrology, which I blend with the ancient techniques of
            Vedic teaching to offer a comprehensive and personalized reading to
            each of my clients. Whether you are seeking guidance on love and
            relationships, career and finances, health and wellness, or personal
            growth and spirituality, I am here to help.
          </p>
          <p>
            My services include birth chart readings, synastry and composite
            chart analysis, and transit astrology. Currently, I only provide my
            services in English.
          </p>
          <p>
            Thank you for considering me for your astrological needs. I look
            forward to helping you gain clarity and insight into your life
            through the transformative power of astrology.
          </p>
        </div>
        <button>Learn More</button>
      </section>
      <section className="section services-section">
        <div className="section-content">
          <h1>Services</h1>
        </div>
        <button>See All My Services</button>
      </section>
    </div>
  );
};

export default HomePage;
