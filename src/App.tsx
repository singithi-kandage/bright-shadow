import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage/HomePage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ServicesPage from "@/pages/ServicesPage/ServicesPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsConditionsPage from "@/pages/TermsConditionsPage/TermsConditionsPage";
import FAQPage from "./pages/FAQPage/FAQPage";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

import Header from "@/components/Header/Header";

// styles
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <main
          style={{
            position: "absolute",
            top: "0px",
            width: "100%",
            height: "fit-content",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsConditionsPage />}
            />
            <Route path="/faqs" element={<FAQPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
