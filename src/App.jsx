import { useState } from "react";
import {
  RiAddLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiUser3Line,
} from "react-icons/ri"
import Sidebar from "./components/Sidebar"
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"></link>
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl" >
        <button className="p-2">
          <RiUser3Line />
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        <button className="p-2">
          <RiPieChartLine />
        </button>

        <button onClick={toggleMenu} className="text-white p-2">
          <RiMenu3Fill />
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">hola</div>
        <div className="lg:col-span-2">hola 2</div>
      </main>
    </div>
  )
}

export default App
