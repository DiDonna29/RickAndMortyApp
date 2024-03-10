import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ id, name, image, onClose, showCloseButton = true }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  useEffect(
    () => {
      myFavorites.forEach(fav => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    },
    [myFavorites],
    id
  );

  // const handleFavorite = () => {
  //   if (isFav) {
  //     setIsFav(false);
  //     console.log(`Removiendo favorito: ${id}`);
  //     dispatch(removeFav({ id, name, image }));
  //   } else {
  //     setIsFav(true);
  //     console.log(`Añadiendo a favorito: ${id}`);
  //     dispatch(addFav({ id, name, image }));
  //   }
  // };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
      console.log(`Removiendo favorito: ${id}`);
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, image }));
      console.log(`Añadiendo a favorito: ${id}`);
    }
  };

  return (
    <div className="card">
      <div className="first-content">
        <img className="image-card" src={image} alt="" />
      </div>
      <div className="second-content">
        <Link to={`/detail/${id}`} className="link-name">
          <h2 className="heading">{name}</h2>
        </Link>
        {showCloseButton && (
          <button
            className="button-card delete-button"
            onClick={() => onClose(id)}>
            <span className="box">✖️</span>
          </button>
        )}
        <div className="container-fav">
          {isFav ? (
            <button className="button-card button-fav" onClick={handleFavorite}>
              <span className="box">💙 Remover de favorito</span>
            </button>
          ) : (
            <button className="button-card button-fav" onClick={handleFavorite}>
              <span className="box">🖤 Añadir a Favorito</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
