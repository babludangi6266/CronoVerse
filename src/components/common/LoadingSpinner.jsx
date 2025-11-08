// // src/components/common/LoadingSpinner.jsx
// import React from 'react';

// const LoadingSpinner = ({ size = 'medium' }) => {
//   const sizeClass = {
//     small: 'spinner-small',
//     medium: 'spinner-medium',
//     large: 'spinner-large'
//   }[size];

//   return (
//     <div className={`loading-spinner ${sizeClass}`}>
//       <div className="spinner"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;
// src/components/common/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div className={`loading-spinner spinner-${size}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;