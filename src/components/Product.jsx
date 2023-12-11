import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";

const Product = () => {
  return (
    <section className="containerIn">
      <div className="containerProducto ">
        <div className="titleCards">
          <h2 className="text-transparent text-2xl xl:text-[32px] font-bold bg-clip-text bg-gradient-to-r from-primary to-emerald-600 ">
            Consigue tu dosis de apoyo emocional con Maria Suculentas
          </h2>
          <p className="mt-5 xl:text-xl text-ml text-gray-300">
            Deje que nuestras suculentas hechas a mano y ricas en nutrientes
            ayuden a calmar su mente y alma.
          </p>
        </div>
        {/* Productos */}
        <div className="contentCard ">
          <div className="seccionCard">
            <img src={img1} alt="sucuone" className="imgCard object-cover" />
            <div className="overlay">
              <h3>Suculenta Azul Marina</h3>
              <p>
                fáciles de cuidar se cultivan con amor y brindan una presencia
                edificante en su hogar.
              </p>

              <button
                type="button"
                class="bg-gradient-to-r   hover:from-amber-200
                hover:to-yellow-600
                border-2 border-secundary
                hover:border-none
                h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2"
              >
                Comprar
              </button>
            </div>
          </div>
          <div className="seccionCard">
            <img src={img2} alt="sucutwo" className="imgCard object-cover" />
            <div className="overlay">
              <h3>Cariño Suculenta </h3>
              <p>
                Está científicamente comprobado que nuestras suculentas reducen
                el estrés y la ansiedad.
              </p>
              <button
                type="button"
                class="bg-gradient-to-r   hover:from-amber-200
                hover:to-yellow-600
                border-2 border-secundary
                hover:border-none
                h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2"
              >
                Comprar
              </button>
            </div>
          </div>

          <div className="seccionCard">
            <img src={img3} alt="sucutwo" className="imgCard object-cover" />
            <div className="overlay">
              <h3>Suculenta PostDate </h3>
              <p>
                Perfectas para iluminar cualquier habitación o para regalar a
                tus seres queridos.
              </p>
              <button
                type="button"
                class="bg-gradient-to-r   hover:from-amber-200
                hover:to-yellow-600
                border-2 border-secundary
                hover:border-none
                h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2"
              >
                Comprar
              </button>
            </div>
          </div>

          <div className="seccionCard">
            <img src={img4} alt="sucutwo" className="imgCard object-cover" />
            <div className="overlay">
              <h3>Jardin del eden </h3>
              <p>
                Quiera alegrar su hogar, estas suculentas seguramente traerán
                alegría a su vida.
              </p>
              <button
                type="button"
                class="bg-gradient-to-r   hover:from-amber-200
                hover:to-yellow-600
                border-2 border-secundary
                hover:border-none
                h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2"
              >
                Comprar
              </button>
            </div>
          </div>

          <div className="seccionCard">
            <img src={img5} alt="sucutwo" className="imgCard object-cover" />
            <div className="overlay">
              <h3>Pareja Suculenta </h3>
              <p>Cada uno viene con un mensaje positivo único</p>
              <button
                type="button"
                class="bg-gradient-to-r   hover:from-amber-200
                    hover:to-yellow-600
                    border-2 border-secundary
                    hover:border-none
                    h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2"
              >
                Comprar
              </button>
            </div>
          </div>
          <div className="seccionCard">
            <img src={img6} alt="sucupink" className="imgCard object-cover" />
            <div className="overlay">
              <h3>Suculenta Pink </h3>
              <p>
                Colores de armonia, que atraen un calido ambiente para tu hogar.
              </p>
              <button
                type="button"
                class="bg-gradient-to-r   hover:from-amber-200
                    hover:to-yellow-600
                    border-2 border-secundary
                    hover:border-none
                    h-10 xl:w-40 w-full font-bold hover:text-white text-secundary rounded-xl m-2"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
