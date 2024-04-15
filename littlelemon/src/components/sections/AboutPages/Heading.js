import HeroImage from "../../../assets/food/food4.jpg";
function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About me zzzz you else</h1>
      </div>
    </header>
  );
}

export default Heading;