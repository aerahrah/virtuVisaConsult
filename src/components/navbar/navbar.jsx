import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

const NavBar = () => {
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
  return (
    <div className="w-full flex justify-between py-4 bg-blue-600 fixed shadow-md z-50">
      <div className="flex justify-between w-full max-w-[960px] mx-auto">
        <h1>logo</h1>
        <div className="flex gap-4 text-blue-50 transition ">
          {navItems.map(({ link, content }, idx) => {
            return (
              <Link
                key={idx}
                to={link}
                className="hover:outline rounded py-1 px-3 duration-100 capitalize"
                onClick={scrollToTop}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
