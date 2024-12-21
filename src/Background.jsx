import climbing from "./assets/images/png/Climbing.webp"
import dog from "./assets/images/png/Dog.webp"
import dunes from "./assets/images/png/Dunes.webp"
import cactus from "./assets/images/png/Cactus.webp"
import mountain from "./assets/images/png/Mountains.webp"
import folderBack from "./assets/images/png/folderBack.webp"
import folderFront from "./assets/images/png/folderFront.png"
import { useEffect } from "react"

const images = [
  { key: 1, src: dog, alt: "A golden labrador looks at the camera with a backdrop of an American flag", rotation: -6, translate: -60, rotationSnippet: 3, translateSnippet: 35}, 
  { key: 2, src: dunes, alt: "Rolling sand dunes with a backdrop of a light blue sky", rotation: 10, translate: -40, rotationSnippet: -2, translateSnippet: 40}, 
  { key: 3, src: cactus, alt: "A collection of succulents and small cactuses in teracotta pots", rotation: -4, translate: 50, rotationSnippet: 6, translateSnippet: -70}, 
  { key: 4, src: climbing, alt: "A rock climber scales a steep overhanging rock face as the sun beams behind her", rotation: 8, translate: -40, rotationSnippet: -2, translateSnippet: 40}, 
  { key: 5, src: mountain, alt: "A snowy mountain peaks above the clouds", rotation: -12, translate: 60, rotationSnippet: 6, translateSnippet: -80}, 
]

function Background() {
  useFloatAnimations();

  return(
    <div className="background">
      <div className="container">
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
    "alt=",
    '"'
  ]

  const codeSnippets = images.map(image => 
    <div className="snippet will-float" key={image.key} style={{ transform: `rotate(${image.rotationSnippet}deg) translateX(${image.translateSnippet}px)` }}>
      <span className="pre">{codeStrings[0]}</span>
      <span className="pre">{codeStrings[1]}</span>
      <span className="alt">{image.alt}</span>
      <span className="pre">{codeStrings[1]}</span>
    </div>
  )
  return (
    <div className="spawn-point">
      {imageItems}
      {codeSnippets}
    </div>
  )
}

function useFloatAnimations() {
  useEffect(() => {
    const images = document.querySelectorAll(".image.will-float");
    const snippets = document.querySelectorAll(".snippet.will-float");

    images.forEach((image, index) => {
      setTimeout(() => image.classList.add("float-up"), index * 5000);
    });

    snippets.forEach((snippet, index) => {
      setTimeout(() => snippet.classList.add("float-up"), index * 5000);
    });
  }, []);
}

export default Background