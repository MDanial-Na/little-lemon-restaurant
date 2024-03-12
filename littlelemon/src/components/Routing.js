import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/HomePage';
import About from './pages/About';
import Reservations from './pages/Reservations'
import Login from './pages/Login'
import Order from './pages/Order';
import Confirmation from './pages/Confirmation';


function Routing() {
    return (
    <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='about' element={<About />} />

        <Route path='reservations' element={<Reservations />} />

        <Route path='order' element={<Order />} />

        <Route path='login' element={<Login />} />

        <Route path='confirmation' element={<Confirmation />} />
    </Routes>
    )
}

export default Routing;