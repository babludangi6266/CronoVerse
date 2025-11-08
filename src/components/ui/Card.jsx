// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseClass = 'card';
  const variantClass = `card-${variant}`;

  return (
    <div className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;