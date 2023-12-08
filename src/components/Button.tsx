// Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void; // Define the prop type for onClick
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} // Use the passed onClick function
      className="transition-all duration-300 border border-gray-200 bg-indigo-500 w-full mt-4 hover:bg-indigo-700 text-white font-bold py-12 px-4 rounded-xl shadow-md"
    >
      Place Bet
    </button>
  );
};

export default Button;
