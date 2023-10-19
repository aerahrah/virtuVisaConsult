import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  slideDownAnim,
  slideUpAnim,
  slideRTLAnim,
} from "../animation/animation";
const SectionOne = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className=" bg-neutral-100 px-16 text-neutral-800">
      <div className="min-h-[100vh] max-h-[100%] py-24 w-full max-w-[1164px] mx-auto ">
        <div className="h-full mt-16 flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="flex flex-col gap-16 " ref={ref}>
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideDownAnim(0)}
            >
              <h1 className="text-3xl md:text-5xl text-center md:text-start lg:text-7xl font-black ">
                We Provide Visa Consulting Services
              </h1>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime iure quod hic consectetur esse tempore nihil aliquam
                quae, beatae saepe necessitatibus harum quos modi ad amet
                incidunt velit eos!
              </p>
            </motion.div>
            <motion.div
              className="w-full"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUpAnim(0)}
            >
              <button className=" transition transform block py-3 px-16 rounded-full border-2 border-blue-500 hover:bg-blue-500  hover:outline-0 font-semibold uppercase duration-100 hover:scale-[1.02] hover:shadow-lg hover:text-blue-50">
                Book free consultation
              </button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideRTLAnim(0)}
          >
            <div className="h-96 w-96 bg-neutral-300"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
