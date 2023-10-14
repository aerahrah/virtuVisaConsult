import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Testimonial = () => {
  let [current, setCurrent] = useState(0);

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className=" w-full max-w-[1164px] mx-auto">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-40 pb-8`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((img, index) => (
            <div className="w-full" key={index}>
              <div className="w-[100vw] max-w-[100%]">
                <div className="relative  min-h-64 bg-neutral-100 shadow-md  rounded-lg w-[80vw] max-w-[70%] ml-[14vw] mx-auto">
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-5rem] z-50">
                    <img
                      className="w-40 h-40 rounded-full"
                      src={img}
                      alt={`Slide ${index}`}
                    />
                  </div>
                  <div className="p-16 pl-24 flex flex-col justify-between h-full gap-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quisquam architecto odio necessitatibus aliquid quod
                      explicabo, suscipit quidem ad. Magni labore possimus
                      aliquam blanditiis, provident cumque quasi consequuntur?
                      Dolore, adipisci repellendus!
                    </p>
                    <h5 className="text-2xl font-bold">Luis Ramirez</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-4 text-3xl">
          <button className="border-[1px] rounded-full" onClick={previousSlide}>
            <BsFillArrowLeftCircleFill className="text-neutral-800" />
          </button>
          <button className="border-[1px] rounded-full" onClick={nextSlide}>
            <BsFillArrowRightCircleFill className="text-neutral-800" />
          </button>
        </div>
      </div>
      <div className=" py-4 flex justify-center gap-3 w-full z-30">
        {slides.map((s, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer  ${
              i == current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
