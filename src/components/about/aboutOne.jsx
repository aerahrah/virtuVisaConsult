import { slideLTRAnim, scaleAnim } from "../animation/animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutOne = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="bg-neutral-100 px-16 text-neutral-800">
      <div className="h-full pt-24 py-16 w-full max-w-[1164px] mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-10">
          <h1 className="text-5xl font-black capitalize">About our company</h1>
          <p className="max-w-[70%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ea voluptate tempore assumenda esse, quisquam sunt provident magnam
            laudantium consequuntur repudiandae praesentium debitis, tempora
            quis perspiciatis! Harum voluptate iure saepe.
          </p>
        </div>
        <div
          className=" h-full flex items-center justify-center gap-16"
          ref={ref}
        >
          <div className="max-w-[50%]">
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideLTRAnim(0)}
            >
              <h3 className="text-xl font-semibold capitalize  ">
                <span className="bg-blue-500 px-4 py-2 rounded-full text-blue-100">
                  Our vision
                </span>
              </h3>
              <h1 className="text-4xl font-bold mb-2">
                We Provide Visa Consulting Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime iure quod hic consectetur esse tempore nihil aliquam
                quae, beatae saepe necessitatibus harum quos modi ad amet
                incidunt velit eos!
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={scaleAnim(0)}
          >
            <div className="h-96 w-96 bg-neutral-300"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
