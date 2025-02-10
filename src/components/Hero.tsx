import React, { useState, useEffect } from 'react';
import heroImage1 from '../assets/images/istockphoto-1996826487-2048x2048.jpg';
import heroImage2 from '/home/fredrick/paco-ventures-website/src/assets/images/p2.avif';
import heroImage3 from '/home/fredrick/paco-ventures-website/src/assets/images/el 1.webp';

const Hero: React.FC = () => {
  // Array of background images.
  const images = [heroImage1, heroImage2, heroImage3];

  // Define durations (in ms).
  const transitionDuration = 1000; // Transition duration for crossfade.
  const displayDuration = 5000;    // How long each image is fully displayed.

  // States to track the currently displayed image, the next image (for crossfade), and its opacity.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [nextOpacity, setNextOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index.
      const next = (currentIndex + 1) % images.length;

      // Set the next image and initialize its opacity at 0.
      setNextIndex(next);
      setNextOpacity(0);

      // On the next animation frame, update the opacity to 1.
      // This triggers the CSS transition on the next image.
      requestAnimationFrame(() => {
        setNextOpacity(1);
      });

      // After the transition completes, update the current image and remove the next image layer.
      const timeout = setTimeout(() => {
        setCurrentIndex(next);
        setNextIndex(null);
      }, transitionDuration);

      return () => clearTimeout(timeout);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, displayDuration, transitionDuration]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Base layer: The current image */}
      <img
        src={images[currentIndex]}
        alt="Current Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Crossfade layer: Render only if a next image is set */}
      {nextIndex !== null && (
        <img
          src={images[nextIndex]}
          alt="Next Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: nextOpacity }}
        />
      )}

      {/* Gradient overlay for enhanced depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-transparent to-blue-900 opacity-60"></div>

      {/* Overlay text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 animate-fadeIn">
          Welcome to PACO VENTURES LTD
        </h1>
        <p className="text-white text-2xl md:text-3xl mb-6 animate-fadeIn delay-200">
          Innovation. Reliability. Excellence.
        </p>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl animate-fadeIn delay-400">
          Excellence in Supplies, Installation, Maintenance &amp; Repair Services.
        </p>
        <a
          href="#about"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 animate-fadeIn delay-600"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;
