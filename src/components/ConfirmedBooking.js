import React from "react";
import { Link, useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const reservationData =
    location.state || JSON.parse(localStorage.getItem("reservationData")) || {};

  const { date, time, guests, occasion } = reservationData;
  const bookingDate = new Date(date);
  const day = bookingDate.getDate(); // Extract day (e.g., 17)
  const month = bookingDate.toLocaleString("default", { month: "short" }); // Extract month (e.g., Mar)

  return (
    <>
      <div className="container-fluid bgPrimaryImg py-5 mb-5">
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold">Booking Confirmed</h1>
          <p className="lead">Thank you for choosing Little Lemon!</p>
        </div>
      </div>
      <div className="container confirmation-card">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card shadow-sm p-4 rounded-3 border-0">
              <p className="text-center mb-5">
                Confirmation email sent to <strong>john.smith@gmail.com</strong>
              </p>
              <div className="row align-items-center justify-content-center mb-4">
                <div className="col-auto" style={{ textAlign: "right" }}>
                  <h2 className="mb-0 fw-bold">{day}</h2>
                  <p className="mb-0 fw-bold text-uppercase">{month}</p>
                </div>
                <div className="col-auto">
                  <h5 className="mb-1 underlined">Little Lemon Chicago</h5>
                  <p className="mb-0">
                    {time} PM &nbsp; | &nbsp; Table for {guests}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <Link
                  className="btn btn-outline-secondary"
                  to="/booking"
                  state={reservationData}
                >
                  Edit reservation
                </Link>
                <button className="btn btn-outline-secondary">
                  Cancel Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmedBooking;
