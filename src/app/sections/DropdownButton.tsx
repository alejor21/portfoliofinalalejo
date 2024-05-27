import React, { useState } from 'react';

const DropdownButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        className="bg-blue-500 text-white rounded-full w-10 h-10 text-xl grid place-items-center focus:outline-none"
        onClick={toggleMenu}
      >
        A
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sobre mí</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Proyectos</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Aficiones</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Herramientas</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contacto</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
