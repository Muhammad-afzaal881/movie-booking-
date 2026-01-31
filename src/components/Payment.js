import "./Payment.css";
import { useNavigate } from "react-router-dom";
function Payment() {
      const navigate = useNavigate();
  return (
    <form className="payment">
      <h1>Payment Now</h1>

      <label>Holder Name</label>
      <input type="text" placeholder="Enter Name" required />

      <label>Account Number</label>
      <input type="number" placeholder="Enter Number" required/>

      <label>Amount</label>
      <input type="number" placeholder="Enter Amount" required/>

      <label>MPIN</label>
      <input type="number" placeholder="Enter PIN" required />

      <button className="confirm-btn"
        onClick={() => navigate("/")}
      >
        Confirm Payment
      </button>
    </form>
  );
}

export default Payment;
