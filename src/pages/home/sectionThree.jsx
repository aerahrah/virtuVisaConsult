import { motion } from "framer-motion";
import {
  slideDownAnim,
  slideUpAnim,
  slideRTLAnim,
} from "../../utils/animation";
const SectionThree = ({ isDesktop }) => {
  const steps = [
    {
      title: "transparency",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "full assistance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "Analyze the results",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  return (
    <div className="bg-neutral-100 px-6 md:px-12 lg:px-16 text-neutral-800">
      <div className="min-h-screen py-16 md:py-24 w-full max-w-[1164px] mx-auto overflow-hidden">
        <div className=" h-full grid lg:grid-cols-2 items-center gap-6">
          <div className="flex flex-col gap-14 ">
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideDownAnim(0)}
            >
              <h1 className="text-5xl font-extrabold capitalize">
                Why choose us
              </h1>
              <p className="max-w-[40rem] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates enim labore nostrum eligendi, explicabo quo obcaecati
                illum perferendis quibusdam eum dicta, distinctio, quod autem
                consequuntur? Nihil et culpa earum dignissimos!
              </p>
            </motion.div>
            <div className="flex flex-col gap-6">
              {steps.map(({ title, content }, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={
                    isDesktop
                      ? slideUpAnim(0.3 * (idx + 1))
                      : slideUpAnim(0.15 * (idx + 1))
                  }
                >
                  <div>
                    <p className="bg-blue-300 ronded-lg h-24 w-24 rounded-md"></p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-2xl font-bold capitalize tracking-tight">
                      {title}
                    </h3>
                    <p>{content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 justify-items-center  h-full w-full p-2">
            <motion.div
              className="min-h-[300px] lg:h-auto max-w-full w-full bg-neutral-300 outline outline-blue-300 max-w-64 max-h-64 shadow-md rounded-lg hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRTLAnim(0.9)}
            ></motion.div>
            <motion.div
              className="min-h-[300px] sm:row-span-full self-center	sm:col-end-3 max-w-64 max-h-64 w-full h-full bg-neutral-300  outline outline-blue-300 shadow-md rounded-lg hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRTLAnim(0.6)}
            >
              <div></div>
            </motion.div>
            <motion.div
              className="min-h-[300px] lg:h-auto max-w-full w-full bg-neutral-300 outline outline-blue-300 max-w-64 max-h-64 shadow-md rounded-lg  hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRTLAnim(0.3)}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
