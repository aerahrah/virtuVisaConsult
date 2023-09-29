import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between py-5 bg-[#F2E7D5] fixed shadow-sm ">
      <div className="flex justify-between w-full max-w-[960px] mx-auto">
        <h1>logo</h1>
        <ul className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <li>Services</li>
          <li>Resources</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
