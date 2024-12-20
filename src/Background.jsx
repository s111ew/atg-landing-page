import climbing from "./assets/images/png/Climbing.png"
import dog from "./assets/images/png/Dog.png"
import dunes from "./assets/images/png/Dunes.png"
import cactus from "./assets/images/png/Cactus.png"
import mountain from "./assets/images/png/Mountains.png"
// import pumpkin from "./assets/images/png/Pumpkin.png"
import folderBack from "./assets/images/png/folderBack.png"
import folderFront from "./assets/images/png/folderFront.png"

const images = [
  { key: 1, src: dog, alt: "", rotation: -6, translate: -50}, 
  { key: 2, src: dunes, alt: "", rotation: 10, translate: -20}, 
  { key: 3, src: cactus, alt: "", rotation: -4, translate: 40}, 
  { key: 4, src: climbing, alt: "", rotation: 8, translate: -10}, 
  { key: 5, src: mountain, alt: "", rotation: -12, translate: 50}, 
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
  return (
    <div className="spawn-point">
      {imageItems}
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
}

window.onload = imagesFloat

export default Background