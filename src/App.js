import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookTable from "./pages/BookTable";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { submitAPI } from "./api";
import Layout from "./components/Layout";

function App() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);    
    if (isSuccess) {
      navigate("/confirmation", { state: formData });
    }
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booktable"
          element={<BookTable submitForm={submitForm} />}
        />
        <Route
          path="/booking"
          element={<BookingForm submitForm={submitForm} />}
        />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
