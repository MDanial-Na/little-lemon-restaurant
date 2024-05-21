
import HeroImage from '../../assets/food/bruschetta.jpg'
import './Reservations.css';
import BookingForm from '../sections/ReservePages/BookingForm';


function Reservations() {
  return (
    <div>
      <header className="reservation">
      <img
        className="reservation-header"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div><BookingForm /></div>
      <div className="reservation-header-text">
        <h1>Reservation</h1>
      </div>
    </header>
    </div>
  );
}

export default Reservations;
