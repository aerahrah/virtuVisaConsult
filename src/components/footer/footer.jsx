import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiCaretRight,
  BiSolidPhone,
  BiMailSend,
  BiSolidMap,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-neutral-900 py-24 px-16 text-neutral-300">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex justify-between gap-6 w-full">
          <div className="max-w-[30%] flex flex-col gap-4 transition transform">
            <h3 className="text-2xl font-bold capitalize">about us</h3>
            <p>
              tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <ul className="flex gap-4  ">
              <li className="p-1 bg-neutral-600 rounded-full cursor-pointer transform hover:scale-[1.04] duration-100 hover:bg-blue-600">
                <BiLogoFacebookCircle className="h-8 w-8" />
              </li>
              <li className="p-1 bg-neutral-600 rounded-full cursor-pointer transform hover:scale-[1.04] duration-100 hover:bg-blue-600">
                <BiLogoTwitter className="h-8 w-8" />
              </li>
              <li className="p-1 bg-neutral-600 rounded-full cursor-pointer transform hover:scale-[1.04] duration-100 hover:bg-blue-600">
                <BiLogoInstagram className="h-8 w-8" />
              </li>
            </ul>
          </div>
          <div className="max-w-[30%] flex flex-col gap-4">
            <h3 className="text-2xl font-bold capitalize">quick link</h3>
            <ul className="capitalize flex flex-col gap-2 ">
              <li className="flex gap-1 items-center cursor-pointer duration-100 hover:text-blue-500 hover:translate-x-[2px]">
                <BiCaretRight className="text-blue-500" />
                <Link to="/" onClick={scrollToTop}>
                  home
                </Link>
              </li>
              <li className="flex gap-1 items-center cursor-pointer duration-100 hover:text-blue-500 hover:translate-x-[2px]">
                <BiCaretRight className="text-blue-500" />
                <Link to="/about" onClick={scrollToTop}>
                  About us
                </Link>
              </li>
              <li className="flex gap-1 items-center cursor-pointer duration-100 hover:text-blue-500 hover:translate-x-[2px]">
                <BiCaretRight className="text-blue-500" />
                <Link to="/services" onClick={scrollToTop}>
                  services
                </Link>
              </li>

              <li className="flex gap-1 items-center cursor-pointer duration-100 hover:text-blue-500 hover:translate-x-[2px]">
                <BiCaretRight className="text-blue-500" />
                <Link to="/contact" onClick={scrollToTop}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[30%] flex flex-col gap-4">
            <h3 className="text-2xl font-bold capitalize">Contact us</h3>
            <ul className=" flex flex-col gap-2">
              <li className="flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <BiSolidPhone />
                09175031119
              </li>
              <li className="flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <BiMailSend />
                virtuvisaconsult@gmail.com
              </li>
              <li className="cursor-pointer duration-100 hover:text-blue-500">
                <BiSolidMap className="inline" />
                1700 W Blancke St, kiyev port south USA, America
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
