import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Home from './components/Home';

function App() {
  return <Header className='App'>littlelemon</Header>;
  <Nav>
    <ul>
      <li>
        <a href='/home'>Home</a>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
      <li>
        <a href='/menu'>Menu</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </ul>
  </Nav>;
}

export default App;
