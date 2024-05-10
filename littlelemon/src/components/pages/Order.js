import HeroImage from '../../assets/food/food9.jpg';
import Heading from '../sections/OrderPages/OrderHeading';
import './Order.css';

function Order() {
  return (
    <div>
      <header className="order">
      <img
        className="order-header"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div><Heading /></div>
      <div className="order-header-text">
        <h1>Online Order</h1>
      </div>
    </header>
    </div>
  );
}

export default Order;
