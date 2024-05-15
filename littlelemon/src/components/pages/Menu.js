import HeroImage from '../../assets/food/food7.jpg'
import Carousel from '../sections/Carousel';
import './Menu.css';



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
    <Carousel />
  </div>
  )
}

export default Menu
