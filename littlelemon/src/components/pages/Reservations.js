import Heading from "../sections/ReservePages/ReservePagesHeading";
import ReservationForm from "../sections/ReservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";


function Reservations() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}

export default Reservations;
