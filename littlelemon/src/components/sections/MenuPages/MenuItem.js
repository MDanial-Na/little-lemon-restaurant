import './MenuItem.css';

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt='food' className="menu-item.image" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p className="price">{item.price}</p>
      <button onClick={() => addToCart(item)} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;