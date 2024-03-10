import Card from "../card/Card";
import "./cards.css";
import "../Favorites/favorites.css";

export default function Cards({
  characters,
  onClose,
  isFavorites = false,
  showCloseButton = true,
}) {
  return (
    <div className="container-card">
      {characters && characters.length > 0 ? (
        characters.map(character => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={onClose}
            showCloseButton={showCloseButton}
          />
        ))
      ) : isFavorites ? (
        <div className="empty-state">
          <div className="eye-lid">
            <div className="eye">
              <div className="cornea">
                <div className="white-pupil"></div>
              </div>
            </div>
          </div>
          <h2>Aún no tienes favoritos.</h2>
          <p>
            Agrega personajes a tu lista de favoritos para que aparezcan aquí.
          </p>
        </div>
      ) : null}
    </div>
  );
}
