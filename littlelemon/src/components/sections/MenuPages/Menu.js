import MenuItem from './MenuItem';
import './Menu.css';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', price: '$1.99', description: 'Classic Margherita with fresh tomatoes, mozzarella cheese, and basil.', image:require ('../../../assets/food/food10.jpg')},
  { id: 2, name: 'Caesar Salad', price: '$9.99', description: 'Crispy romaine lettuce, croutons, and Caesar dressing.', image: require('../../../assets/food/food7.jpg') },
  { id: 3, name: 'Spaghetti Carbonara', price: '$14.99', description: 'Traditional Italian pasta with pancetta, egg, and Parmesan cheese.', image: require('../../../assets/food/food10.jpg') },
  { id: 4, name: 'Grilled Chicken', price: '$16.99', description: 'Juicy grilled chicken breast with a side of vegetables.', image: require('../../../assets/food/food10.jpg') },
  { id: 5, name: 'Chocolate Lava Cake', price: '$6.99', description: 'Warm chocolate cake with a gooey center.', image: require('../../../assets/food/food11.jpg') },
];

const Menu = ({ addToCart }) => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
