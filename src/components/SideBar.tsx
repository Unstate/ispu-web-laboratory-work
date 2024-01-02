import { Link, useLocation } from "react-router-dom";
import { routes } from "../constants/routes";
import {useState} from "react";

const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [visible, setVisible] = useState<boolean>(false)

  return (
      <>
          <aside className="w-1/6 min-h-screen bg-[#F1F2F7] py-10 lg:block hidden">
              <div className="flex flex-col gap-10">
                  {routes.map((route, index) => (
                      <Link key={index} to={route.path}>
                          <div
                              className={`p-4 py-6  transition-all ease-in text-black text-lg hover:bg-[#181513] hover:cursor-pointer hover:text-white text-center ${
                                  pathname === route.path ? `${route.color}` : ""
                              }`}
                          >
                              {route.title}
                          </div>
                      </Link>
                  ))}
              </div>
          </aside>
          <div className={'absolute z-40 top-[5%] left-[5%] flex flex-col gap-2 lg:hidden block'} onClick={() => setVisible((prev:any) => !prev)}>
              <span className={'w-10 h-1 bg-[#FF5824] rounded-[5px]'}></span>
              <span className={'w-10 h-1 bg-[#FF5824] rounded-[5px]'}></span>
              <span className={'w-10 h-1 bg-[#FF5824] rounded-[5px]'}></span>
          </div>
          {visible
              ?
              <div className={'w-[60%] min-h-screen absolute top-0 left-0 border-2 backdrop-blur p-3'}>
                  <div className="flex flex-col gap-10 mt-[30%]">
                      {routes.map((route, index) => (
                          <Link key={index} to={route.path}>
                              <div
                                  className={`p-4 py-6  transition-all ease-in text-[#FF5824] text-[3vw] hover:bg-[#181513] hover:cursor-pointer hover:text-white text-center ${
                                      pathname === route.path ? `${route.color}` : ""
                                  }`}
                              >
                                  {route.title}
                              </div>
                          </Link>
                      ))}
                  </div>
              </div>
              : null}
      </>
  );
};

export default SideBar;
