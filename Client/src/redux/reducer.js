import {
  ADD_CHARACTER,
  ADD_FAVORITE,
  FILTER,
  ORDER,
  REMOVED_CHARACTER,
  REMOVED_FAVORITE,
} from "./actionsTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filteredCharacters: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
      };

    case ADD_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        filteredCharacters: [...state.allCharacters, payload],
      };

    case REMOVED_CHARACTER:
      return {
        ...state,
        allCharacters: state.myFavorites.filter(char => char.id !== payload),
      };

    case REMOVED_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites:
          payload !== "todos"
            ? state.allCharacters.filter(char => char.gender === payload)
            : state.allCharacters,
      };

    case ORDER:
      const sortedChars = state.myFavorites.slice().sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: sortedChars,
      };

    default:
      return { ...state };
  }
};

export default reducer;
