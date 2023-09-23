const FirstLab = () => {
  return (
    <main className="flex flex-col w-full min-h-screen p-6 justify-center items-center gap-10">
      <div className="w-[400px] h-[150px] bg-red-500 h-"></div>
      <div className="w-[1100px] p-4 border-gray-500 border-[2px] rounded-full flex gap-5 hover:shadow-md hover:ring-4 hover:ring-gray-300 transition duration-300 ease-in-out">
        <div title="поиск" className="w-[30px] h-full bg-red-500"></div>
        <input className="w-full text-2xl outline-none" type="text" />
        <div
          title="Экранная клавиатура"
          className="w-[30px] h-full bg-red-500"
        ></div>
        <div
          title="Голосовой поиск"
          className="w-[30px] h-full bg-red-500"
        ></div>
        <div
          title="Поиск по картинке"
          className="w-[30px] h-full bg-red-500"
        ></div>
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
