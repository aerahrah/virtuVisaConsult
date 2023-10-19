import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiCaretRight,
  BiSolidPhone,
  BiMailSend,
  BiSolidMap,
} from "react-icons/bi";
import { scrollToTop } from "../utils/scrollToTop";
import { Link } from "react-router-dom";

const navItems = [
  {
    link: "/",
    content: "home",
  },
  {
    link: "/about",
    content: "about",
  },
  {
    link: "/services",
    content: "services",
  },
  {
    link: "/contact",
    content: "contact",
  },
];

const socialMediaIcons = [
  {
    icon: <BiLogoFacebookCircle className="h-8 w-8" />,
    link: "https://www.facebook.com",
  },
  {
    icon: <BiLogoTwitter className="h-8 w-8" />,
    link: "https://www.twitter.com",
  },
  {
    icon: <BiLogoInstagram className="h-8 w-8" />,
    link: "https://www.instagram.com",
  },
];

const Footer = () => {
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
            <ul className="flex gap-4">
              {socialMediaIcons.map(({ icon, link }, idx) => (
                <li
                  key={idx}
                  className="p-1 bg-neutral-600 rounded-full cursor-pointer transform hover:scale-[1.04] duration-100 hover:bg-blue-600"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[30%] flex flex-col gap-4">
            <h3 className="text-2xl font-bold capitalize">quick link</h3>
            <ul className="capitalize flex flex-col gap-2 ">
              {navItems.map(({ link, content }, idx) => {
                return (
                  <li
                    key={idx}
                    className="flex gap-1 items-center cursor-pointer duration-100 hover:text-blue-500 hover:translate-x-[2px]"
                  >
                    <BiCaretRight className="text-blue-500" />
                    <Link to={link} onClick={scrollToTop}>
                      {content}
                    </Link>
                  </li>
                );
              })}
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
                <BiMailSend className="inline-block" />
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
