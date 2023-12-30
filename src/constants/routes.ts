import {
  FifthLab,
  FirstLab,
  FourthLab,
  SecondLab,
  SevenLab,
  SixLab,
  ThirdLab,
} from "../pages";
import Test from "../pages/Test";

interface IRoutes {
  path: string;
  element: () => JSX.Element;
  title: string;
  color: string;
}

export const routes: IRoutes[] = [

  {
    path: "/first",
    title: "First labaratory",
    element: FirstLab,
    color: 'bg-white text-[#181513]'
  },
  {
    path: "/second",
    title: "Second labaratory",
    element: SecondLab,
    color: 'bg-[#181513] text-white'
  },
  {
    path: "/third",
    title: "Third labaratory",
    element: ThirdLab,
    color: 'bg-[#FF5824] text-white'
  },
  {
    path: "/fourth",
    title: "Fourth labaratory",
    element: FourthLab,
    // color: 'bg-[#181513] text-white'
    color: 'bg-gradient-to-r from-[#181513] to-[#FF5824] text-white'
  },
  {
    path: "/fifth",
    title: "Fifth labaratory",
    element: FifthLab,
    color: 'bg-[#181513] text-white'
  },
  {
    path: "/six",
    title: "Six labaratory",
    element: SixLab,
    color: 'bg-[#181513] text-white'
  },
  {
    path: "/seven",
    title: "Seven labaratory",
    element: SevenLab,
    color: 'bg-[#181513] text-white'
  },
  {
    path: "/test",
    title: "Test",
    element: Test,
    color: 'bg-[#181513] text-white'
  },
];
