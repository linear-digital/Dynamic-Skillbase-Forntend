
import Contact from "../Contact/Contact";
import AboutUs from "./AboutUs";
import Events from "./Events";
import { Faq } from "./Faq";
import FunFact from "./FunFact";
import HeroArea from "./HeroArea";
import PopularCourses from "./PopularCourses";
import Statistic from "./Statistic";


const Home = () => {
    return (
        <div>
           <HeroArea />
           <Statistic />
           <AboutUs />
           <FunFact />
           <PopularCourses />
        </div>
    );
};

export default Home;