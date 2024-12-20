import climbing from "./assets/images/png/Climbing.png"
import arrow from "./assets/images/icons/arrow.svg"
import { asciiString, htmlString } from "./asciiString"

function Background() {
  return(
    <div className="background">
      <div className="container" tabIndex={4} onMouseEnter={cursorImageIsVisible} onMouseLeave={cursorImageIsNotVisible}>
        <Image />
        <Canvas />
      </div>
    </div>
  )
}

function Image() {
  return(
    <img className="image" src={climbing} alt="A rock climber hangs on to an overhanging cliff face with a backdrop of bright sun" />
  )
}

function Canvas() {
  return(
    <div className="canvas-to-draw" onClick={renderGrid}></div>
  )
}

function renderGrid() {
  const canvas = document.querySelector(".canvas-to-draw");
  canvas.classList.add("visible")
  for (let i = 0; i < 1600; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell")
    canvas.appendChild(cell)
  }
  populateGrid()
}

function populateGrid() {
  const asciiArray = asciiString.split("")
  const cells = document.querySelectorAll(".cell")
  cells.forEach((cell, index) => {
    setTimeout(() => {
      cell.textContent = asciiArray[index]
    }, 1 * index)
  })
  rePopulateGrid()
}

function rePopulateGrid() {
  const htmlArray = htmlString.split("")
  const cells = document.querySelectorAll(".cell")
  let count = 0
  cells.forEach((cell, index) => {
    setTimeout(() => {
      if (index >= 562 && index <= 578 || ) {
        cell.textContent = htmlArray[count]
        count++
      } else {
        cell.textContent = "."
      }
    }, 2000 + (1 * index))
  })
  console.log(htmlArray, htmlArray.length)
}

function cursorImageIsVisible() {
  const cursorImage = document.createElement("div")
  cursorImage.classList.add("button")
  cursorImage.classList.add("follow")
  cursorImage.style.pointerEvents = "none";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container")

  const textSpan = document.createElement("span");
  textSpan.textContent = "Try"

  const cursorImageIcon = document.createElement("img");
  cursorImageIcon.src = arrow;
  cursorImageIcon.classList.add("arrow")

  buttonContainer.appendChild(textSpan)
  buttonContainer.appendChild(cursorImageIcon)

  cursorImage.appendChild(buttonContainer)

  document.body.appendChild(cursorImage)

  document.addEventListener("mousemove", (e) => {
    cursorImage.style.left = e.clientX + 10 + "px"
    cursorImage.style.top = e.clientY + 10 + "px"
  })
}

function cursorImageIsNotVisible() {
  const cursorImage = document.querySelector(".follow.button")
  if (cursorImage) {
    cursorImage.remove()
  }
}

export default Background