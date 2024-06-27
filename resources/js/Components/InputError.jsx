import React from 'react';

export default function InputError({ message, className = '', ...props }) {
  if (!message || typeof message !== 'string') {
    return null;
  }

  return (
    <p {...props} className={`text-sm text-red-600 ${className}`}>
      {message}
    </p>
  );
}
