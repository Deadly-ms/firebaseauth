// File: src/components/Carousel.jsx
import React, { useEffect, useState, useRef } from "react";
import "/src/App.css"; 

// import "./Carousel.css";

// This component loads images from the public folder (/public/assets/...)
// Put your local images in: public/assets/img1.jpg, img2.jpg, img3.jpg

export default function Carousel({ interval = 3000 }) {
  const images = [
    "/src/assets/cyber2.0.1-re.png",
    "/src/assets/cyber-pro1.0.png",
    "/src/assets/cyber2.0-re.png",
    // add more paths if you like
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // advance to next slide
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // autoplayer
  useEffect(() => {
    // clear existing timer
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      next();
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [index, interval]);

  // pause on hover (optional)
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      // restart timer immediately when unpausing
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => next(), interval);
    }
    return () => {};
  }, [isPaused, index, interval]);

  return (
    <>
    <div className="caro-header">
      <h2>##############</h2>
      <div className="meta1">
              <div className="title1">Dev stack</div>
              <p>
              “The computer was born to solve problems that did not exist before.” 
              </p>
              <button>
    <span className="box">
        Explore !
    </span>
</button>
            </div>

     <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      {/* <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}
    </div>
    </div>
    </>
  );
}