import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionTwo = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  const headerAnim = {
    hidden: { opacity: 0, y: -120, scale: 0.75 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75 },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 100, scale: 0.75 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75 } },
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-24 px-16    text-neutral-300">
      <div className="w-full max-w-[1164px] mx-auto h-full ">
        <div className="flex flex-col gap-20 ">
          <motion.div
            className="flex flex-col gap-4 items-center"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headerAnim}
          >
            {console.log(inView)}
            <h3 className="text-lg font-bold">Working Process</h3>
            <h1 className="text-5xl font-bold">How It Work</h1>
            <p className="max-w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </motion.div>
          <motion.div
            className="flex gap-8 h-full"
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={cardAnim}
          >
            <div className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500">
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
            </div>
            <div className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline hover:outline-[1px] hover:outline-blue-500 ">
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
            </div>
            <div className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500 ">
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
