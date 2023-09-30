export interface ITasks {
  title: string;
  questions?: IQuestions[];
  id: number;
  value?: string;
}

export interface IQuestions {
  id: number;
  question: string;
  checked: boolean;
}

export const tasks: ITasks[] = [
  {
    title: "На текущий момент какая последняя версия HTML?",
    id: 1,
    value: ''
  },
  {
    title: "Какой элемент традиционно используется для создания шапки сайта",
    questions: [
      {
        id: 100,
        question: "Footer",
        checked: false,
      },
      {
        id: 1001,
        question: "Header",
        checked: false,
      },
      {
        id: 1002,
        question: "Nav",
        checked: false,
      },
      {
        id: 1003,
        question: "Section",
        checked: false,
      },
    ],
    id: 2,
  },
  {
    title: "Тэг <s> позволяет изменить начертание текста следующим образом:",
    questions: [
      {
        id: 101,
        question: "Сделает полужирным",
        checked: false,
      },
      {
        id: 102,
        question: "Сделает курсивом",
        checked: false,
      },
      {
        id: 103,
        question: "Подчеркнет текст",
        checked: false,
      },
      {
        id: 104,
        question: "Зачеркнет текст",
        checked: false,
      },
      {
        id: 105,
        question: "Превратит текст в нижний индекс",
        checked: false,
      },
    ],
    id: 3,
  },
  {
    title: "Тэги в HTML закрываются при помощи символа:",
    id: 4,
    value: ''
  },
  {
    title: "Отметьте тэги которые отвечают за организацию табличных данных:",
    questions: [
      {
        id: 106,
        question: "<tr>",
        checked: false,
      },
      {
        id: 107,
        question: "<th>",
        checked: false,
      },
      {
        id: 108,
        question: "<td>",
        checked: false,
      },
      {
        id: 1010,
        question: "<br>",
        checked: false
      }
    ],
    id: 5,
  },
  {
    title: "Какое из CSS-свойств отвечает за выбор шрифта текста?",
    questions: [
      {
        id: 109,
        question: "font-stretch",
        checked: false,
      },
      {
        id: 110,
        question: "font-family",
        checked: false,
      },
      {
        id: 111,
        question: "font-weight",
        checked: false,
      },
      {
        id: 112,
        question: "font-style",
        checked: false,
      },
      {
        id: 113,
        question: "font-variant",
        checked: false,
      },
      {
        id: 114,
        question: "font-size",
        checked: false,
      },
    ],
    id: 6,
  },
  {
    title:
      "Для обозначения цвета в свойстве background-color после знака # требуется указать такое количество символов:",
    id: 7,
    value: '',
  },
  {
    title: "Что из перечисленного может быть указано как в body, так и в head?",
    questions: [
      {
        id:115,
        question: "Вставки CSS (style)",
        checked: false
      },
      {
        id: 116,
        question: "Вставки PHP (php)",
        checked: false
      },
      {
        id: 117,
        question: "Вставки JavaScript (script)",
        checked: false
      },
      {
        id: 118,
        question: "Вставки графики (svg)",
        checked: false
      }
    ],
    id: 8,
  }
];

// export interface IQuestions {
//   title: string;
//   questions?: IQuestion[];
//   id: number;
// }

// export interface IQuestion {
//   checked: boolean;
//   questions: string[];
//   id: number
// }

// export const questions: IQuestions[] = [
//   {
//     title: "На текущий момент какая последняя версия HTML?",
//     checked: false,
//     id: 1,
//   },
//   {
//     title: "Какой элемент традиционно используется для создания шапки сайта",
//     questions: {
//       questions: [
//         {
//           title: "Footer",
//           id: 1,
//           checked: false
//         }
//       ],
//     },
//     checked: false,
//     id: 2,
//   },
//   {
//     title: "Тэг <s> позволяет изменить начертание текста следующим образом:",
//     questions: {
//       checked: false,
//       questions: [
//         "Сделает полужирным",
//         "Сделает курсивом",
//         "Подчеркнет текст",
//         "Зачеркнет текст",
//         "Превратит текст в нижний индекс",
//       ],
//     },
//     checked: false,
//     id: 3,
//   },
//   {
//     title: "Тэги в HTML закрываются при помощи символа:",
//     checked: false,
//     id: 4,
//   },
//   {
//     title: "Отметьте тэги которые отвечают за организацию табличных данных:",
//     questions: {
//       checked: false,
//       questions: ["<tr>", "<th>", "<td>"],
//     },
//     checked: false,
//     id: 5,
//   },
//   {
//     title: "Какое из CSS-свойств отвечает за выбор шрифта текста?",
//     questions: {
//       checked: false,
//       questions: [
//         "font-stretch",
//         "font-family",
//         "font-weight",
//         "font-style",
//         "font-variant",
//         "font-size",
//       ],
//     },
//     checked: false,
//     id: 6,
//   },
//   {
//     title:
//       "Для обозначения цвета в свойстве background-color после знака # требуется указать такое количество символов:",
//     checked: false,
//     id: 7,
//   },
//   {
//     title: "Что из перечисленного может быть указано как в body, так и в head?",
//     questions: {
//       checked: false,
//       questions: [
//         "Вставки CSS (<style>)",
//         "Вставки PHP (<php?)",
//         "Вставки JavaScript (<script>)",
//         "Вставки графики (<svga>)",
//       ],
//     },
//     checked: false,
//     id: 8,
//   },
// ];

// export const test = [
//   {
//     title: "На текущий момент какая последняя версия HTML?",
//     checked: false,
//     id: 1,
//   },
//   {
//     title: "Какой элемент традиционно используется для создания шапки сайта",
//     questions: {
//       checked: false,
//       questions: ["Footer", "Section", "Div", "Header"],
//     },
//     checked: false,
//     id: 2,
//   },
//   {
//     title: "Тэг <s> позволяет изменить начертание текста следующим образом:",
//     questions: {
//       checked: false,
//       questions: [
//         "Сделает полужирным",
//         "Сделает курсивом",
//         "Подчеркнет текст",
//         "Зачеркнет текст",
//         "Превратит текст в нижний индекс",
//       ],
//     },
//     checked: false,
//     id: 3,
//   },
//   {
//     title: "Тэги в HTML закрываются при помощи символа:",
//     checked: false,
//     id: 4,
//   },
//   {
//     title: "Отметьте тэги которые отвечают за организацию табличных данных:",
//     questions: {
//       checked: false,
//       questions: ["<tr>", "<th>", "<td>"],
//     },
//     checked: false,
//     id: 5,
//   },
//   {
//     title: "Какое из CSS-свойств отвечает за выбор шрифта текста?",
//     questions: {
//       checked: false,
//       questions: [
//         "font-stretch",
//         "font-family",
//         "font-weight",
//         "font-style",
//         "font-variant",
//         "font-size",
//       ],
//     },
//     checked: false,
//     id: 6,
//   },
//   {
//     title:
//       "Для обозначения цвета в свойстве background-color после знака # требуется указать такое количество символов:",
//     checked: false,
//     id: 7,
//   },
//   {
//     title: "Что из перечисленного может быть указано как в body, так и в head?",
//     questions: {
//       checked: false,
//       questions: [
//         "Вставки CSS (<style>)",
//         "Вставки PHP (<php?)",
//         "Вставки JavaScript (<script>)",
//         "Вставки графики (<svga>)",
//       ],
//     },
//     checked: false,
//     id: 8,
//   },
// ];
