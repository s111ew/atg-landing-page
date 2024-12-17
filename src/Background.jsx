import ImageRow from "./imageRow.jsx"
import { images } from "./imageModule.js"
import { imagesTwo } from "./imageModule.js"
import { imagesThree } from "./imageModule.js"

function Background() {
  return (
    <div className="background">
      <ImageRow images={images}/>
      <ImageRow images={imagesTwo}/>
      <ImageRow images={imagesThree}/>
    </div>
  )
}

export default Background