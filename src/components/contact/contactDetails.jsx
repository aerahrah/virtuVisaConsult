import testimonialBg from "../../assets/img/map.png";
import { BiSolidPhone, BiMailSend, BiSolidMap } from "react-icons/bi";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <BiSolidPhone className="h-10 w-10 text-blue-100" />,
      title: "phone no",
      content: "+901 152 485 85",
    },
    {
      icon: <BiMailSend className="h-10 w-10 text-blue-100" />,
      title: "email",
      content: "virtuvisaconsult@gmail.com",
    },
    {
      icon: <BiSolidMap className="h-10 w-10 text-blue-100" />,
      title: "location",
      content: "San mateo, isabela",
    },
  ];
  return (
    <div
      className="bg-white py-12 md:py-16  px-6 md:px-12 lg:px-16 !pt-24 text-neutral-800 "
      style={{
        backgroundImage: `url(${testimonialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          <div className="text-center">
            <h3 className="text-2xl capitalize font-bold tracking-tight text-blue-500">
              contact us
            </h3>
            <h1 className="text-5xl font-extrabold max-w-[40rem] mx-auto">
              Needs help? let's get in touch
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 max-w-full gap-10">
            <div className="justify-self-center">
              <div className="h-96 w-96 bg-neutral-300"></div>
            </div>

            <ul className="flex flex-col gap-6 justify-between w-full">
              {contactInfo.map(({ icon, title, content }, idx) => (
                <li
                  key={idx}
                  className="flex gap-6 items-center bg-white w-full p-6 rounded-lg shadow border-[1px]"
                >
                  <i className="bg-blue-500 rounded-full p-2.5 shadow-lg">
                    {icon}
                  </i>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-2xl font-bold capitalize tracking-tight">
                      {title}
                    </h5>
                    <p className="text-lg">{content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
