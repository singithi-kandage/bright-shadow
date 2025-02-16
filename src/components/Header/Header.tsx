import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

// logo from assets
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuActive, setIsUseMenuActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsUseMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="Bright Shadow Astrology" />
            </Link>
          </li>
        </ul>
        <ul className="nav-links">
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

      <nav className="mobile-menu" ref={menuRef}>
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="Bright Shadow Astrology" />
            </Link>
          </li>
        </ul>
        <ul>
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
          <li>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsUseMenuActive(!isMenuActive)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={`mobile-menu-content ${
                isMenuActive ? "mobile-menu-content-active" : ""
              }`}
            >
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
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
