import React, { useState, useEffect } from 'react';
// Import your CSS file for styling

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className={`loader-container ${showLoader ? 'show' : 'hide'}`}>
      <div className="loader-text">Welcome to Aremu Website</div>
    </div>
  );
};

export default Loader;
