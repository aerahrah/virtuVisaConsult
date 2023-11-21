import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiCaretRight,
  BiSolidPhone,
  BiMailSend,
  BiSolidMap,
  BiLogoTiktok,
} from "react-icons/bi";
import { scrollToTop } from "../../utils/scrollToTop";
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
  {
    icon: <BiLogoTiktok className="h-8 w-8" />,
    link: "https://www.instagram.com",
  },
];

const Footer = () => {
  return (
    <div className="bg-neutral-900 py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-16 text-neutral-300">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-8 md:gap-10 w-full">
          <div>
            <div className="w-48 h-48  bg-blue-500"></div>
          </div>
          <div className="flex flex-col gap-4 transition transform">
            <h3 className="text-2xl font-bold capitalize">about us</h3>
            <p>
              Your trusted visa and immigration partners. Simplifying your
              journey to explore new horizons.
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
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold capitalize">Contact us</h3>
            <ul className=" flex flex-col gap-2">
              <li className="flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <i>
                  <BiSolidPhone />
                </i>
                <div>(+63) 917-503-1119 or</div>
              </li>
              <li className="flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <i>
                  <BiSolidPhone />
                </i>
                <div>
                  <p>(+63) 976-095-0232</p>
                </div>
              </li>
              <li className="flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <i>
                  <BiMailSend />
                </i>
                virtuvisaconsult@gmail.com
              </li>
              <li className="cursor-pointer duration-100 hover:text-blue-500">
                <BiSolidMap className="inline" />
                San mateo, Isabela, 3318 Philippines
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
