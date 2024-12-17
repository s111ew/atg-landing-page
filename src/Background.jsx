import ImageRow from "./imageRow.jsx"
import img1 from "./assets/images/carousel-1/carousel-row-1-1.png"
import img2 from "./assets/images/carousel-1/carousel-row-1-2.png"
import img3 from "./assets/images/carousel-1/carousel-row-1.png"
import img4 from "./assets/images/carousel-1/carousel-row-1(1).png"
import img5 from "./assets/images/carousel-1/carousel-row-1(2).png"
import img6 from "./assets/images/carousel-1/carousel-row-1(3).png"
import img7 from "./assets/images/carousel-1/carousel-row-1(4).png"

const images = [img1, img2, img3, img4, img5, img6, img7]

function Background() {
  return (
    <div className="background">
      <ImageRow images={images}/>
      <ImageRow images={images}/>
      <ImageRow images={images}/>
    </div>
  )
}

export default Background