import Card from "../components/Card";
import Header from "../components/Header";
import Line from "../components/Line";
import { hobbies } from "../constants/hobbies";
import {BiFileBlank} from 'react-icons/bi'

const ThirdLab = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen p-5">
      <Header />
      <Line />
      <section className="flex flex-col gap-5">
        <div className="flex justify-end items-center gap-5">
          <BiFileBlank className="w-[100px] h-[100px]"/>
          <p className="text-[50px] font-medium italic">
            Фетисов Роман{" "}
          </p>
        </div>
        <div className="flex justify-start">
          <p className="text-[50px] font-medium italic">
            В данный момент обучаюсь в ИГЭУ на 3 курсе{" "}
          </p>
        </div>
      </section>
      <aside className="flex justify-center gap-10">
        {hobbies.map((hobbie) => (
          <Card card={hobbie} />
        ))}
      </aside>
      {/* <Footer /> */}
    </div>
  );
};

export default ThirdLab;
