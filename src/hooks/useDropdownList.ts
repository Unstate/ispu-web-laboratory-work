import { useEffect, useRef, useState } from "react";

export const useDropdownList = () => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Закрываем попап, если клик был вне его
      }
    };
    if (isDropdownOpen) {
      // Добавляем обработчик клика при открытом попапе
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      // Удаляем обработчик при закрытии попапа
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen, setIsDropdownOpen]);

  return { popupRef, isDropdownOpen, toggleDropdown };
};
