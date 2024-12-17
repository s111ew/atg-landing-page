function ImageRow ({images}) {
  return (
    <div className="row">
      {images.map((imageSrc, index) => (
          <ImageComponent key={index} src={imageSrc} />
      ))}
    </div>
  );
};

function ImageComponent ({ src, alt = "Image" }) {
  return (
    <img className="thumbnail" src={src} alt={alt} />
  );
};

export default ImageRow