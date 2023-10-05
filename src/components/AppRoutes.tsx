import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
