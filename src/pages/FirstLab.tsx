import { AiOutlineSearch } from "react-icons/ai";
import { BsFillKeyboardFill, BsCameraFill } from "react-icons/bs";
import { BiSolidMicrophone } from "react-icons/bi";

const FirstLab = () => {
  return (
    <main className="flex flex-col w-full min-h-screen p-6 justify-center items-center gap-10">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
      <div className="w-[1100px] p-4 px-6 border-gray-300 border-[1px] rounded-full flex gap-5 hover:shadow-md hover:ring-4 hover:ring-gray-100 ">
        <AiOutlineSearch
          title="Поиск"
          className="w-[30px] h-full text-gray-400"
        />
        <input className="w-full text-2xl outline-none" type="text" />
        <BsFillKeyboardFill
          title="Экранная клавиатура"
          className="w-[30px] h-full"
        />
        <BiSolidMicrophone
          title="Голосовой поиск"
          className="w-[30px] h-full"
        />
        <BsCameraFill title="Поиск по картинке" className="w-[30px] h-full" />
      </div>
      <div className="flex gap-4">
        <button className="bg-gray-100 py-3 px-4 text-lg border-[1px] border-gray-100 hover:border-[1px] hover:border-gray-300 rounded-md">
          Поиск в Google
        </button>
        <button className="bg-gray-100 py-3 px-4 text-lg border-[1px] border-gray-100 hover:border-[1px] hover:border-gray-300 rounded-md">
          Мне повезет!
        </button>
      </div>
    </main>
  );
};

export default FirstLab;
