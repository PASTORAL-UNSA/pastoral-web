import { useState } from "react";
import FacebookIcon from "../icons/mountain/Facebook";
import InstagramIcon from "../icons/mountain/Instagram";
import TikTokIcon from "../icons/mountain/TikTok";
import WhatsAppIcon from "../icons/mountain/WhatsApp";
import Constans from "../utils/Constans";
// import confetti from "canvas-confetti";

const WspForm = () => {
  const VITE_CONTACT_PHONE_WSP = "+051902182078";
  const VITE_FACEBOOK_URL = "http://facebook.com";
  const VITE_INSTAGRAM_URL = "http://instagram.com";
  const VITE_TIKTOK_URL = "http://tiktok.com";

  const telefono = VITE_CONTACT_PHONE_WSP;
  const { mensajeWsp, carreras } = Constans;
  const [isDisabled, setIsDisabled] = useState(true);
  // const lanzarConfetti = () => {
  //   confetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: { y: 0.6 },
  //   });
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    const { userName, carrera } = event.target;
    enviarMensaje(userName.value, carrera.value);
    // if (carrera.value == "Ingeniería Química") lanzarConfetti();
  };

  const enviarMensaje = (nombre, carrera) => {
    const nombreTrimmed = nombre.trim();

    if (nombreTrimmed.length >= 2) {
      let mensaje = `${mensajeWsp[0]}${nombreTrimmed}`;
      if (carrera !== "Opcional") {
        mensaje += `${mensajeWsp[1]}${carrera}`;
      }
      mensaje += mensajeWsp[2];

      const mensajeCodificado = encodeURIComponent(mensaje);
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;

      window.location.href = urlWhatsApp;
    }
  };
  return (
    <form
      id="form"
      onSubmit={onSubmit}
      className="z-50  max-w-sm mx-auto p-4 rounded shadow-md mt-6 bg-white/95 dark:bg-white/85 opacity-70 transition ease-out duration-300 hover:opacity-100"
    >
      <div>
        <label
          htmlFor="name-icon"
          className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-900"
        >
          Nombre:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
            </svg>
          </div>
          <input
            id="userName"
            type="text"
            name="userName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700/10 dark:border-white dark:placeholder-gray-500 dark:text-gray-900 dark:focus:ring-blue-100 dark:focus:border-gray-100"
            placeholder="Juan Perez"
            required
            onClick={() => {
              setIsDisabled(false);
            }}
          />
        </div>
        <div className="my-3">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-900"
          >
            Selecciona tu carrera:
          </label>
          <select
            id="carrera"
            name="carrera"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/10 dark:border-white dark:placeholder-gray-500 dark:text-gray-900 dark:focus:ring-blue-100 dark:focus:border-gray-100"
          >
            <option defaultValue>Opcional</option>
            {carreras.map((carrera) => (
              <option key={carrera} value={carrera}>
                {carrera}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-row items-center">
        <div className="flex flex-row items-center space-x-3 ml-1 -mb-1">
          <a href={VITE_FACEBOOK_URL} target="_blank">
            <FacebookIcon className="size-5" />
          </a>
          <a
            className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[3px] rounded-md"
            href={VITE_INSTAGRAM_URL}
            target="_blank"
          >
            <InstagramIcon className="size-4" />
          </a>
          <a href={VITE_TIKTOK_URL} target="_blank">
            <TikTokIcon className="size-5" />
          </a>
        </div>
        <div className="flex-grow"></div>
        <button
          type="submit"
          id="wspButton"
          className="transition duration-150 ease-[cubic-bezier(.56,.44,0,1.81)] hover:ease-in hover:shadow-md  hover:scale-95 flex flex-row items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          style={{ pointerEvents: isDisabled ? "none" : "auto" }}
          disabled={isDisabled}
        >
          <span className="mr-2">Enviar mensaje</span>
          <WhatsAppIcon className="size-5" />
        </button>
      </div>
    </form>
  );
};

export default WspForm;
