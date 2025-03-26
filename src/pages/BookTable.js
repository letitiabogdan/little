import React from "react";
import BookingForm from "../components/BookingForm";

const BookTable = (props) => {
  return <BookingForm submitForm={props.submitForm}></BookingForm>;
};

export default BookTable;
