// const axios = require("axios");

// const getCharById = async (req, res) => {
//   const { id } = req.params;
//   const URL = `https://rickandmortyapi.com/api/character/${id}`;
//   try {
//     const { data } = await axios(URL);
//     const { name, gender, species, origin, image, status } = response.data;

//     if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);
//     const character = {
//       id,
//       name,
//       gender,
//       species,
//       origin,
//       image,
//       status,
//     };

//     return res.status(200).json(character);
//   } catch (error) {
//     return error.message.includes("ID")
//       ? res.status(404).send("Character not found")
//       : res.status(500).send(error?.response?.data?.error);
//   }
// axios
//   .get(URL)
//   .then(response => {
//     const { name, gender, species, origin, image, status } = response.data;

//     if (res.status(200) && response.data) {
//       const char = {
//         id,
//         name,
//         gender,
//         species,
//         origin: origin.name,
//         image,
//         status,
//       };
//       return res.status(200).json(char);
//     }
//     if (res.data(404)) {
//       return res.status(404).json({ message: "Not found" });
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     return res.status(500).json({
//       message: "Error",
//     });
//   });
// };

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = getCharById;
