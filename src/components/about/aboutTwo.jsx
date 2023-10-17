import { slideRTLAnim, scaleAnim } from "../animation/animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutTwo = () => {
  const [ref, inView] = useInView();
  return (
    <div className="bg-neutral-200 px-16 text-neutral-800">
      <div className="h-full py-16 w-full max-w-[1164px] mx-auto">
        <div
          className=" h-full flex items-center justify-center gap-16"
          ref={ref}
        >
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={scaleAnim(0.3)}
          >
            <div className="h-96 w-96 bg-neutral-300"></div>
          </motion.div>
          <motion.div
            className="max-w-[50%]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideRTLAnim(0.3)}
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold capitalize  ">
                <span className="bg-blue-500 px-4 py-2 rounded-full text-blue-100">
                  Our mission
                </span>
              </h3>
              <h1 className="text-4xl font-bold  mb-2">
                We Provide Visa Consulting Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime iure quod hic consectetur esse tempore nihil aliquam
                quae, beatae saepe necessitatibus harum quos modi ad amet
                incidunt velit eos!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
