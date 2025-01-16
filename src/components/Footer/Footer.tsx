//ts boilerplate
import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
