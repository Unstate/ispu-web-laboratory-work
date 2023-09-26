import React, { useState } from 'react';

const DropdownList: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left text-xl">
      <button
        type="button"
        className="px-4 py-2  font-medium text-gray-700 bg-gray-200 border rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-opacity-50 text-xl"
        onClick={toggleDropdown}
      >
        Открыть список
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Пункт 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Пункт 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Пункт 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Пункт 4
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Пункт 5
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownList