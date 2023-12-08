import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.webp";

//Icons
import { RiCloseLine, RiMenu3Fill, RiMenuLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-secundary">
      <nav className="flex justify-between items-center  w-[82%] mx-auto my-5">
        <div className="text-center mt-3">
          <Link to="/">
            <img
              className="md:w-32 xl:w-[100%] w-[40%]"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Navegacion */}
        <div
          className={`xl:ml-[50%] md:ml-[25%] fixed w-[100%] md:w-[20%] xl:w-full h-full ${
            showMenu ? "left-0" : "-left-full"
          }  
top-[9%] md:static absolute flex-2 flex flex-col xl:flex-row 
items-center justify-center gap-10 bg-secundary transition-all duration-500 z-50`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <Link className="hoverLink text-primary" to="/">
              <a>Home</a>
            </Link>
            <Link className="hoverLink text-primary" to="/productos">
              Productos
            </Link>
            <Link className="hoverLink text-primary" to="/clientes">
              Clientes
            </Link>
            <Link className="hoverLink text-primary" to="/proveedores">
              Proveedores
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-4xl cursor-pointer text-primary"
          >
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
