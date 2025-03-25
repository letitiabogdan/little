import React, { useReducer, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookingSlot from "./BookingSlot";

const availableTimesData = [
  { date: "2025-03-01", time: "12:00", id: 1 },
  { date: "2025-03-01", time: "13:00", id: 2 },
  { date: "2025-03-01", time: "13:00", id: 3 },
  { date: "2025-03-01", time: "14:00", id: 4 },
  { date: "2025-03-01", time: "15:00", id: 5 },
  { date: "2025-03-02", time: "15:00", id: 6 },
  { date: "2025-03-02", time: "16:00", id: 7 },
  { date: "2025-03-02", time: "17:00", id: 8 },
  { date: "2025-03-02", time: "18:00", id: 9 },
  { date: "2025-03-02", time: "19:00", id: 10 },
];
const uniqueDates = [...new Set(availableTimesData.map((item) => item.date))];

const getTimesByDate = (date) => {
  return availableTimesData
    .filter((item) => item.date === date)
    .map((item) => item.time);
};

const initializeTimes = () => {
  return getTimesByDate(uniqueDates[0]);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return getTimesByDate(action.payload);
    default:
      return state;
  }
};

const BookingForm = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "At least 1 guest is required")
        .max(10, "Maximum 10 guests allowed")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
      setIsSubmitted(true);
      setSubmittedValues(values);
      formik.resetForm();
    },
  });

  const timeOptions = formik.values.date
    ? getTimesByDate(formik.values.date)
    : [];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h1>Book a Table</h1>
          {isSubmitted ? (
            <>
              <div className="alert alert-success" role="alert">
                Your booking has been submitted successfully!
              </div>
              <div className="col-12 col-md-8">
                <h3>Submitted Details:</h3>
                <p>
                  <strong>Date:</strong> {submittedValues.date}
                </p>
                <p>
                  <strong>Time:</strong> {submittedValues.time}
                </p>
                <p>
                  <strong>Guests:</strong> {submittedValues.guests}
                </p>
                <p>
                  <strong>Occasion:</strong> {submittedValues.occasion}
                </p>
              </div>
            </>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <BookingSlot
                availableDates={uniqueDates}
                availableTimes={timeOptions}
                formik={formik}
                dispatch={dispatch}
              ></BookingSlot>

              <div className="mb-3">
                <label htmlFor="guests" className="form-label">
                  Number of Guests:
                </label>
                <input
                  type="number"
                  id="guests"
                  className="form-control"
                  name="guests"
                  value={formik.values.guests}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min="1"
                  max="10"
                  required
                  aria-required="true"
                  aria-invalid={
                    formik.touched.guests && formik.errors.guests
                      ? "true"
                      : "false"
                  }
                />
                {formik.touched.guests && formik.errors.guests ? (
                  <div className="text-danger">{formik.errors.guests}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="occasion" className="form-label">
                  Occasion:
                </label>
                <select
                  id="occasion"
                  className="form-select"
                  name="occasion"
                  value={formik.values.occasion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={
                    formik.touched.occasion && formik.errors.occasion
                      ? "true"
                      : "false"
                  }
                >
                  <option value="">Select an occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.occasion && formik.errors.occasion ? (
                  <div className="text-danger">{formik.errors.occasion}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn custom-btn mt-3"
                role="button"
              >
                Book Table
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
