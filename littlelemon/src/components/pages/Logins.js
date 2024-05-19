import HeroImage from '../../assets/food/prosciutto.jpeg'
import Login from '../sections/LoginPages/LoginHeading';
import './Logins.css'

function Logins() {
  return (
    <div>
      <header className="login">
      <img
        className="login-header"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="login-header-text">
        <h1>Login / Sign Up</h1>
      </div>
      <div><Login /></div>
    </header>
    </div>
  );
}

export default Logins;
