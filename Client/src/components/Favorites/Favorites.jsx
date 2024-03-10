import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import Cards from "../cards/Cards";
import Card from "../card/Card";
import "./Favorites.css";
import { removeFav, orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  // const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const filteredCharacters = useSelector(state => state.filteredCharacters);

  // const handleRemoveFavorite = id => {
  //   dispatch(removeFav(id));
  // };

  const handleOrder = e => {
    console.log(e.target.value);
    // dispatch(orderCards(e.target.value));
    // setAux(!aux);
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = e => {
    console.log(e.target.value);
    // if (e.target.value === "todos") {
    //   dispatch(filterCards(null));
    // } else {
    //   dispatch(filterCards(e.target.value));
    // }
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className="favorites-container">
      <div className="container-titlefav">
        <div className="filters">
          <label htmlFor="order">Ordenar por:</label>
          <select className="custom-select" name="order" onChange={handleOrder}>
            <option disabled value="">
              Selecciona una Opción
            </option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <h2>Mis favoritos</h2>
          <label htmlFor="filter">Filtrar por género:</label>
          <select
            className="custom-select"
            name="gender"
            onChange={handleFilter}>
            <option disabled value="">
              Selecciona una Opción
            </option>
            <option value="todos">Todos</option>
            <option value="Male">Hombre</option>
            <option value="Female">Mujer</option>
            <option value="Genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
      </div>
      {/* <Cards
        characters={myFavorites}
        key={aux}
        isFavorites={true}
        // onClose={handleRemoveFavorite}
        showCloseButton={false}
      /> */}
      {myFavorites?.map(fav => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          gender={fav.gender}
          image={fav.image}
          showCloseButton={false}
        />
      ))}
    </div>
  );
};

export default Favorites;
