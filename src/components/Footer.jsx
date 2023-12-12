import React from "react";
import logof from "../assets/ooterlg.webp";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 xl:p-20 p-8">
      {/* Imagen logo footer */}
      <div className="flex item-center justify-between border-b pb-20 border-secundary ">
        <img id="img__logo__f" src={logof} alt="imagen del footer" />

        {/* Iconos Social */}

        <nav className="flex item-center xl:gap-10 gap-2">
          <a
            className="block rounded-full text-white p-4 bg-primary"
            href="https://www.instagram.com/"
          >
            <RiInstagramFill />
          </a>
          <a
            className="block rounded-full text-white p-4 bg-primary"
            href="https://www.facebook.com/"
          >
            <RiFacebookFill />
          </a>
          <a
            className="block rounded-full text-white p-4 bg-primary"
            href="https://twitter.com/"
          >
            <RiTwitterFill />
          </a>
          <a
            className="block rounded-full text-white p-4 bg-primary"
            href="https://www.youtube.com/"
          >
            <RiYoutubeFill />
          </a>
        </nav>
      </div>
      <p className="text-primary font-medium text-center mt-2">
        Copyright © 2023. Jesus Mendoza Alianza Empresarial CESDE. Todos los
        derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
