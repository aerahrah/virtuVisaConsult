import NavBar from "../navbar/navbar";
import SectionTwo from "./sectionTwo";
import SectionOne from "./sectionOne";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import Footer from "../footer/footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default Home;
