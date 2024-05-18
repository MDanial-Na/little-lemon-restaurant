import HeroImage from '../../assets/misc/ll-restaurant5.jpg'
import MenuHeading from '../sections/MenuPages/MenuHeading'
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
        <MenuHeading />
    </header>
  </div>
  )
}

export default Menu
