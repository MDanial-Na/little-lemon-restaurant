import HeroImage from "../../../assets/misc/ll-restaurant2.jpg";
import './ReservePagesHeading.css'

function ReservePagesHeading() {
  return (
    <header className="reserve-table">
      <img
        className="reserve-header"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Reserve a table</h1>
      </div>
    </header>
  );
}



export default ReservePagesHeading;