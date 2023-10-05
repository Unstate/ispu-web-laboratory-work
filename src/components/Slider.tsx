import { FC, MouseEvent, memo } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useSlider } from "../hooks/useSlider";

interface SliderProps {
  imageArray: string[];
}

const Slider: FC<SliderProps> = memo(({ imageArray }) => {

  const {decrement,increment,selectedImage} = useSlider(0,imageArray)
  
  return (
    <aside
      className="flex items-center justify-center gap-10 bg-transparent w-full"
      onClick={(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <BsArrowLeftShort
        onClick={(e: MouseEvent<SVGSVGElement, MouseEvent>) => decrement(e)}
        className={`relative left-[100px] z-20 w-[50px] h-[50px] rounded-full bg-white border-[1px] border-black hover:bg-black hover:cursor-pointer hover:text-white transition-all ease-in `}
      />
      <img
        src={imageArray[selectedImage]}
        className="h-[350px] object-cover w-1/2"
      />
      <p className="text-2xl text-white w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        libero veritatis quae, quod blanditiis excepturi rerum id quo delectus
        ipsa dolores, quas accusamus possimus animi? Nostrum ipsa iure molestias
        officiis. Repellat quis quam assumenda voluptate incidunt unde nisi
        necessitatibus quo eligendi odio, saepe, at veniam consequuntur animi
        non. Est odit molestiae et corporis provident quidem voluptatem dolorem
        mollitia facilis cupiditate?
      </p>
      <BsArrowRightShort
        className={`relative right-[100px] z-20 w-[50px] h-[50px] rounded-full bg-white border-[1px] border-black hover:bg-black hover:cursor-pointer hover:text-white transition-all ease-in `}
        onClick={(e: MouseEvent<SVGSVGElement, MouseEvent>) => increment(e)}
      />
    </aside>
  );
});

export default Slider;
