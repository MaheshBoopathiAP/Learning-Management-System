import { Element } from 'react-scroll';
import Nav from "./components/Nav";
import MyCarousel from "./components/Carousel";
import CardSlide from "./components/cardSlide";
import StaticCard from "./components/StaticCard";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import Courses from './components/Courses';

function App() {
  return (
    <div className="w-[100%] m-auto">
      <Nav />
      
      <Element name="Home">
        <MyCarousel />
      </Element>
      
      <Element name="About">
        <CardSlide />
      </Element>
      <Element name="Courses">
        <Courses />
      </Element>
      
      <Element name="Services">
        <StaticCard />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>

   
      <Element name="Footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
