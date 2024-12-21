import climbing from "./assets/images/png/Climbing.png"
import dog from "./assets/images/png/Dog.png"
import dunes from "./assets/images/png/Dunes.png"
import cactus from "./assets/images/png/Cactus.png"
import mountain from "./assets/images/png/Mountains.png"
// import pumpkin from "./assets/images/png/Pumpkin.png"
import folderBack from "./assets/images/png/folderBack.png"
import folderFront from "./assets/images/png/folderFront.png"

const images = [
  { key: 1, src: dog, srcString: "/src/assets/Dog.png", alt: "A golden labrador looks at the camera with a backdrop of an American flag", rotation: -6, translate: -60, rotationSnippet: 3, translateSnippet: 35}, 
  { key: 2, src: dunes, srcString: "/src/assets/Dunes.png", alt: "Rolling sand dunes with a backdrop of a light blue sky", rotation: 10, translate: -40, rotationSnippet: -2, translateSnippet: 40}, 
  { key: 3, src: cactus, srcString: "/src/assets/Cactus.png", alt: "A collection of succulents and small cactuses in teracotta pots", rotation: -4, translate: 50, rotationSnippet: 6, translateSnippet: -70}, 
  { key: 4, src: climbing, srcString: "/src/assets/Climbing.png", alt: "A rock climber scales a steep overhanging rock face as the sun beams behind her", rotation: 8, translate: -40, rotationSnippet: -2, translateSnippet: 40}, 
  { key: 5, src: mountain, srcString: "/src/assets/Mountain.png", alt: "A snowy mountain peaks above the clouds", rotation: -12, translate: 60, rotationSnippet: 6, translateSnippet: -80}, 
]

function Background() {
  return(
    <div className="background">
      <div className="container" tabIndex={4}>
        <FolderBack />
        <ImageSpawnPoint />
        <FolderFront />
      </div>
    </div>
  )
}

function FolderBack() {
  return (
    <img className="back folder" src={folderBack} alt="A MacOS folder icon" />
  )
}

function FolderFront() {
  return (
    <img className="front folder" src={folderFront} alt="A MacOS folder icon" />
  )
}

function ImageSpawnPoint() {
  const imageItems = images.map(image =>
    <img 
      className="will-float image" 
      key={image.key} src={image.src} 
      alt={image.alt} 
      style={{ transform: `rotate(${image.rotation}deg) translateX(${image.translate}px)` }}>
    </img>
  )

  const codeStrings = [
    "<",
    "img",
    "src=",
    '"',
    "alt=",
    "</",
    ">"
  ]

  const codeSnippets = images.map(image => 
    <div className="snippet will-float" key={image.key} style={{ transform: `rotate(${image.rotationSnippet}deg) translateX(${image.translateSnippet}px)` }}>
      <span className="grey">{codeStrings[0]}</span>
      <span className="blue">{codeStrings[1]}</span>
      <span> </span>
      <span className="lightBlue">{codeStrings[2]}</span>
      <span className="blue">{codeStrings[3]}</span>
      <span className="blue">{image.srcString}</span>
      <span className="blue">{codeStrings[3]}</span>
      <span> </span>
      <span className="lightBlue">{codeStrings[4]}</span>
      <span className="orange">{codeStrings[3]}</span>
      <span className="orange">{image.alt}</span>
      <span className="orange">{codeStrings[3]}</span>
      <span> </span>
      <span className="grey">{codeStrings[5]}</span>
      <span className="blue">{codeStrings[1]}</span>
      <span className="grey">{codeStrings[6]}</span>
    </div>
  )
  return (
    <div className="spawn-point">
      {imageItems}
      {codeSnippets}
    </div>
  )
}

function imagesFloat() {
  const images = document.querySelectorAll(".image.will-float")
  images.forEach((image, index) => {
    setTimeout(() => {
      image.classList.add("float-up")
    }, index * 5000)
  })

  const snippets = document.querySelectorAll(".snippet.will-float");
  snippets.forEach((snippet, index) => {
    setTimeout(() => {
      snippet.classList.add("float-up")
    }, index * 5000)
  })
}

window.onload = imagesFloat

export default Background