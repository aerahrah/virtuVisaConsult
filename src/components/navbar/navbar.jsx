import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between py-5 bg-blue-600 fixed shadow-sm ">
      <div className="flex justify-between w-full max-w-[960px] mx-auto">
        <h1>logo</h1>
        <ul className="flex gap-6 text-blue-50">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
