import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <FontAwesomeIcon icon="fa-solid fa-angles-up" size="2x" color="gray" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
