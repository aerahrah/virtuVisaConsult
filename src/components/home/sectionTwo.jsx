import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnim, slideUpAnim } from "../animation/animation";
import { Link } from "react-router-dom";
const SectionTwo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const servicesItems = [
    { icon: "hello", title: "Business Thought", delaySpeed: 0.3 },
    { icon: "hello1", title: "Business Thought", delaySpeed: 0.6 },
    { icon: "hello3", title: "Business Thought", delaySpeed: 0.9 },
  ];
  return (
    <div className="min-h-screen bg-neutral-900 py-24 px-16    text-neutral-300  overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-20 ">
          <motion.div
            className="flex flex-col gap-4 items-center"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideDownAnim(0.3)}
          >
            {console.log(inView)}
            <h3 className="text-lg font-bold text-blue-500">Working Process</h3>
            <h1 className="text-5xl font-bold capitalize">our services</h1>
            <p className="max-w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </motion.div>
          <motion.div className="flex gap-8 h-full" ref={ref2}>
            {servicesItems.map(({ icon, title, delaySpeed }) => {
              return (
                <motion.div
                  className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500 w-full"
                  initial="hidden"
                  animate={inView2 ? "visible" : "hidden"}
                  variants={slideUpAnim(delaySpeed)}
                >
                  <i>{icon}</i>
                  <h3 className="text-2xl font-bold capitalize">{title}</h3>

                  <Link to="/services">
                    <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                      learn more
                      <i>
                        <BiRightArrowAlt className="h-5 w-5" />
                      </i>
                    </button>
                  </Link>
                  <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
                  <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
