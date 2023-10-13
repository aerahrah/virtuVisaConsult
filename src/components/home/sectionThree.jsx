const SectionThree = () => {
  return (
    <div className="bg-neutral-100">
      <div className="min-h-screen py-16 w-full max-w-[1164px] mx-auto">
        <div className=" h-full flex items-center gap-6">
          <div className="flex flex-col gap-14 w-[50%]">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-blue-500">Why choose us</h3>
              <h1 className="text-5xl font-extrabold capitalize">
                How to strengthen your business
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates enim labore nostrum eligendi, explicabo quo obcaecati
                illum perferendis quibusdam eum dicta, distinctio, quod autem
                consequuntur? Nihil et culpa earum dignissimos!
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
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
              </div>
              <div className="flex gap-4">
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
              </div>
              <div className="flex gap-4">
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
              </div>
            </div>
          </div>
          <div className="relative h-full w-[50%]">
            <div className="absolute top-6 h-64 w-64 bg-neutral-300 outline outline-blue-300 rounded-lg"></div>
            <div className="absolute top-[-5rem] right-6 h-64 w-64 bg-neutral-300  outline outline-blue-300 rounded-lg"></div>
            <div className="absolute bottom-6 h-64 w-64 bg-neutral-300 outline outline-blue-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
