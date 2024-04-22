import HeroImage from '../../assets/food/food6.jpg'

function About() {
  return (
    <>
      <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About</h1>
      </div>
    </header>
    </>
  );
}


export default About;