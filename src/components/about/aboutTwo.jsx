import { slideRTLAnim, scaleAnim, slideUpAnim } from "../animation/animation";
import { motion } from "framer-motion";

const AboutTwo = ({ isDesktop }) => {
  return (
    <div className="bg-neutral-200 px-6 md:px-12 lg:px-16  text-neutral-800">
      <div className="h-full py-16 w-full max-w-[1164px] mx-auto">
        <div className=" h-full flex flex-col-reverse md:flex-row-reverse md:flex-nowrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="max-w-[40rem]">
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={isDesktop ? slideRTLAnim(0) : slideUpAnim(0.3)}
            >
              <h3 className="text-xl font-semibold capitalize mb-2 md:mb-4 lg:mb-6 text-center  md:text-start">
                <span className="bg-blue-500 px-4 py-2 rounded-full text-blue-100 ">
                  Our mission
                </span>
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-start">
                We Provide Visa Consulting Services
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime iure quod hic consectetur esse tempore nihil aliquam
                quae, beatae saepe necessitatibus harum quos modi ad amet
                incidunt velit eos!
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isDesktop ? scaleAnim(0, 0.75) : slideUpAnim(0)}
          >
            <div className="h-96 w-96 bg-neutral-300"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
