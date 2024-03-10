import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://rym2.up.railway.app/api/character/${id}?key=pi-{didonna}`
  //       );
  //       setCharacter(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching character data:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="container-cargando">
        <span className="cargando"></span>
        <div className="subtitle sub1">Cargando...</div>
      </div>
    );
  } else if (!character.name) {
    return (
      <div className="container-loader">
        <span className="loader"></span>
        <div className="subtitle sub1">
          Parece que intentaste buscar un personaje que no existe.
        </div>
        <div className="subtitle sub2">Oops.</div>
        <Link to="/home">
          <button className="btn btn-fixError">
            Regresar a la Página Principal
          </button>
        </Link>
      </div>
    );
  }

  const { name, image, status, species, gender, origin } = character;

  return (
    <div className="card-detail">
      <div className="left-detail">
        <img className="image-card" src={image} alt="" />
      </div>
      <div className="right-detail">
        <div className="flex-container">
          <h1 className="heading">{name}</h1>
          <p>
            ID: <span>{id}</span>
          </p>
          <p>
            STATUS: <span>{status}</span>
          </p>
          <p>
            SPECIE: <span>{species}</span>
          </p>
          <p>
            GENDER: <span>{gender}</span>
          </p>
          <p>
            ORIGEN: <span>{origin.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
