import React from "react";
import BookingForm from "../components/BookingForm";
const BookTable = (props) => {
  return (
    <>
      <div className="container-fluid bgPrimaryImg py-5 mb-5"></div>
      <BookingForm submitForm={props.submitForm}></BookingForm>
    </>
  );
};

export default BookTable;
