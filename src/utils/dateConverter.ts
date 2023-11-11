export const sortDatesByModernity = (dates: string[]) => {
  return dates.sort((a, b) => {
    const datePartsA = a.split(".").reverse().join("");
    const datePartsB = b.split(".").reverse().join("");
    return datePartsB.localeCompare(datePartsA);
  });
};

export const convertToDDMMYYWithSlash = (date: string) =>
  date.replace(/\./g, "/");
export const convertToDD_MM_YYYY = (date: string) =>
  date.split(".").reverse().join("_");
export const convertToFullMonthYear = (date: string) => {
  const [day, month, year] = date.split(".");
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return `${day} ${months[parseInt(month) - 1]} ${year}`;
};
export const convertToAmericanFormat = (date: string) => {
  const [day, month, year] = date.split(".");
  return `${month}.${day}.${year}`;
};

export const convertToRoman = (date: string): string => {
  const [day, month, year] = date.split('.');

  function toRoman(n: number): string {
      const romanNumerals: { [key: number]: string } = {
          1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L'
      };
      const arabicNumbers: number[] = [1, 4, 5, 9, 10, 40, 50];
      let result = '';
      let i = arabicNumbers.length - 1;

      while (n > 0) {
          const div = Math.floor(n / arabicNumbers[i]);
          n %= arabicNumbers[i];
          result += romanNumerals[arabicNumbers[i]].repeat(div);
          i--;
      }
      return result;
  }

  const romanDay = toRoman(parseInt(day, 10));
  const romanMonth = toRoman(parseInt(month, 10));
  const romanYear = toRoman(parseInt(year, 10));

  return `${romanDay}.${romanMonth}.${romanYear}`;
}