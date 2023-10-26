import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { slideDownAnim, slideUpAnim } from "../animation/animation";

const ServicesOne = ({ isDesktop }) => {
  const servicesItems = [
    {
      icon: "hello",
      title: "Individual evaluation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
    },
    {
      icon: "hello",
      title: "documents preparation and review",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint ",
    },
    {
      icon: "hello",
      title: "application creation and form assistance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint ",
    },
    {
      icon: "hello",
      title: "Business Thought",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint ",
    },
    {
      icon: "hello",
      title: "application submission",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint ",
    },
    {
      icon: "hello",
      title: "application tracking and account updates",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 !pt-24 py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-16 text-neutral-800  overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 ">
          <motion.div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl md:text-5xl font-black capitalize text-center ">
              our services and How It Work
            </h1>
            <p className="max-w-[40rem] text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-full">
            {servicesItems.map(({ icon, title, description }, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={
                    isDesktop
                      ? slideUpAnim(0.3 * (idx + 1))
                      : slideUpAnim(0.1 * (idx + 1))
                  }
                >
                  <i>{icon}</i>
                  <h3 className="text-2xl font-bold capitalize">{title}</h3>
                  <p className="">{description}</p>

                  <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
                  <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
                  <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                    {idx + 1}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOne;
