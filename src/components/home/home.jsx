import NavBar from "../navbar/navbar";
import SectionTwo from "./sectionTwo";
import SectionOne from "./sectionOne";
import SectionThree from "./sectionThree";
import Testimonial from "./testimonial";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Testimonial />
    </div>
  );
};

export default Home;
