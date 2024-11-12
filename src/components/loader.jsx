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
<div className="px-[10px] loader-text tracking-in-expand-fwd flex items-center">
  Hi
  <span className="flex items-center ml-1 mr-2">
    <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30" alt="wave" />,
  </span>
   Welcome to my Portfolio
</div>
    </div>
  );
};

export default Loader;
