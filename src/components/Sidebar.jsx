import React from 'react';
import 'remixicon/fonts/remixicon.css'
import {
  RiCreativeCommonsZeroLine,
  RiHome3Line,
  RiLogoutCircleRLine,
  RiMailLine,
  RiNotification2Line,
  RiPieChartLine,
  RiSettings2Line,
} from "react-icons/ri";

//! paso 1
// hay que instalar yarn:
//? npm install--global yarn

//! paso 2
// crear la carpeta con el comando:
// y el nombre

//? yarn create vite
//! paso 3
// esta página es para poner los iconos que deseas primero
// tiene que instalar y después se utiliza lo he instalado con
// el comando: yarn add react - icons
//? y para importa los iconos es con:
//! import { RiHome3Line } from "react - icons / ri;
//! https://react-icons.github.io/react-icons/

//! paso 4
// para instalar tailwindcss con el framework VITE es con el comando:
//? yarn add - D tailwindcss postcss autoprefixer
//? npx tailwindcss init - p

// eliminar el archivo App.css
// limpiar el archivo App.jsx y que quede asi

// import Sidebar from "./components/Sidebar"
// function App() {
//   return (
//     <div className="bg-[#262837] w-full min-h-screen">
//       <Sidebar />
//     </div>
//   )
// }
// export default App


//! copiar el los archivos 1
// hay que copiar el codigo en el archivo :
// archivo de tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//! copiar el los archivos 2
// hay que copiar el codigo en el archivo :
// archivo de index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;


const sidebar = (props) => {
  const { showMenu } = props;
  return (
    <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"
      }`
    }>
      <div>
        <ul className='pl-4'>
          <li>
            <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
              logo
            </h1>
          </li>
          <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
            <a
              href="#"
              className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
              <RiHome3Line className='text-2xl' />
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a
              href="#"
              className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
              <RiCreativeCommonsZeroLine className='text-2xl' />
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a
              href="#"
              className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
              <RiPieChartLine className='text-2xl' />
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a
              href="#"
              className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
              <RiMailLine className='text-2xl' />
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a
              href="#"
              className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
              <RiNotification2Line className='text-2xl' />
            </a>
          </li>

          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a
              href="#"
              className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors'>
              <RiSettings2Line className='text-2xl' />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className='pl-4'>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a
              href="#"
              className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white'>
              <RiLogoutCircleRLine className='text-2xl' />
            </a>
          </li>
        </ul>
      </div>
    </div >)
};

export default sidebar;
