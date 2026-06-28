import React, { useState } from 'react';
import './ImagePlaceholder.css';

const ImagePlaceholder = ({ 
  src, 
  alt = "Dyvigya Care", 
  height = "300px", 
  width = "100%", 
  className = "" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If no source is provided or the image breaks, show the placeholder
  const showPlaceholder = !src || hasError;

  return (
    <div 
      className={`image-wrapper ${className}`} 
      style={{ height, width }}
    >
      {/* The Skeleton Loading / Placeholder State */}
      {(!isLoaded || showPlaceholder) && (
        <div className="placeholder-skeleton">
          <span className="placeholder-text">Image Placeholder<br/>{width} x {height}</span>
        </div>
      )}

      {/* The Actual Image (Lazy Loaded) */}
      {!showPlaceholder && (
        <img
          src={src}
          alt={alt}
          loading="lazy" // Native browser lazy loading for performance
          className={`actual-image ${isLoaded ? 'visible' : 'hidden'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default ImagePlaceholder;