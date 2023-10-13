const SectionOne = () => {
  return (
    <div className="bg-neutral-100">
      <div className="h-screen pt-16 w-full max-w-[1164px] mx-auto">
        <div className=" h-full flex items-center gap-6">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <h1 className="text-7xl font-black">
                We Provide Visa Consulting Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime iure quod hic consectetur esse tempore nihil aliquam
                quae, beatae saepe necessitatibus harum quos modi ad amet
                incidunt velit eos!
              </p>
            </div>
            <div className="w-full">
              <button className="block py-3 px-16 rounded-full outline outline-2 outline-blue-600 hover:bg-blue-200  hover:outline-0 font-semibold uppercase">
                Book an appointment
              </button>
            </div>
          </div>

          <div>
            <div className="h-96 w-96 bg-neutral-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
