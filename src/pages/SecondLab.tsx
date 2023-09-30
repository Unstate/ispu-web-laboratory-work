import AudioPlayer from "../components/AudioPlayer";
import Slider from "../components/Slider";
import { CRImages } from "../constants/CRImages";
import { ReactSVG } from "react-svg";

import { LuDot } from "react-icons/lu";

import criRo from "../assets/criRo.jpg";
import paypal from "../assets/paypal.svg";
import openai from "../assets/openai.svg";
import tesla from "../assets/tesla.svg";
import nike from "../assets/nike.svg";
import binance from "../assets/binance.svg";
import test2 from "../assets/test2.png";
import goldenBoot from "../assets/goldenBoot.png";

const SecondLab = () => {
  return (
    <main className="w-full  min-h-screen flex flex-col bg-[#181513] gap-72 p-16">
      <section className=" text-white text-3xl w-full h-[30%] flex items-center">
        <div className="w-5/6 h-full flex flex-col justify-center gap-16 p-8">
          <div className="w-full flex justify-end text-xl italic">
            <p>"Работай тихо, дай своим успехам зашуметь."</p>
          </div>
          <div>
            <p className="text-center font-[550]">
              Кристиано Роналдо: Легенда Футбола и Персональные Достижения
            </p>
          </div>
          <div className="flex justify-start text-xl italic">
            <p className="-rotate-[30]">
              "Я всегда готов к вызовам и новым целям."
            </p>
          </div>
        </div>
        <div className="w-1/6 h-full">
          <img src={criRo} className="w-full h-full object-cover" />
        </div>
      </section>
      <section className="w-full h-[10%] flex items-center justify-center text-center text-2xl text-white">
        <p>Рекордсмен по забитым голам</p>
        <LuDot />
        <p>Один из самых популярных спортсменов</p>
        <LuDot />
        <p>Плейбой</p>
        <LuDot />
        <p>Миллионер</p>
        <LuDot />
        <p>Филантроп</p>
      </section>
      <section className="w-full h-[45%] select-none flex justify-center items-center">
        <Slider imageArray={CRImages} />
      </section>
      <section className=" w-full h-[15%] flex">
        <div className="h-full w-[50%] bg-[#181513] flex justify-between items-center p-5">
          <ReactSVG
            src={nike}
            width={100}
            height={100}
            className="fill-white"
          />
          <ReactSVG
            src={paypal}
            width={100}
            height={100}
            className="fill-white"
          />
          <ReactSVG
            src={openai}
            width={100}
            height={100}
            className="fill-white"
          />
          <ReactSVG
            src={tesla}
            width={100}
            height={100}
            className="fill-white"
          />
          <ReactSVG
            src={binance}
            width={100}
            height={100}
            className="fill-white"
          />
        </div>
        <div className="h-full w-[20%] flex items-center justify-center">
          <AudioPlayer />
        </div>
        <div className="h-full w-[30%] flex items-center justify-between p-5">
          <img src={test2} className="object-cover w-[90px] h-[110px]" />
          <img src={goldenBoot} className="object-cover w-[90px] h-[110px]" />
          <img src={test2} className="object-cover w-[90px] h-[110px]" />
          <img src={goldenBoot} className="object-cover w-[90px] h-[110px]" />
          <img src={test2} className="object-cover w-[90px] h-[110px]" />
        </div>
      </section>
    </main>
  );
};

export default SecondLab;
