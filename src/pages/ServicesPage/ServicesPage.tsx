//boilerplate
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="page">
      <section className="section services-section">
        <div className="section-content">
          <h1>Services</h1>

          <details>
            <summary role="button" className="secondary">
              Quick Readings (10 minutes for $30)
            </summary>
            <p>...</p>
          </details>
          <details>
            <summary role="button" className="secondary">
              Natal Chart Reading (60 minutes for $100)
            </summary>
            <p>...</p>
          </details>
          <details>
            <summary role="button" className="secondary">
              Synastry Chart Reading (60 minutes for $125)
            </summary>
            <p>...</p>
          </details>
          <details>
            <summary role="button" className="secondary">
              Followup Chart Reading (60 minutes for $100)
            </summary>
            <p>...</p>
          </details>

          {/* <form>
            <fieldset role="group">
              <label>
                First name
                <input
                  name="first_name"
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </label>
              <label>
                Last name
                <input
                  name="last_name"
                  placeholder="Last name"
                  autoComplete="given-name"
                />
              </label>
            </fieldset>

            <fieldset>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
              </label>
              <textarea
                name="bio"
                placeholder="Write a professional short bio..."
                aria-label="Professional short bio"
              ></textarea>
            </fieldset>

            <input type="submit" value="Subscribe" />
          </form> */}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
