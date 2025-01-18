import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = '#0066cc' }) => {
  // Map size options to actual pixel values
  const sizeMap = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80">
      <div 
        className={`relative ${sizeMap[size]} animate-spin rounded-full border-4 border-gray-200`}
      >
        <div 
          className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent"
        />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;