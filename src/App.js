import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import MovieDetail from "./components/Moviedetail";
import SeatSelection from "./components/Seat";
import Payment from "./components/Payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Card />
            </>
          }
        />

        {/* Movie Detail Page */}
        <Route path="/movie/:id" element={<MovieDetail />} />
         <Route path="/seats" element={<SeatSelection />} />
         <Route path="/payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
