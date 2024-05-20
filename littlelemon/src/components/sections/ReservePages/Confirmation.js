import HeroImage from "../../../assets/misc/ll-restaurant3.jpeg";
import { Link } from "react-router-dom";
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const { reservationDetails } = location.state;

  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
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
      </div>
    </div>

      <section className="redirect-buttons">
        <Link className="redirect-button" to="/menu">Menu</Link>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}


export default Confirmation;