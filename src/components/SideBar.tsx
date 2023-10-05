import { Link, useLocation } from "react-router-dom";
import { routes } from "../constants/routes";

const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="w-1/6 min-h-screen bg-[#F1F2F7] py-10">
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
  );
};

export default SideBar;
