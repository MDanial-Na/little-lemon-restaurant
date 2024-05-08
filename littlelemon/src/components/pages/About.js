import HeroImage from '../../assets/food/food6.jpg'
import Heading from '../sections/AboutPages/AboutHeading';
import './About.css'

function About() {
  return (
    <>
      <header className="about-table">
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
    </>
  );
}


export default About;