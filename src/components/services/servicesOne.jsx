import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnim, slideUpAnim } from "../animation/animation";

const ServicesOne = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const servicesItems = [
    {
      icon: "hello",
      title: "Business Thought",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
    },
    {
      icon: "hello",
      title: "Business Thought",
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
      title: "Business Thought",
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
      title: "Business Thought",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 py-24 px-16    text-neutral-800  overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-16 ">
          <motion.div className="flex flex-col gap-4 items-center" ref={ref}>
            <h1 className="text-5xl font-black capitalize">
              our services and How It Work
            </h1>
            <p className="max-w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-3 gap-8 h-full" ref={ref2}>
            {servicesItems.map(({ icon, title, description }, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
                  initial="hidden"
                  animate={inView2 ? "visible" : "hidden"}
                  variants={slideUpAnim(0.3 * (idx + 1))}
                >
                  <i>{icon}</i>
                  <h3 className="text-2xl font-bold capitalize">{title}</h3>
                  <p className="w-[80%]">{description}</p>

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
