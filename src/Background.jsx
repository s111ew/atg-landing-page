import dunes from "./assets/images/png/Dunes.png";
import arrow from "./assets/images/icons/arrow.svg"

function Background() {
  return(
    <div className="background">
      <div className="container" tabIndex={4} onClick={drawToCanvas} onMouseEnter={cursorImageIsVisible} onMouseLeave={cursorImageIsNotVisible}>
        <Image />
        <Canvas />
      </div>
    </div>
  )
}

function Image() {
  return(
    <img className="image" src={dunes} alt="Rolling sand dunes with a blue sky backdrop" />
  )
}

function Canvas() {
  return(
    <canvas className="canvas-to-draw"></canvas>
  )
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

function drawToCanvas() {
  const canvas = document.querySelector(".canvas-to-draw")
  const context = canvas.getContext("2d")
  const image = document.querySelector(".image")

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data;

  console.log(data.length / 4)
};

export default Background