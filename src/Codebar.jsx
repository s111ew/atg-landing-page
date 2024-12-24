import arrowBlue from "./assets/images/icons/arrow.svg"
import arrowWhite from "./assets/images/icons/arrowWhite.svg"

function Codebar() {
  return (
    <div className="codebar bg">
      <span>npm i alt-text-generator</span>
      <Button />
    </div>
  )
}

function copyTextToUserClipboard() {
  navigator.clipboard.writeText("npm i alt-text-generator")
}

function animateButton() {
  const spans = document.querySelectorAll(".code > div")
  spans.forEach(span => {
    span.classList.add("animate-button")
  })
  setTimeout(() => {
    spans.forEach(span => {
      if (span.classList.contains("animate-button")) {
        span.classList.remove("animate-button")
      }
    })
  }, 4000)
}

function handleClick() {
  copyTextToUserClipboard();
  animateButton();
}

function Button() {
  return(
    <div className="code button" tabIndex={4} onClick={handleClick} onMouseEnter={() => arrowChangeColour("white")} onMouseLeave={() => arrowChangeColour("blue")}>
      <div className="button-container top">
        <span>Copy</span><img className="arrow" src={arrowBlue} alt="Arrow icon"></img>
      </div>
      <div className="button-container middle">
        <span>Copied</span>
      </div>
      <div className="button-container bottom">
        <span>Copy</span><img className="arrow" src={arrowBlue} alt="Arrow icon"></img>
      </div>
    </div>
  )
}

function arrowChangeColour(colour) {
  const arrows = document.querySelectorAll(".arrow")
  let colourToApply
  arrows.forEach(arrow => {
    if (colour === "blue") {
      colourToApply = arrowBlue;
    } else if (colour === "white") {
      colourToApply = arrowWhite;
    }
    arrow.src = colourToApply
  })
}

export default Codebar