import { updateTimes, getTimesByDate } from "./components/BookingForm";

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

test("updateTimes returns the correct expected value", () => {
    const date = uniqueDates[1];
    const expectedTimes = getTimesByDate(date);
    const action = { type: "UPDATE_TIMES", payload: date };
    const updatedTimes = updateTimes([], action);   
    expect(updatedTimes).toEqual(expectedTimes);
});