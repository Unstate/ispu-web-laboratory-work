import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/routes";

const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="w-1/6 min-h-screen bg-[#F1F2F7] p-6">
      <div className="flex flex-col gap-10">
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            <div
              className={`p-4 rounded-lg transition-all ease-in text-black text-lg hover:bg-[#4c35cd] hover:cursor-pointer hover:text-white text-center ${
                pathname === route.path ? "bg-[#4c35cd] text-white" : ""
              }`}
            >
              {route.title}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
