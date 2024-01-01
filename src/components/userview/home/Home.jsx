import Extra1 from "./Extra/extra1";
import About from "./about/About";
import Banner from "./banner/Banner";
import CommonService from "./common/CommonService";
import Contact from "./contactpage/Contact";
import ExpDoctors from "./expertDoctor/ExpDoctors";
import Reviews from "./reviews/Reviews";
import Team from "./team/Team";

const Home = () => {
  return (
    <>
       <Banner></Banner>
       <Extra1></Extra1>
       <CommonService></CommonService>
       <About></About>
       <ExpDoctors></ExpDoctors>
       <Team></Team>
       <Reviews></Reviews>
       <Contact></Contact>


    </>
  );
};

export default Home;
