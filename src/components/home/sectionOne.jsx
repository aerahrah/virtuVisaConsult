import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  slideDownAnim,
  slideUpAnim,
  slideRTLAnim,
} from "../animation/animation";
const SectionOne = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="bg-neutral-100 px-16 text-neutral-800">
      <div className="h-screen py-24 w-full max-w-[1164px] mx-auto">
        <div className=" h-full flex items-center gap-6">
          <div className="flex flex-col gap-14">
            <motion.div
              className="flex flex-col gap-4"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideDownAnim(0)}
            >
              <h1 className="text-7xl font-black">
                We Provide Visa Consulting Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime iure quod hic consectetur esse tempore nihil aliquam
                quae, beatae saepe necessitatibus harum quos modi ad amet
                incidunt velit eos!
              </p>
            </motion.div>
            <motion.div
              className="w-full"
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideUpAnim(0)}
            >
              <button className=" transition transform block py-3 px-16 rounded-full border-2 border-blue-500 hover:bg-blue-500  hover:outline-0 font-semibold uppercase duration-100 hover:scale-[1.02] hover:shadow-lg hover:text-blue-50">
                Book free consultation
              </button>
            </motion.div>
          </div>

          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
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
