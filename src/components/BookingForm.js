import React, { useEffect, useReducer, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookingSlot from "./BookingSlot";
import { fetchData } from "../api";

export const initializeTimes = async () => {
  const today = new Date().toISOString().split("T")[0];
  const times = await fetchData(today);
  return Array.isArray(times) ? times : [];
};

export const updateTimes = async (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const times = await fetchData(action.payload);
      return Array.isArray(times) ? times : [];
    default:
      return state;
  }
};

const BookingForm = () => {
  const [availableTimes, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_TIMES":
        return action.payload;
      default:
        return state;
    }
  }, []);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: "SET_TIMES", payload: times });
    };
    fetchInitialTimes();

    // Set available dates to only today's date
    const today = new Date().toISOString().split("T")[0];
    setAvailableDates([today]);
  }, []);

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

  const handleDateChange = async (e) => {
    formik.handleChange(e);
    const times = await fetchData(e.target.value);
    dispatch({ type: "SET_TIMES", payload: times });
  };

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
                availableDates={availableDates}
                availableTimes={availableTimes}
                formik={formik}
                handleDateChange={handleDateChange}
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
              <button type="submit" className="btn custom-btn mt-3">
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
