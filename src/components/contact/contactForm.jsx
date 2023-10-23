import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { scaleAnim } from "../animation/animation";

const ContactForm = () => {
  const PUBLIC_KEY = "W0_1f7BwrmtsMtjAx";
  const TEMPLATE_ID = "template_la2t6vm";
  const SERVICE_ID = "service_r2ydv6h";
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        if (result.text === "OK") {
          setMessage("Sent email successfully");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      },
      (error) => {
        setMessage(error);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    );
  };
  return (
    <AnimatePresence>
      <div className="bg-white py-12 md:pb-16 lg:pb-24 px-6 md:px-12 lg:px-16 text-neutral-800 bg-white">
        <div className="w-full max-w-[1164px] mx-auto h-full">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div className="text-center">
              <h3 className="text-2xl capitalize font-bold tracking-tight text-blue-500">
                Get In Touch
              </h3>
              <h1 className="text-5xl font-extrabold max-w-[40rem] mx-auto">
                Feel free to contact with us any time.
              </h1>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            className="w-full mx-auto py-6 pt-12 relative"
            ref={form}
          >
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <input
                className="bg-neutral-100 py-3 px-4 rounded-md w-full border-[1px] focus:outline focus:outline-blue-500"
                type="text"
                name="user_name"
                placeholder="Full name"
                required
              />
              <input
                className="bg-neutral-100 py-3 px-4 rounded-md w-full border-[1px] focus:outline focus:outline-blue-500"
                type="tel"
                name="user_phone"
                placeholder="Phone number"
                required
              />
              <input
                className="bg-neutral-100 py-3 px-4 rounded-md w-full border-[1px] focus:outline focus:outline-blue-500"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
              <input
                className="bg-neutral-100 py-3 px-4 rounded-md w-full border-[1px] focus:outline focus:outline-blue-500"
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <textarea
                className="bg-neutral-100 py-3 px-4 rounded-md w-full border-[1px] focus:outline focus:outline-blue-500 col-span-full"
                id="message"
                name="message"
                placeholder="Message"
                rows={7}
                required
              ></textarea>

              {message && (
                <motion.p
                  className="absolute bottom-[5rem] text-lg text-green-700 font-semibold text-center w-full"
                  initial="hidden"
                  animate={message ? "visible" : "hidden"}
                  exit="hidden"
                  variants={scaleAnim(0, 0.2)}
                  key="message"
                >
                  {message}
                </motion.p>
              )}

              <button
                type="submit"
                className="bg-blue-500 text-blue-100 rounded-full py-3 px-10 capitalize mt-8 mx-auto col-span-full"
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ContactForm;
