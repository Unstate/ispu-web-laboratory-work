import { FC } from "react";
import { IHobbies } from "../constants/hobbies";
import { useCardHover } from "../hooks/useCardHover";

interface CardProps {
  card: IHobbies;
}

const Card: FC<CardProps> = ({ card }) => {
  const { handleNotHover, handleOnHover, isHover } = useCardHover();

  return (
    <div
      className={`relative w-[400px] h-[350px] transition-all ease-linear border-[1px] border-[#FF5824] p-5 rounded-xl`}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleNotHover}
    >
      <card.image className="w-full h-full" />
      {isHover && (
        <div className="text-white absolute bottom-0 right-0 w-full h-32 bg-[#000000b7] z-10 animate-slide-up flex items-center justify-center p-5 rounded-xl">
          {card.description}
        </div>
      )}
    </div>
  );
};

export default Card;
