import HeroImage from "../../../assets/food/ll-restaurant3.jpeg";
function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Reserve a table</h1>
      </div>
    </header>
  );
}



export default Heading;