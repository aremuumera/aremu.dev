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
    <div className={`loader-container ${showLoader ? ' fade-in-fwd ' : 'slide-out-top'}`}>
      <div className="loader-text tracking-in-expand-fwd">Welcome to Aremu Website</div>
    </div>
  );
};

export default Loader;
