import { useEffect, useState } from "react";
import { columnNames, weather } from "../constants/weather";
import { weatherTranslator } from "../utils/weatherTranslator";
import {
  convertToAmericanFormat,
  convertToDDMMYYWithSlash,
  convertToDD_MM_YYYY,
  convertToFullMonthYear,
  convertToRoman,
  sortDatesByModernity,
} from "../utils/dateConverter";

const FifthLab = () => {
  const [sortedDates, setSortedDates] = useState<string[]>([]);

  useEffect(() => {
    const initialDates: string[] = [
      "05.07.14",
      "02.12.10",
      "21.04.08",
      "11.10.09",
      "06.06.16",
      "05.06.16",
      "22.11.01",
      "14.01.11",
      "20.12.11",
      "01.03.10",
      "26.09.15",
      "17.02.06",
    ];
    const sorted = sortDatesByModernity(initialDates);
    setSortedDates(sorted);
  }, []);

  return (
    <main className="w-full min-h-screen p-6 flex flex-col gap-10">
      <table className="border border-red-500">
        <caption className="text-center text-lg font-bold py-2">
          Подпись к таблице
        </caption>
        <thead>
          <tr>
            {columnNames.map((columnName) => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weather.map((weatherElement, index) => (
            <tr key={index}>
              <td className="p-6">{weatherElement.city}</td>
              <td className="p-6">{weatherElement.autumn}</td>
              <td className="p-6">{weatherElement.winter}</td>
              <td className="p-6">{weatherElement.spring}</td>
              <td className="p-6">{weatherElement.summer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="border border-red-500">
        <caption className="text-center text-lg font-bold py-2">
          Подпись к таблице
        </caption>
        <thead>
          <tr>
            {columnNames.map((columnName) => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weather.map((weatherElement, index) => (
            <tr key={index}>
              <td className="p-6">{weatherElement.city}</td>
              <td className="p-6">
                {weatherTranslator(weatherElement.autumn)}
              </td>
              <td className="p-6">
                {weatherTranslator(weatherElement.winter)}
              </td>
              <td className="p-6">
                {weatherTranslator(weatherElement.spring)}
              </td>
              <td className="p-6">
                {weatherTranslator(weatherElement.summer)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="border border-red-500">
        <thead>
          <tr>
            <th className="p-6">Исходная отсортированная дата</th>
            <th className="p-6">ДД/ММ/ГГ</th>
            <th className="p-6">ДД_ММ_ГГГГ</th>
            <th className="p-6">Полное наименование месяца</th>
            <th className="p-6">Американский формат</th>
            <th className="p-6">Римские числа</th>
          </tr>
        </thead>
        <tbody>
          {sortedDates.map((date, index) => (
            <tr key={index}>
              <td className="p-6">{date}</td>
              <td className="p-6">{convertToDDMMYYWithSlash(date)}</td>
              <td className="p-6">{convertToDD_MM_YYYY(date)}</td>
              <td className="p-6">{convertToFullMonthYear(date)}</td>
              <td className="p-6">{convertToAmericanFormat(date)}</td>
              <td className="p-6">{convertToRoman(date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default FifthLab;
