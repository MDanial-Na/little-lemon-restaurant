import HeroImage from '../../assets/food/food11.jpg'
import Login from '../sections/LoginPages/LoginHeading';
import './Login.css'

function Logins() {
  return (
    <div>
      <header className="login">
      <img
        className="login-header"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div><Login /></div>
      <div className="login-header-text">
        <h1>Login / Sign Up</h1>
      </div>
    </header>
    </div>
  );
}

export default Logins;
