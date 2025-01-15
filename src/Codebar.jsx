import arrowBlue from "./assets/images/icons/arrow.svg"
import arrowWhite from "./assets/images/icons/arrowWhite.svg"
import { useState, useRef, useEffect } from "react"

function Codebar() {
  return (
    <div className="codebar bg">
      <span>npm i alt-text-generator</span>
      <Button />
    </div>
  );
}

function copyTextToUserClipboard() {
  navigator.clipboard.writeText("npm i alt-text-generator")
};

function animateButton() {
  const spans = document.querySelectorAll(".code > div");
  spans.forEach((span) => {
    span.classList.add("animate-button");
  });
  setTimeout(() => {
    spans.forEach((span) => {
      if (span.classList.contains("animate-button")) {
        span.classList.remove("animate-button");
      }
    });
  }, 4000);
}

function Button() {
  const [isFocused, setIsFocused] = useState(false);
  const timeoutRef = useRef(null);
  const buttonRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth > 485);

  const updateMedia = () => {
    setIsMobile(window.innerWidth > 485)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
  })



  function handleMouseEnter() {
    arrowChangeColour("white");
  }

  function handleMouseLeave() {
    if (!isFocused) {
      arrowChangeColour("blue");
    }
  }

  function handleFocus() {
    setIsFocused(true);
    arrowChangeColour("white");
  }

  function handleBlur() {
    setIsFocused(false);
    clearTimeout(timeoutRef.current);
    arrowChangeColour("blue");
  }

  function handleClick() {
    copyTextToUserClipboard();
    animateButton();

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    }, 5000);
  }

  return (
    <button
      ref={buttonRef}
      className="code button"
      tabIndex={4}
      onClick={handleClick}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      onKeyDown={(e) => (e.key === "Enter" ? handleClick() : "")}
    >
      <div className="button-container top">
        <span>Copy</span>
        { isMobile ? <img className="arrow" src={arrowBlue} alt="Arrow icon"></img> : ''}
      </div>
      <div className="button-container middle">
        <span>Copied</span>
      </div>
      <div className="button-container bottom">
        <span>Copy</span>
        { isMobile ? <img className="arrow" src={arrowBlue} alt="Arrow icon"></img> : ''}
      </div>
    </button>
  );
}

function arrowChangeColour(colour) {
  const arrows = document.querySelectorAll(".arrow");
  if (!arrows) {
    return
  }
  let colourToApply;
  arrows.forEach((arrow) => {
    if (colour === "blue") {
      colourToApply = arrowBlue;
    } else if (colour === "white") {
      colourToApply = arrowWhite;
    }
    arrow.src = colourToApply;
  });
}

export default Codebar;
