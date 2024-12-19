import arrow from "./assets/images/icons/arrow.svg"

function Copybar() {
  return (
    <div className="codebar bg" tabIndex={4}>
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
    <div className="code button" onClick={handleClick}>
      <div className="button-container top">
        <span>Copy</span><img className="arrow" src={arrow} alt="Arrow icon"></img>
      </div>
      <div className="button-container middle">
        <span>Copied</span>
      </div>
      <div className="button-container bottom">
        <span>Copy</span><img className="arrow" src={arrow} alt="Arrow icon"></img>
      </div>
    </div>
  )
}

export default Copybar