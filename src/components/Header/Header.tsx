import { Link } from "react-router-dom";
import "./Header.scss";

// logo from assets
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>{/* <strong>Bright Shadow Astrology</strong> */}</li>
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="Bright Shadow Astrology" />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/mission">Mission</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <button>
              <a
                href="https://calendly.com/brightshadowastrology"
                target="_blank"
                rel="noreferrer"
              >
                Book a Reading
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
