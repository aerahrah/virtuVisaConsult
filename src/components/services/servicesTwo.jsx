import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideDownAnim, slideUpAnim } from "../animation/animation";
import { BiCheckCircle } from "react-icons/bi";
const ServicesTwo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const planItems = [
    {
      name: "hello",
      price: "5000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
      services: [
        "Education Assessment",
        "School & Program Selection",
        "Document Collection & Verification",
        "School Application Submission And Monitoring",
        "Two (2) Complimentary Consultations",
      ],
    },
    {
      name: "hello",
      price: "10000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
      services: [
        "Education Assessment",
        "School & Program Selection",
        "Document Collection & Verification",
        "School Application Submission And Monitoring",
        "Two (2) Complimentary Consultations",
      ],
    },
    {
      name: "hello",
      price: "15000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed reiciendis fugit quis corrupti, esse aspernatur quam molestias omnis provident sapiente sint",
      services: [
        "Education Assessment",
        "School & Program Selection",
        "Document Collection & Verification",
        "School Application Submission And Monitoring",
        "Two (2) Complimentary Consultations",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-neutral-900 py-12 md:py-16 lg:py-24 px-6  md:px-12 lg:px-16  text-neutral-300  overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 ">
          <motion.div
            className="flex flex-col gap-4 items-center"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideDownAnim(0.3)}
          >
            {console.log(inView)}
            <h1 className="text-4xl md:text-5xl font-bold capitalize">
              our packages
            </h1>
            <p className="max-w-[40rem] text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols md:grid-cols-2  lg:grid-cols-3 gap-8 h-full w-full mx-auto justify-items-center"
            ref={ref2}
          >
            {planItems.map(({ name, description, price, services }, idx) => {
              return (
                <div
                  className={`${
                    idx === 2
                      ? "md:col-span-full lg:col-span-1  md:w-[45vw] lg:w-full"
                      : " "
                  }`}
                >
                  <div
                    className={`bg-neutral-800 p-6 rounded-lg ${
                      idx === 2 ? "" : " "
                    }`}
                    key={idx}
                  >
                    <div className="mb-10 text-center">
                      <h3 className="uppercase text-xl font-bold mb-1 text-blue-500">
                        {name}
                      </h3>
                      <p>{description}</p>
                    </div>
                    <p className="mb-10 text-center tracking-tight">
                      Starts at
                      <span className="text-blue-400 text-xl"> &#8369; </span>
                      <span className="text-4xl font-bold text-blue-500">
                        {price}
                      </span>
                    </p>
                    <ul className="flex flex-col gap-4 mb-8 capitalize">
                      {services.map((service, idx) => {
                        return (
                          <li key={idx} className="flex items-center gap-1">
                            <i>
                              <BiCheckCircle className="text-sky-400" />
                            </i>
                            {service}
                          </li>
                        );
                      })}
                    </ul>
                    <button className="uppercase block mx-auto">
                      <p className="px-[4vw] py-2 bg-blue-500 text-blue-100 text-center rounded">
                        Get Started
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default ServicesTwo;
