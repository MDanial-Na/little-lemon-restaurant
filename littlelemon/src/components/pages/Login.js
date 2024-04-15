import Login from "../sections/LoginPages/Login";
import image from "../../assets/food/food4.jpg"

function Order() {
  return (
    <div>
      <img
      className="header-reserve"
      src={image}
      alt="Little Lemon Ingredients"
      ></img>
      <div>
        <Login />
      </div>

    </div>
  );
}

export default Order;
