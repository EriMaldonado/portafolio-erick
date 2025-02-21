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
    e.preventDefault();
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
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
          setShowSuccessMessage(true);
        },
        (error) => {
          setStatus({
            success: false,
            message:
              "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
          });
          if (error?.text) {
            console.error("Detalles del error:", error.text);
          } else {
            console.error("Error desconocido:", error);
          }
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div className="bg-gradient-to-r from-[#e5dec7] to-[#decfba] dark:from-[#121212] dark:to-[#1f2937] light:bg-[#F5F5F5] min-h-screen pb-12">
      <section
        id="contact"
        className="max-w-6xl w-full p-4 gap-2 items-center justify-center flex-col sm:p-4 mx-auto"
      >
        <div className="container pt-20 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-2">
            <div className="lg:w-1/2 lg:mx-10 text-center lg:text-left">
              <h1 className="text-3xl font-bold dark:text-white">
                Let's Connect
              </h1>
              <p className="text-xl mt-2 font-semibold dark:text-gray-400">
                I am looking for new opportunities. My inbox is always open, so
                feel free to contact me if you have any questions.
              </p>

              <form ref={form} onSubmit={sendEmail} className="mt-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex-1">
                    <label className="flex justify-start text-md font-semibold dark:text-gray-200">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Erick"
                      name="user_name"
                      className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#1F2937] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="flex justify-start text-md font-semibold dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="erickgabrielmaldonado1@gmail.com"
                      name="user_email"
                      className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#1F2937] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full">
                    <label className="flex justify-start text-md font-semibold dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      className="block w-full min-h-[64px] max-h-[96px] px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#1F2937] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="pt-2 flex flex-col items-start">
                    <button
                      type="submit"
                      className="text-xl rounded-xl transition duration-300 bg-[#15326F] text-white hover:bg-[#333333] dark:bg-black dark:hover:bg-[#333333] dark:text-white hover:text-white p-2 pl-4 pr-4 sm:w-auto"
                    >
                      Get in touch
                    </button>
                    <div className="pt-1">
                      {showSuccessMessage && <SuccessMessage />}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-6 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10 text-center">
              <Image
                className="object-contain mx-auto border-2 rounded-full lg:block w-64 h-64"
                src="/contact.svg"
                alt="image"
                width={54}
                height={54}
              />
              <div className="mt-8 space-y-4 ">
                <a
                  href="mailto:erickgabrielmaldonado1@gmail.com"
                  className="flex items-center justify-center mx-2"
                >
                  <MdEmail
                    size={30}
                    className="text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                  />
                  <span className="mx-2 text-gray-700 text-md truncate dark:text-gray-400 ">
                    erickgabrielmaldonado1@gmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/593969816247?text=Hola%2C%20me%20interesa%20tu%20perfil.."
                  target="_blank"
                  className="flex items-center justify-center mx-2"
                >
                  <FaWhatsapp
                    size={30}
                    className="text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                  />
                  <span className="mx-2 text-gray-700 text-md truncate dark:text-gray-400">
                    (+593) 969816247
                  </span>
                </a>
              </div>

              <div className="mt-4 space-x-4 flex justify-center">
                <a
                  href="https://www.linkedin.com/in/erickmaldonado1"
                  target="_blank"
                  className="text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/EriMaldonado"
                  target="_blank"
                  className="text-[#15326F] transition-colors duration-300 dark:text-gray-300 hover:text-black dark:hover:text-blue-400"
                  aria-label="GitHub"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
