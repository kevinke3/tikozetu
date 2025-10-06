import React from 'react';
import Button from './Button';

const Button = React.forwardRef(({ children, onClick, className = '', type = 'button', disabled = false }, ref) => (
  <button
    ref={ref}
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
  >
    {children}
  </button>
));
