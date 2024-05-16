import HeroImage from '../../assets/food/food7.jpg'
import './Menu.css';
import MenuHeading from '../sections/MenuPages/MenuHeading'



function Menu() {
  return (
    <div>
    <header className="menu">
        <img
            className="menu-header"
            src={HeroImage}
            alt="Menu"
        ></img>
        <div className="menu-header-text">
            <h1>Our Menu</h1>
        </div>
    </header>
    <MenuHeading />
  </div>
  )
}

export default Menu
