import Testimonial from "./testimonial";
import testimonialBg from "../../assets/img/map.png";
const SectionFour = () => {
  return (
    <div
      className="bg-white py-24 px-16 text-neutral-800 "
      style={{
        backgroundImage: `url(${testimonialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg font-bold text-neutral-500">
              Customer Testimonial
            </h3>
            <h1 className="text-5xl font-extrabold capitalize">
              What's our clients say
            </h1>
            <p className="max-w-[50%] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              unde incidunt, est quod alias recusandae totam repellendus.
            </p>
          </div>
          <div>
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFour;
