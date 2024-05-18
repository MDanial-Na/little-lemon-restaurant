import HeroImage from '../../assets/misc/ll-restaurant4.jpg'
import Heading from '../sections/AboutPages/AboutHeading';
import Carousel from '../sections/Carousel';
import './About.css'

function About() {
  return (
    <>
      <header className="about">
      <img
        className="about-header"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="about-header-text">
        <h1>About</h1>
      </div>
    </header>
    <Heading /> 
    <Carousel />
    </>
  );
}


export default About;