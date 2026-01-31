import { useParams } from "react-router-dom";
import cardsData from "./CardData";
import { useNavigate } from "react-router-dom";
import './Moviedetail.css'

function MovieDetail() {
  const { id } = useParams();
const navigate = useNavigate();
  const movie = cardsData.find((card) => card.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <session>
    <div className="detail-page">
      <img src={movie.img} alt={movie.title} />
      <div className="text">
      <h1>{movie.title}</h1>
      <h4>{movie.description}</h4>
      <h5>{movie.time}</h5>
      </div>
    </div>
   <button
        className="btn"
        onClick={() => navigate("/seats")}
      >
        Confirm Booking
      </button>
    </session>
  );
}

export default MovieDetail;
