import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Home from './components/Home';

function App() {
  return (
    <>
      <main>
        <Header />;
        <Nav />;<Main></Main>;<Footer></Footer>;
      </main>
    </>
  );
}

export default App;
