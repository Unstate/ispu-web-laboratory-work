import { useState } from "react";

export const useCardHover = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleOnHover = () => {
    setIsHover(true);
  };
  const handleNotHover = () => {
    setIsHover(false);
  };

  return {isHover, handleNotHover, handleOnHover}
};
