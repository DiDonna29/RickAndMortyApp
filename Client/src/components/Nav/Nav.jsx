import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, onRandom, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <Link to="/home">
        <button className="button">
          <span className="actual-text">&nbsp;Home&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Home&nbsp;
          </span>
        </button>
      </Link>
      <Link to="/favorites">
        <button className="button">
          <span className="actual-text">&nbsp;Favorites&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Favorites&nbsp;
          </span>
        </button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button className="button" onClick={onRandom}>
        <span className="actual-text">
          &nbsp;Agregar Personaje Aleatorio&nbsp;
        </span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Agregar Personaje Aleatorio&nbsp;
        </span>
      </button>
      <Link to="/about">
        <button className="button">
          <span className="actual-text">&nbsp;About&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;About&nbsp;
          </span>
        </button>
      </Link>
      {onLogout && (
        <button className="button" onClick={handleLogout}>
          <span className="actual-text">&nbsp;Cerrar Sesion&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Cerrar Sesion&nbsp;
          </span>
        </button>
      )}
    </div>
  );
}
