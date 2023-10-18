import { Link } from "react-router-dom";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex justify-between py-4 bg-blue-600 fixed shadow-md z-50">
      <div className="flex justify-between w-full max-w-[960px] mx-auto">
        <h1>logo</h1>
        <ul className="flex gap-4 text-blue-50 transition ">
          <Link
            to="/"
            className="hover:outline rounded py-1 px-3 duration-100"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:outline rounded py-1 px-3 duration-100"
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:outline rounded py-1 px-3 duration-100"
            onClick={scrollToTop}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:outline rounded py-1 px-3 duration-100"
            onClick={scrollToTop}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
