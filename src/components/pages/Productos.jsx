import React from "react";

const Productos = () => {
  return (
    <div className="items-center justify-center m-2">
      <div className="md:gap-0 p-10 xl:ml-20 xl:mr-20">
        <h1 className="text-center text-2xl xl:text-3xl font-bold text-primary tracking-[3px] m-auto">
          Control y registro de productos.
        </h1>
        <br />
        <p className="text-center text-gray-400 text-xl leading-[2rem] mb-4 mt-2 ">
          Deje que nuestras suculentas hechas a mano y ricas en nutrientes
          ayuden a calmar su mente y alma. Tenemos una variedad de
          impresionantes suculentas para elegir.
        </p>

        <form className="w-full max-w-2xl  m-auto ">
          <div className="flex flex-wrap mx-2 bg-emerald-800 xl:rounded-[10%] rounded-[5%] p-5 ">
            <div className="m-[auto] md:pt-10 pt-3 md:mb-0 ">
              <div>
                <label
                  className="text-gray-300 block uppercase font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block  bg-gray-200 text-gray-700 border  border-secundary rounded py-2 md:px-14 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Escribe el nombre"
                />
              </div>

              <label
                className="text-gray-300 block uppercase font-bold mb-2"
                htmlFor="nombre"
              >
                Sexo
              </label>
              <div className="grid grid-cols-2 mb-2 gap-1 ">
                <div class="flex items-center pl-4 border border-secundary rounded hover:border-primary xl:mr-[15%] mr-[10%]">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class=""
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-300"
                  >
                    Macho
                  </label>
                </div>

                <div class="flex items-center pl-4 border border-secundary rounded hover:border-primary xl:mr-[15%] mr-[10%] ">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class=""
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ml-2 text-sm font-medium text-gray-300"
                  >
                    Hembra
                  </label>
                </div>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div>
                  <label
                    className="text-gray-300 block uppercase font-bold mb-2"
                    htmlFor="ref"
                  >
                    Referencia
                  </label>
                  <input
                    className="text-sm  appearance-none block  bg-gray-200 text-gray-700 border 
              border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200 xl:w-40"
                    type="text"
                    id="ref"
                    name="ref"
                    placeholder="Escribe la ref."
                  />
                </div>

                <div>
                  <label
                    className="text-gray-300 block uppercase font-bold mb-2"
                    htmlFor="tamano"
                  >
                    Tamaño
                  </label>
                  <input
                    className="text-sm appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200 xl:w-40"
                    type="text"
                    id="tamano"
                    name="tamano"
                    placeholder="Digite el tamaño CM"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-gray-300 block uppercase font-bold mb-2"
                  htmlFor="cantidad"
                >
                  Cantidad
                </label>
                <input
                  className="appearance-none block  bg-gray-200 text-gray-700 border border-secundary rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-green-200"
                  type="text"
                  id="cantidad"
                  name="cantidad"
                  placeholder="Digite su cantidad"
                />
              </div>

              <label for="message" class="text-gray-300 uppercase font-bold ">
                Descripción de la Suculenta
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-primary focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-primary dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-800 mb-2"
                placeholder="Descríbenos la suculenta..."
              ></textarea>

              <button
                className="bg-gradient-to-r   hover:from-teal-900
              hover:to-green-400
              border-2 border-primary
              hover:border-none
              h-10 xl:w-40 w-full font-bold hover:text-white text-primary rounded-xl xl:m-10"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Productos;
