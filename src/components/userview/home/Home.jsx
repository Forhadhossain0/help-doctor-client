import About from "./about/About";
import Banner from "./banner/Banner";
import Contact from "./contactpage/Contact";
import ExpDoctors from "./expertDoctor/ExpDoctors";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <>
       <Banner></Banner>
       <About></About>
       <Reviews></Reviews>
       <ExpDoctors></ExpDoctors>
       <Contact></Contact>


    </>
  );
};

export default Home;
