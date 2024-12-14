import React from "react";

const Gallery = () => {
  const images = [
    { src: "https://files.catbox.moe/dohjxg.jpg", alt: "Surreal Image 1" },
    { src: "https://files.catbox.moe/2vqmr4.gif", alt: "Surreal Image 2" },
    { src: "https://files.catbox.moe/wpc6re.jpg", alt: "Surreal Image 3" },
  ];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default Gallery;
