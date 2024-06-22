"use client";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SuccessMessage from "./SuccessMessage";
import Image from "next/image";
function ContactSection() {
  const form = useRef<HTMLFormElement>(null); 
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    // Especificar el tipo de e
    e.preventDefault();

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      console.error("Las variables de entorno de EmailJS no están definidas.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setStatus({ success: true, message: "Mensaje enviado con éxito" });
          console.log(result.text);
          setShowSuccessMessage(true); // Mostrar el mensaje de éxito
        },
        (error) => {
          setStatus({
            success: false,
            message:
              "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
          });
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="bg-[#FFF5E6] dark:bg-[#121212] pb-16">
      <section
        id="contact"
        className="max-w-5xl w-full p-4  gap-4 items-center justify-around flex-col sm:p-4  mx-auto my-auto "
      >
        <div className="container pt-24 px-2  mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-4">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-3xl font-semibold  dark:text-white lg:text-3xl">
                Let&apos;s Connect
              </h1>
              <p className="mt-2 font-semibold dark:text-gray-400">
                I am looking for new opportunities. My inbox is always open, so
                feel free to contact me if you have any questions.
              </p>

              <form ref={form} onSubmit={sendEmail} className="mt-4">
                <div className="flex-1">
                  <label className="block  text-sm  dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Erick"
                    name="user_name"
                    className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#1F2937] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="flex-1 mt-2">
                  <label className="block mb-2 text-sm  dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="erickgabrielmaldonado1@gmail.com"
                    name="user_email"
                    className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#1F2937] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="w-full mt-1">
                  <label className="block mb-2 text-sm  dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full min-h-[64px] max-h-[96px] px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#1F2937] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className=" button-card rounded-sm transition duration-300 dark:text-white hover:bg-[#15326F] hover:text-white"
                  >
                    Get in touch
                  </button>
                  {showSuccessMessage && <SuccessMessage />}
                </div>
              </form>
            </div>
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <Image
                className="hidden object-containt mx-auto border-2 rounded-full lg:block shrink-0 w-48 h-48"
                src="/contact.svg"
                alt="image"
                width={48}
                height={48}
              />
              <div className="mt-2 space-y-4 md:mt-8">
                <a
                  href="mailto:erickgabrielmaldonado1@gmail.com"
                  className="flex items-center mx-2"
                >
                  <MdEmail
                    size={30}
                    className="text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                  />
                  <span className="mx-2 text-gray-700 text-sm truncate w-72 dark:text-gray-400">
                    erickgabrielmaldonado1@gmail.com
                  </span>
                </a>

                <a
                  className="flex items-center mx-2"
                  href="https://wa.me/593969816247?text=Hola%2C%20me%20interesa%20tu%20perfil.."
                  target="_blank 
"
                >
                  <FaWhatsapp
                    size={30}
                    className="text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                  />
                  <span className="mx-2 text-gray-700 text-sm truncate w-72 dark:text-gray-400">
                    (+593) 969816247
                  </span>
                </a>
              </div>
              <div className="mt-4 w-80 md:mt-8 ">
                <div className="flex mt-4 -mx-1.5 items-center justify-center ">
                  <a
                    href="https://www.linkedin.com/in/erickmaldonado1"
                    target="_blank"
                    className="mx-2 text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <a
                    href="https://github.com/EriMaldonado"
                    target="_blank"
                    className="mx-2 text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactSection;
