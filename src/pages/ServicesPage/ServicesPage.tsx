//boilerplate
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="page">
      <section className="section services-section">
        <div className="section-content">
          <h1>Services</h1>

          <details>
            <summary className="secondary">
              Quick Readings (10 minutes for $30)
            </summary>
            <p>
              A ten minute long audio recording of a reading for a specific
              question in regards to your natal chart. At this time, I do not
              offer lightning reads for compatibility charts (synastry,
              composite,etc.).
            </p>
            <p>
              You will be emailed the audio recording within three (3) business
              days of making your purchase.
            </p>
          </details>
          <details>
            <summary className="secondary">
              Natal Chart Reading (60 minutes for $100)
            </summary>
            <p>
              The Natal Chart (also known as the Birth Chart) is a snapshot of
              the sky the moment you took your first breath. Together, we will
              consider the placements of the Sun, the Moon, the planets, and the
              lunar nodes as elements of your psyche, and contemplate the
              complex interplays between them. This in-depth analysis will
              present some of the main themes, gifts, and challenges present,
              and advice on how to navigate them.
            </p>
            <p>
              This service comes with an audio recording which will be emailed
              to you three (3) business days after the reading.
            </p>
          </details>
          <details>
            <summary className="secondary">
              Synastry Chart Reading (60 minutes for $125)
            </summary>
            <p>
              The Synastry Chart (also known as the Compatibility Chart)
              involves looking at the overlay of two individuals’ natal charts
              and analyzing how they interact with one another. This is one of
              the most useful tools in understanding the day-to-day relating
              between two people, and identifying where the relationship shines
              and what areas are more difficult to deal with.{" "}
            </p>
            <p>
              My approach to synastry readings is not to provide a judgement on
              whether a relationship should exist, but instead help the
              individuals involved get more of what they both want and need from
              their bond.
            </p>
            <p>
              This service comes with an audio recording which will be emailed
              to you three (3) business days after the reading.
            </p>
          </details>
          <details>
            <summary className="secondary">
              Value Pack Readings (3 Natal Chart Readings minutes for $220)
            </summary>
            <p>
              This service gives you three (3) natal chart readings at a reduced
              price.This option is great if you’re looking for my services as a
              return client, or would like to dig deeper into your chart beyond
              what is possible in a regular one hour session.
            </p>
            <p>
              At this time, I do not offer value pack readings for compatibility
              charts (synastry, composite,etc.). Please schedule the date you’d
              like your first reading, and I will contact you after to schedule
              the following two (2) readings.
            </p>
            <p>
              This service comes with three (3) audio recordings in total, each
              of which will be emailed to you three (3) business days afterward.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
