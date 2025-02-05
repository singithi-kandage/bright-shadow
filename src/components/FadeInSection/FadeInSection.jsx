import { useState, useRef, useEffect } from "react";
import "./FadeInSection.scss";
const FadeInSection = (props) => {
  const { children, customStyle } = props;
  const domRef = useRef();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? " is-visible" : ""}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};
export default FadeInSection;
