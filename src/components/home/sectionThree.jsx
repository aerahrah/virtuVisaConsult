import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  slideDownAnim,
  slideUpAnim,
  slideRTLAnim,
} from "../animation/animation";
const SectionThree = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <div className="bg-neutral-100 px-16 text-neutral-800">
      <div className="min-h-screen py-24 w-full max-w-[1164px] mx-auto overflow-hidden">
        <div className=" h-full flex items-center gap-6">
          <div className="flex flex-col gap-14 w-[50%]">
            <motion.div
              className="flex flex-col gap-4"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideDownAnim(0)}
            >
              <h1 className="text-5xl font-extrabold capitalize">
                Why choose us
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates enim labore nostrum eligendi, explicabo quo obcaecati
                illum perferendis quibusdam eum dicta, distinctio, quod autem
                consequuntur? Nihil et culpa earum dignissimos!
              </p>
            </motion.div>
            <motion.div className="flex flex-col gap-6" ref={ref2}>
              <motion.div
                className="flex gap-4"
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={slideUpAnim(0.3)}
              >
                <div>
                  <p className="bg-blue-300 ronded-lg h-24 w-24 rounded-md"></p>
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl font-bold capitalize tracking-tight">
                    Planning the moves
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-4"
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={slideUpAnim(0.6)}
              >
                <div>
                  <p className="bg-blue-300 ronded-lg h-24 w-24 rounded-md"></p>
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl font-bold capitalize tracking-tight">
                    Execute the decision
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex gap-4"
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={slideUpAnim(0.9)}
              >
                <div>
                  <p className="bg-blue-300 ronded-lg h-24 w-24 rounded-md"></p>
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl font-bold capitalize tracking-tight">
                    analyze the results
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative h-full w-[50%]" ref={ref3}>
            <motion.div
              className="absolute top-6 h-64 w-64 bg-neutral-300 outline outline-blue-300 shadow-md rounded-lg hover:shadow-lg"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={slideRTLAnim(0.9)}
            ></motion.div>
            <motion.div
              className="absolute top-[-5rem] right-6 h-64 w-64 bg-neutral-300  outline outline-blue-300 shadow-md rounded-lg hover:shadow-lg"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={slideRTLAnim(0.6)}
            ></motion.div>
            <motion.div
              className="absolute bottom-6 h-64 w-64 bg-neutral-300 outline outline-blue-300 shadow-md rounded-lg  hover:shadow-lg"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={slideRTLAnim(0.3)}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
