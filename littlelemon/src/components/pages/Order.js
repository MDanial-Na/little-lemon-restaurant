import HeroImage from '../../assets/food/food9.jpg';

function Order() {
  return (
    <>
      <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Online Order</h1>
      </div>
    </header>
    </>
  );
}

export default Order;
