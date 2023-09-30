import React, { memo } from "react";
import { Link } from "react-scroll";
import { dropdownList } from "../constants/list";
import { useDropdownList } from "../hooks/useDropdownList";

const DropdownList: React.FC = memo(() => {
  const { isDropdownOpen, popupRef, toggleDropdown } = useDropdownList();

  return (
    <aside className="relative inline-block text-left text-xl" ref={popupRef}>
      <button
        type="button"
        className="transition-all ease-in px-4 py-2  font-medium text-white bg-[#FF5824] border rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-opacity-50 text-xl"
        onClick={toggleDropdown}
      >
        Открыть список
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all ease-in">
          <div className="py-1">
            {dropdownList.map((listElement, index) => (
              <Link
                key={index}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-200}
                duration={400}
                to={listElement.to}
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:cursor-pointer"
              >
                {listElement.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
});

export default DropdownList;
