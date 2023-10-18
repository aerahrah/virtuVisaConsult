import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnim, slideUpAnim } from "../animation/animation";
import { BiCheckCircle } from "react-icons/bi";
const ServicesTwo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  return (
    <div className="min-h-screen bg-neutral-900 py-24 px-16    text-neutral-300  overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-16 ">
          <motion.div
            className="flex flex-col gap-4 items-center"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideDownAnim(0.3)}
          >
            {console.log(inView)}
            <h1 className="text-5xl font-bold capitalize">our packages</h1>
            <p className="max-w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </motion.div>
          <motion.div className="flex gap-8 h-full w-[90%] mx-auto" ref={ref2}>
            <div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="mb-10 text-center">
                  <h3 className="uppercase text-xl font-bold mb-1 text-blue-500">
                    transferee plan
                  </h3>
                  <p>students who seek to transfer shhools</p>
                </div>
                <p className="mb-10 text-center tracking-tight">
                  Starts at
                  <span className="text-blue-400 text-xl"> &#8369; </span>
                  <span className="text-4xl font-bold text-blue-500">
                    5000{" "}
                  </span>
                </p>
                <ul className="flex flex-col gap-4 mb-8 capitalize">
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    education assessment
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    School & Program Selection
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    Document Collection & Verification
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    School Application Submission and Monitoring
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    Two (2) Complimentary Consultations
                  </li>
                </ul>

                <button className="uppercase block mx-auto">
                  <p className="px-[4vw] py-2 bg-blue-500 text-blue-100 text-center rounded">
                    Get Started
                  </p>
                </button>
              </div>
            </div>
            <div>
              <div className="bg-neutral-800 p-6 rounded-lg ">
                <div className="mb-10 text-center">
                  <h3 className="uppercase text-xl font-bold mb-1 text-blue-500">
                    transferee plan
                  </h3>
                  <p>students who seek to transfer shhools</p>
                </div>
                <p className="mb-10 text-center tracking-tight">
                  Starts at
                  <span className="text-blue-400 text-xl"> &#8369; </span>
                  <span className="text-4xl font-bold text-blue-500">
                    5000{" "}
                  </span>
                </p>
                <ul className="flex flex-col gap-4 mb-8 capitalize">
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    education assessment
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    School & Program Selection
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    Document Collection & Verification
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    School Application Submission and Monitoring
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    Two (2) Complimentary Consultations
                  </li>
                </ul>

                <button className="uppercase block mx-auto">
                  <p className="px-[4vw] py-2 bg-blue-500 text-blue-100 text-center rounded">
                    Get Started
                  </p>
                </button>
              </div>
            </div>
            <div>
              <div className="bg-neutral-800 p-6 rounded-lg ">
                <div className="mb-10 text-center">
                  <h3 className="uppercase text-xl font-bold mb-1 text-blue-500">
                    transferee plan
                  </h3>
                  <p>students who seek to transfer shhools</p>
                </div>
                <p className="mb-10 text-center tracking-tight">
                  Starts at
                  <span className="text-blue-400 text-xl"> &#8369; </span>
                  <span className="text-4xl font-bold text-blue-500">
                    5000{" "}
                  </span>
                </p>
                <ul className="flex flex-col gap-4 mb-8 capitalize">
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    education assessment
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    School & Program Selection
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    Document Collection & Verification
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    School Application Submission and Monitoring
                  </li>
                  <li className="flex items-center gap-1">
                    <i>
                      <BiCheckCircle className="text-sky-400" />
                    </i>
                    Two (2) Complimentary Consultations
                  </li>
                </ul>

                <button className="uppercase block mx-auto">
                  <p className="px-[4vw] py-2 bg-blue-500 text-blue-100 text-center rounded">
                    Get Started
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default ServicesTwo;
