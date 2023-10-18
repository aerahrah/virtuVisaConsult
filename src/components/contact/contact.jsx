import testimonialBg from "../../assets/img/map.png";
import { BiSolidPhone, BiMailSend, BiSolidMap } from "react-icons/bi";

const Contact = () => {
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
          <div className="text-center">
            <h3 className="text-2xl capitalize font-bold tracking-tight text-blue-500">
              contact us
            </h3>
            <h1 className="text-5xl font-extrabold max-w-[50%] mx-auto">
              Needs help? let's get in touch
            </h1>
          </div>

          <div className="flex justify-between max-w-full gap-10">
            <div>
              <div className="h-96 w-96 bg-neutral-300"></div>
            </div>

            <ul className="flex flex-col justify-between w-full">
              <li className=" flex gap-6 items-center bg-white w-full p-6 rounded-lg shadow border-[1px]">
                <i className="bg-blue-500 rounded-full p-2.5 shadow-lg">
                  <BiSolidPhone className="h-10 w-10 text-blue-100" />
                </i>
                <div className="flex flex-col gap-1">
                  <h5 className="text-2xl font-bold capitalize tracking-tight">
                    phone no
                  </h5>
                  <p className="text-lg">+901 152 485 85</p>
                </div>
              </li>
              <li className=" flex gap-6 items-center bg-white w-full p-6 rounded-lg shadow border-[1px]">
                <i className="bg-blue-500 rounded-full p-2.5 shadow-lg">
                  <BiMailSend className="h-10 w-10 text-blue-100" />
                </i>
                <div className="flex flex-col gap-1">
                  <h5 className="text-2xl font-bold capitalize tracking-tight">
                    email
                  </h5>
                  <p className="text-lg">virtuvisaconsult@gmail.com</p>
                </div>
              </li>
              <li className=" flex gap-6 items-center bg-white w-full p-6 rounded-lg shadow border-[1px]">
                <i className="bg-blue-500 rounded-full p-2.5 shadow-lg">
                  <BiSolidMap className="h-10 w-10 text-blue-100" />
                </i>
                <div className="flex flex-col gap-1">
                  <h5 className="text-2xl font-bold capitalize tracking-tight">
                    location
                  </h5>
                  <p className="text-lg">San mateo, isabela</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
