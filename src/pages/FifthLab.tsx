import { weather } from "../constants/weather";

const FifthLab = () => {
  return (
    <main className="w-full min-h-screen p-6">
      <table>
        <thead>
          <tr className="flex gap-12">
            <th>Город</th>
            <th>Осень</th>
            <th>Зима</th>
            <th>Весна</th>
            <th>Лето</th>
          </tr>
        </thead>
        <tbody>
          {/* {weather.map((weatherElement,index) => <tr>{weatherElement.city}</tr>)} */}
          {weather.map((weatherElement, index) => (
            <tr key={index} className="flex gap-14 ">
              <td className="w-[60px]">{weatherElement.city}</td>
              {weatherElement.weather.map((element, index) => (
                <td key={index}>{element}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default FifthLab;
