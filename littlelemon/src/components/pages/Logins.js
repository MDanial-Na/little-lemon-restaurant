import HeroImage from '../../assets/food/ll-restaurant5.jpg'

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
    </header>
    </div>
  );
}

export default Logins;
