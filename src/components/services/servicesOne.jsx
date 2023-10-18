import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnim, slideUpAnim } from "../animation/animation";

const ServicesOne = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
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
            <motion.div
              className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(0.3)}
            >
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                1
              </h3>
            </motion.div>
            <motion.div
              className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline hover:outline-[1px] hover:outline-blue-500 "
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(0.6)}
            >
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                2
              </h3>
            </motion.div>
            <motion.div
              className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500 "
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(0.9)}
            >
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                3
              </h3>
            </motion.div>
            <motion.div
              className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(1.2)}
            >
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                1
              </h3>
            </motion.div>
            <motion.div
              className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(1.5)}
            >
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                1
              </h3>
            </motion.div>
            <motion.div
              className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(1.8)}
            >
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                1
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOne;
