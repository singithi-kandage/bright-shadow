import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage/HomePage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ServicesPage from "@/pages/ServicesPage/ServicesPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsConditionsPage from "@/pages/TermsConditionsPage/TermsConditionsPage";

// styles
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/term-and-conditions" element={<TermsConditionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
