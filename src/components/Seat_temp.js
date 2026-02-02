import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Seat_temp.css";

function SeatSelection() {
  const navigate = useNavigate();

  const seats = Array.from({ length: 150 }, (_, i) => i + 1);
  const seatPrice = 250;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <>
      <div className="seat-page">
        <h2>Select Seats</h2>
        <h3>Per seat price: ₹{seatPrice}</h3>

        <div className="seat-grid">
          {seats.map((seat) => (
            <button
              key={seat}
              className={`seat-btn ${
                selectedSeats.includes(seat) ? "active" : ""
              }`}
              onClick={() => handleSelect(seat)}
            >
              {seat}
            </button>
          ))}
        </div>

        <button
          className="confirm-btn"
          onClick={() => navigate("/payment")}
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
}

export default SeatSelection;
