import arrowBlue from "./assets/images/icons/arrow.svg"
import arrowWhite from "./assets/images/icons/arrowWhite.svg"

function Copybar() {
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
    <div className="code button" tabIndex={4} onClick={handleClick} onMouseEnter={arrowIsWhite} onMouseLeave={arrowIsBlue}>
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

function arrowIsWhite() {
  const arrows = document.querySelectorAll(".arrow")
  arrows.forEach(arrow => {
    arrow.src = arrowWhite
  })
}
function arrowIsBlue() {
  const arrows = document.querySelectorAll(".arrow")
  arrows.forEach(arrow => {
    arrow.src = arrowBlue
  })
}

export default Copybar