import MenuItem from './MenuItem';
import './Menu.css';


const menuItems = [
  { id: 1, name: 'Baked Chicken', price: '$19.99', description: 'Tender, herb-marinated chicken baked to golden perfection, served with roasted vegetables and creamy mashed potatoes. A savory delight!.', image:require ('../../../assets/food/baked-chicken.jpg')},
  { id: 2, name: 'Bruschetta', price: '$15.99', description: 'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.', image: require('../../../assets/food/bruschetta.jpg') },
  { id: 3, name: 'Chicken Soup', price: '$15.50', description: 'Warm, flavorful broth with tender chicken, fresh vegetables, and aromatic herbs. Comfort in a bowl!', image: require('../../../assets/food/chicken-soup.jpg') },
  { id: 4, name: 'Chocolate Lava Cake', price: '$15.99', description: 'Warm, rich chocolate cake with a gooey molten center. Decadent and irresistible!', image: require('../../../assets/food/chocolate-lava-cakes.jpg') },
  { id: 5, name: 'Fettuccine Alfredo', price: '$16.50', description: 'Creamy Alfredo sauce with Parmesan over tender fettuccine. Rich and comforting!', image: require('../../../assets/food/fettuccine-alfredo.jpg') },
  { id: 6, name: 'Gnocchi', price: '$15.99', description: 'Soft, pillowy potato dumplings in a rich, savory sauce. Delightfully comforting!', image:require ('../../../assets/food/gnocchi.jpg')},
  { id: 7, name: 'Greek Salad', price: '$19.99', description: 'Crisp cucumbers, juicy tomatoes, olives, and feta cheese. Fresh and vibrant!', image: require('../../../assets/food/greek-salad.jpg') },
  { id: 8, name: 'Lasagna', price: '$19.99', description: 'Layers of rich meat sauce, creamy béchamel, and melted cheese. Hearty and satisfying!', image: require('../../../assets/food/lasagna.jpg') },
  { id: 9, name: 'Lemon Dessert', price: '$12.99', description: 'Zesty lemon filling with a buttery crust. Refreshingly tangy and sweet!', image: require('../../../assets/food/lemon-dessert.jpg') },
  { id: 10, name: 'Margheritta Pizza', price: '$20.50', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil. Simple and delicious', image: require('../../../assets/food/margherita-pizza.jpg') },
  { id: 11, name: 'Prosciutto', price: '$19.99', description: 'Thinly sliced, dry-cured Italian ham. Delicate, salty, and savory!', image:require ('../../../assets/food/prosciutto.jpeg')},
  { id: 12, name: 'Risotto', price: '$19.99', description: 'Creamy Arborio rice cooked with broth, Parmesan, and a touch of white wine. Rich and comforting!', image: require('../../../assets/food/risotto.jpg') },
  { id: 13, name: 'Spaghetti Carbonara', price: '$15.50', description: 'Traditional Italian pasta with pancetta, egg, and Parmesan cheese.', image: require('../../../assets/food/spaghetti-carbonara.jpg') },
  { id: 14, name: 'Steak', price: '$30.99', description: 'Juicy, perfectly grilled steak with a savory crust. Tender and flavorful!', image: require('../../../assets/food/steak.jpg') },
  { id: 15, name: 'Vegetarian Pizza', price: '$20.50', description: 'Fresh vegetables, mozzarella, and tangy tomato sauce on a crispy crust. Flavorful and satisfying!', image: require('../../../assets/food/vegetarian-pizza.jpg') },
];

const Menu = ({ addToCart }) => {
  return (
      <div className="ordermenu">
        <div className="menu-items">
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
  );
};

export default Menu;
