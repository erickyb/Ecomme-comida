import { useState } from "react";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiCloseLine,
  RiDeleteBin6Line,
  RiMenu3Fill,
  RiPieChartLine,
  RiSearch2Line,
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
  // crear una clase

  const classBtn = "text-primary-color py-2 px-4 rounded-xl border border-gray-500"
  return (
    <div className="bg-secondary-color w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-menu-color lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl" >
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
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* header */}
          <header>
            {/* title and search */}
            <div className="flex md:justify-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager resto</h1>
                <p className="text-gray-500">17 Junio 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1f1d28] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className=" py-2 pr-4">
                Cold Dishes
              </a>
              <a href="#" className=" py-2 pr-4">
                Soup
              </a>
              <a href="#" className=" py-2">
                Gril
              </a>
            </nav>
          </header>
          {/* title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-menu-color py-2 px-4 rounded-lg">
              <RiArrowDownSLine />Dine in
            </button>
          </div>
          {/* content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16" >
            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg" alt="mi foto1" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg" alt="mi foto2" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg" alt="mi foto3" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg" alt="mi foto4" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg" alt="mi foto5" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg" alt="mi foto6" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg"
                alt="mi foto7"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-menu-color p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="Yarleque.jpg"
                alt="mi foto8"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-menu-color w-full h-full">
          <div className="relative pt-16 text-gray-300 p-8 ">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-secondary-color rounded-full text-xl" />
            <h1 className="text-2xl my-4">Orders #151416</h1>
            {/* Pills */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-primary-color text-white py-2 px-4 rounded-xl">
                Dine In
              </button>

              <button className={classBtn}>
                To Go
              </button>

              <button className={classBtn}>
                Delivery
              </button>
            </div>
            {/* car */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Product */}
              <div className="bg-secondary-color p-4 rounded-xl">
                <div className="grid grid-cols-6 mb-2">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="Yarleque.jpg" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center gap-2">
                  <form className="col-span-4 " >
                    <input
                      type="text"
                      className="py-2 px-4 rounded-lg outline-none bg-menu-color w-full"
                      placeholder="Order note..." />
                  </form>
                  <div className="col-span-2 text-center">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default App
