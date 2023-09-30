export interface IDropDownlist {
  title: string;
  to: string;
}

export const dropdownList: IDropDownlist[] = [
  {
    title: "Главная",
    to: "hero",
  },
  {
    title: "Обо мне",
    to: "section1",
  },
  {
    title: "Хобби",
    to: "hobbies",
  },
  {
    title: "Контакт",
    to: "footer",
  },
];
