import { FC, useState } from "react";
import { IHobbies } from "../constants/hobbies";

interface CardProps {
  card: IHobbies;
}

const Card: FC<CardProps> = ({ card }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleOnHover = () => {
    setIsHover(true);
  };
  const handleNotHover = () => {
    setIsHover(false);
  };
  //   console.log(isHover)

  return (
    <div
      className={`relative w-52 h-52 transition-all ease-linear border-[1px] border-black p-5 rounded-xl`}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleNotHover}
    >
      <card.image className="w-full h-full"/>
      {isHover && (
        <div className="text-white absolute bottom-0 right-0 w-full h-32 bg-[#000000b7] z-10 animate-slide-up flex items-center justify-center p-5 rounded-xl">
          {card.description}
        </div>
      )}
    </div>
  );
};

export default Card;
