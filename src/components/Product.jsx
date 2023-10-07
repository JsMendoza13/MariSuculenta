import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Product = () => {
  return (
    <section className="containerIn">
      <div className="containerProducto ">
        <div className="titleCards">
          <h1 className="text-transparent text-2xl xl:text-[32px] font-bold bg-clip-text bg-gradient-to-r from-primary to-emerald-600 ">
            Consigue tu dosis de apoyo emocional con Maria Suculentas
          </h1>
          <p className="mt-5 xl:text-xl text-ml text-gray-400">
            Deje que nuestras suculentas hechas a mano y ricas en nutrientes
            ayuden a calmar su mente y alma.
          </p>
        </div>
        {/* Productos */}
        <div className="contentCard ">
          <div className="seccionCard">
            <img src={img1} alt="sucuone" className="imgCard object-cover" />
            <div className="overlay">
              <h2>Suculenta Azul Marina</h2>
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
              <h2>Cariño Suculenta </h2>
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
              <h2>Suculenta PostDate </h2>
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
              <h2>Jardin del eden </h2>
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
              <h2>Pareja Suculenta </h2>
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
        </div>
      </div>
    </section>
  );
};

export default Product;
