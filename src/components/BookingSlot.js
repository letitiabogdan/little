import React from "react";

const BookingSlot = ({
  availableDates,
  availableTimes,
  formik,
  handleDateChange,
}) => {
  return (
    <div
      className={`booking-slot ${
        availableDates.length && availableTimes.length
          ? "available"
          : "unavailable"
      }`}
    >
      <div className="mb-3">
        <label htmlFor="res-date" className="form-label">
          Date:
        </label>
        <select
          id="res-date"
          name="date"
          className="form-select"
          value={formik.values.date}
          onChange={handleDateChange}
          onBlur={formik.handleBlur}
          required
          aria-required="true"
          aria-invalid={
            formik.touched.date && formik.errors.date ? "true" : "false"
          }
        >
          <option value="">Select a date</option>
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        {formik.touched.date && formik.errors.date ? (
          <div className="text-danger">{formik.errors.date}</div>
        ) : null}
      </div>
      {formik.values.date && (
        <div className="mb-3">
          <label htmlFor="res-time" className="form-label">
            Time:
          </label>
          <select
            id="res-time"
            name="time"
            className="form-select"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            aria-required="true"
            aria-invalid={
              formik.touched.time && formik.errors.time ? "true" : "false"
            }
          >
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) &&
              availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <div className="text-danger">{formik.errors.time}</div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default BookingSlot;
