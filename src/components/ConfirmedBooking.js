import React from "react";
import { Link, useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const reservationData =
    location.state || JSON.parse(localStorage.getItem("reservationData")) || {};

  const { date, time, guests, occasion } = reservationData;
  return (
    <>
      <div className="container-fluid bgPrimaryImg py-5 mb-5"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="alert alert-success" role="alert">
              Your booking has been submitted successfully!
            </div>
            <div className="col-12 col-md-8">
              <h3>Submitted Details:</h3>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Guests:</strong> {guests}
              </p>
              <p>
                <strong>Occasion:</strong> {occasion}
              </p>
            </div>

            <Link to="/booking" state={reservationData}>
              Edit reservation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmedBooking;
