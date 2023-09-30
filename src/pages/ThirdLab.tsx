import Card from "../components/Card";
import Header from "../components/Header";
import Line from "../components/Line";
import { Link } from "react-scroll";
import { ReactSVG } from "react-svg";

import { hobbies } from "../constants/hobbies";

import { BsArrowDownCircle } from "react-icons/bs";
import { GiBurningDot } from "react-icons/gi";

import picture from "../assets/picture.svg";
import contact from "../assets/contact.svg";
import telegram from "../assets/telegram.svg";
import github from "../assets/github.svg";
import mail from "../assets/vk.svg";
import CopyToClipboard from "../components/CopyToClipboard";

const ThirdLab = () => {
  

  return (
    <div className="flex flex-col gap-40 w-full min-h-screen p-5 px-24 ">
      <Header />
      <section className="flex flex-col gap-40" id="hero">
        <div className="flex justify-center items-center gap-24">
          <img src={picture} className="w-[350px] h-[350px]" />
          <div className="w-[600px]">
            <p className="text-[#FF5824] font-[600] text-[80px]">Привет!</p>
            <p className="text-[40px] font-medium">
              Меня зовут Фетисов Роман и я будущий frontend разработчик!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <BsArrowDownCircle className="text-[#FF5824] animate-bounce w-[60px] h-[60px] hover:text-black hover:cursor-pointer" />
          </Link>
        </div>
      </section>
      <Line />
      <section id="section1" className="flex flex-col gap-20">
        <p className="text-[#FF5824] font-[600] text-[80px]">Обо мне:</p>
        <div className="flex flex-col justify-end items-end gap-32">
          <div className="flex items-center gap-5">
            <GiBurningDot className="w-[20px] h-[20px]" />
            <p className="text-[40px]">Мне 20 лет и живу я в городе Иваново</p>
          </div>
          <div className="flex gap-5 items-center">
            <GiBurningDot className="w-[30px] h-[30px]" />
            <p className="text-[40px]">
              Обучаюсь на 3 курсе ИГЭУ на факультете ИВТФ по специальности
              прикладная информатика в информационной сфере
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <GiBurningDot className="w-[20px] h-[20px]" />
            <p className="text-[40px]">
              Все свободное время трачу на обучение frontend разработке
            </p>
          </div>
        </div>
      </section>
      <Line />
      <section className="flex flex-col justify-center gap-10" id="hobbies">
        <p className="text-[#FF5824] font-[600] text-[80px]">Мои хобби:</p>
        <div className="flex justify-between items-center">
          {hobbies.map((hobbie, index) => (
            <Card key={index} card={hobbie} />
          ))}
        </div>
      </section>
      <Line />
      <footer id="footer" className="flex flex-col gap-28 mb-10">
        <div className="flex items-center gap-8">
          <ReactSVG src={contact} className="" />
          <p className="text-[#FF5824] font-[600] text-[80px]">Контакт</p>
        </div>
        <div className="flex px-[130px] gap-10 justify-between">
          <div className="flex items-center gap-6 justify-center">
            <ReactSVG src={github} />
            <a
              href="https://github.com/Unstate"
              className="text-2xl hover:text-[#FF5824] hover:cursor-pointer transition-all ease-in"
            >
              Github
            </a>
          </div>
          <div className="flex  items-center gap-6 justify-center">
            <ReactSVG src={telegram} />
            <a
              href="https://t.me/Unstate"
              className="text-2xl hover:text-[#FF5824] hover:cursor-pointer transition-all ease-in"
            >
              Telegram
            </a>
          </div>
          <div className="flex  items-center gap-6 justify-center">
            <ReactSVG src={mail} />
            <CopyToClipboard />
          </div>
          <div className="flex items-center gap-6 justify-center">
            <ReactSVG src={telegram} />
            <a
              href="https://vk.com/r.fetisov92"
              className="text-2xl hover:text-[#FF5824] hover:cursor-pointer transition-all ease-in"
            >
              Vk
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThirdLab;
