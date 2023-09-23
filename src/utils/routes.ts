import {
  FifthLab,
  FirstLab,
  FourthLab,
  SecondLab,
  SevenLab,
  SixLab,
  ThirdLab,
} from "../pages";

interface IRoutes {
  path: string;
  element: () => JSX.Element;
  title: string;
}

export const routes: IRoutes[] = [

  {
    path: "/first",
    title: "First labaratory",
    element: FirstLab,
  },
  {
    path: "/second",
    title: "Second labaratory",
    element: SecondLab,
  },
  {
    path: "/third",
    title: "Third labaratory",
    element: ThirdLab,
  },
  {
    path: "/fourth",
    title: "Fourth labaratory",
    element: FourthLab,
  },
  {
    path: "/fifth",
    title: "Fifth labaratory",
    element: FifthLab,
  },
  {
    path: "/six",
    title: "Six labaratory",
    element: SixLab,
  },
  {
    path: "/seven",
    title: "Seven labaratory",
    element: SevenLab,
  },
];
