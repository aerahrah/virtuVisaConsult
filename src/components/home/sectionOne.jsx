const SectionOne = () => {
  return (
    <div className="bg-neutral-100">
      <div className="h-screen pt-16 w-full max-w-[960px] mx-auto">
        <div className=" h-full flex items-center gap-6">
          <div className="flex flex-col gap-14">
            <div className="text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              temporibus eligendi autem laborum. Sit, nesciunt. Aperiam ipsa
              provident deserunt totam porro eos nam esse ab, rerum non
              quibusdam vitae ad.
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
