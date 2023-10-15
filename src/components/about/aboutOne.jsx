const AboutOne = () => {
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
        <div className=" h-full flex items-center justify-center gap-16">
          <div className="max-w-[50%]">
            <div className="flex flex-col gap-6">
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

export default AboutOne;
