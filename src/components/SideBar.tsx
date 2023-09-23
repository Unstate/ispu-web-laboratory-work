import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/routes";

const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)

  return (
    <aside className="w-1/6 min-h-screen bg-slate-300 p-6">
      <div className="flex flex-col gap-3">
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            <div
              className={`p-8 rounded-lg transition-all ease-in text-black text-lg hover:bg-slate-600 hover:cursor-pointer hover:text-white text-center ${
                pathname === route.path ? "bg-slate-600 text-white" : ""
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
