import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state || !state.reservationDetails) {
    // If no state is found, redirect to the form page
    navigate('/');
    return null;
  }

  const { reservationDetails } = state;

  return (
    <div className="confirmation-page-container">
      <h2>Reservation Confirmed!</h2>
      <p>Thank you for your reservation. Here are your details:</p>
      <div className="details-container">
        <p><strong>Name:</strong> {reservationDetails.name}</p>
        <p><strong>Email:</strong> {reservationDetails.email}</p>
        <p><strong>Phone:</strong> {reservationDetails.phone}</p>
        <p><strong>Date:</strong> {reservationDetails.date}</p>
        <p><strong>Time:</strong> {reservationDetails.time}</p>
        <p><strong>Guests:</strong> {reservationDetails.guests}</p>
      <section className="redirect-buttons">
        <Link className="redirect-button" to="/menu">Menu</Link>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
        </section>
      </div>
    </div>

  );
}


export default Confirmation;