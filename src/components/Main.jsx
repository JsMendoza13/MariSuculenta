import React from "react";
import hero from "../assets/hero.webp";
import {
  RiCheckboxBlankCircleFill,
  RiStarFill,
  RiCheckboxBlankFill,
} from "react-icons/ri";
import Product from "./Product";

const Main = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-secundary gap-8 md:gap-0 ">
        {/* Information */}
        <div className="md:w-[82%] md:flex md:item-center">
          <div className="mt-6 md:col-span-5 flex items-center justify-center p-8 xl:p-14 ">
            <div className="flex flex-col gap-5">
              <h1 className=" text-5xl xl:text-7xl font-bold xl:leading-[5.5rem] text-white">
                Bienvenidos a Maria{" "}
                <span className="text-primary tracking-[3px] ">Suculentas</span>
              </h1>
              <p className="text-gray-300 text-xl xl:text-2xl leading-[2.5rem]">
                La empresa María Suculentas SAS es una empresa que se encarga
                del cultivo y distribución de plantas de “apoyo emocional”
              </p>

              {/*  Btn contacto */}

              <div className="flex flex-col md:flex-row items-center gap-4">
                <button
                  className="xl:w-[30%] w-full bg-primary text-white py-2  rounded-xl text-xl ml-[10%] mr-[10%] bg-gradient-to-r from-primary hover:from-amber-200
                    hover:to-yellow-600 mb-10"
                >
                  Escribenos
                </button>
              </div>
            </div>
          </div>
          {/*  IMAGEN */}
          <div className="md:col-span-3 flex items-center justify-center relative ">
            <div>
              <img
                className="object-cover xl:-mt-28 -mt-20 -ml-10  rotate-6  "
                src={hero}
                alt="hero"
              />

              {/*  Contenedor blanco */}

              <div className="relative bg-white shadow-2xl rounded-lg xl:p-4 p-2 w-[80%] flex flex-col justify-center gap-2 max-w-[250px] ml-[50%] -translate-x-[60%] xl:-mt-40 -mt-[19%] ">
                {/*  Imagenes pequeñas */}

                <div className="flex items-center">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
                    className="w-12 h-12 object-cover rounded-full ring-2 ring-gray-400 bg-white"
                  />

                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-dedo-acusador-sonriente-mujer-atractiva_171337-6083.jpg"
                    className="w-12 h-12 object-cover rounded-full ring-2 ring-gray-400 -ml-4 bg-white"
                  />

                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-hombre-confiado-sonriente-gafas-sol_171337-9745.jpg"
                    className="w-12 h-12 object-cover rounded-full ring-2 ring-gray-400 -ml-4 bg-white"
                  />

                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-belleza-mujer-sensual-jengibre-cabello-largo-posando-ojos-cerrados_171337-916.jpg"
                    className="w-12 h-12 object-cover rounded-full ring-2 ring-gray-400 -ml-4 bg-white"
                  />
                </div>

                {/*  Texto dentro del recuadro blanco */}
                <h2 className="text-xl  font-bold tracking-[1px] text-gray-800">
                  120+ Clientes felices
                </h2>
                <div className="flex items-center gap-2 text-[120%] font-medium text-gray-800">
                  <RiStarFill className="text-primary fond-bold" /> 5.0 (3.1k
                  Reviews)
                </div>

                {/*  Cuadro y circulo */}

                <div className="absolute -right-10 xl:-bottom-12 -bottom-[40%]">
                  <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                  <RiCheckboxBlankFill className="absolute -left-4 -top-4 text-white text-8xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Product />
    </>
  );
};

export default Main;
