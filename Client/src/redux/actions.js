import axios from "axios";
import {
  ADD_CHARACTER,
  ADD_FAVORITE,
  FILTER,
  ORDER,
  REMOVED_CHARACTER,
  REMOVED_FAVORITE,
} from "./actionsTypes";

export function addChar(char) {
  return {
    type: ADD_CHARACTER,
    payload: char,
  };
}
export function removedChar(id) {
  return {
    type: REMOVED_CHARACTER,
    payload: id,
  };
}

export function addFav(char) {
  return async dispatch => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    try {
      const { data } = await axios.post(endpoint, char);
      console.log(data);
      return dispatch(
        {
          type: ADD_FAVORITE,
          payload: data,
        },
        console.log(data)
      );
    } catch (err) {
      console.log(err);
    }
  };
  // return dispatch => {
  //   axios.post(endpoint, char).then(({ data }) => {
  //     return dispatch(
  //       {
  //         type: ADD_FAVORITE,
  //         payload: data,
  //       },
  //       console.log(data)
  //     );
  //   });
  // };
  // return {
  //   type: ADD_FAVORITE,
  //   payload: char,
  // };
}

export function removeFav(id) {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;

  return async dispatch => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVED_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(id);
  // return dispatch => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     console.log(data);
  //     return dispatch({
  //       type: REMOVED_FAVORITE,
  //       payload: data,
  //     });
  //   });
  // };
  // return {
  //   type: REMOVED_FAVORITE,
  //   payload: id,
  // };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
