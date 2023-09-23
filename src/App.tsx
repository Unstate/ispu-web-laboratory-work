import AppRoutes from "./components/AppRoutes"
import SideBar from "./components/SideBar"

const App = () => {
  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      <AppRoutes />
    </div>
  )
}

export default App