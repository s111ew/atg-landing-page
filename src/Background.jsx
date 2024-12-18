import { useEffect, useRef } from "react";
import dog from "./assets/images/png/Dog.png";
import dunes from "./assets/images/png/Dunes.png";
import landscape from "./assets/images/png/Landscape.png";
import arrowForward from "./assets/images/icons/arrowForward.svg"

const images = [dunes, landscape, dog];

function Background() {
  return (
    <div className="background">
      <div className="image-container">
                  <CanvasImage src={images[0]} />
                  <CanvasImage src={images[1]} />
                  <CanvasImage src={images[2]} />
          <div className="backward button"><img src={arrowForward} alt="" /></div>
          <div className="forward button"><img src={arrowForward} alt="" /></div>
      </div>
    </div>
  );
}

function CanvasImage({ src }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = src;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      height={300}
      width={300}
    />
  );
}

export default Background;
