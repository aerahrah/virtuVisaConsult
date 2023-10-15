import { BiRightArrowAlt } from "react-icons/bi";

const SectionTwo = () => {
  return (
    <div className="min-h-screen bg-neutral-900 py-24 px-16    text-neutral-300">
      <div className="w-full max-w-[1164px] mx-auto h-full ">
        <div className="flex flex-col gap-20 ">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg font-bold">Working Process</h3>
            <h1 className="text-5xl font-bold">How It Work</h1>
            <p className="max-w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </div>
          <div className="flex gap-8 transition duration-100">
            <div className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500 ">
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0 duration-100 ">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                1
              </h3>
            </div>
            <div className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline hover:outline-[1px] hover:outline-blue-500 ">
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0 duration-100 ">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                2
              </h3>
            </div>
            <div className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500 ">
              <h3 className="text-2xl font-bold capitalize">
                Business Thought
              </h3>
              <p className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                earum quis minus commodi dignissimos aliquid reprehenderit,
              </p>
              <div>
                <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0 duration-100 ">
                  learn more
                  <i>
                    <BiRightArrowAlt className="h-5 w-5" />
                  </i>
                </button>
              </div>
              <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
              <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
              <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-2xl">
                3
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
