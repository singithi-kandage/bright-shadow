import { Fragment } from "react";
import FadeInSection from "@/components/FadeInSection/FadeInSection";
import Footer from "@/components/Footer/Footer";

import "./MissionPage.scss";

const MissionPage = () => {
  return (
    <Fragment>
      <div className="page">
        <section className="section mission-section">
          <FadeInSection>
            <div className="section-content">
              <h1 className="text-center">Mission</h1>
            </div>
          </FadeInSection>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default MissionPage;
