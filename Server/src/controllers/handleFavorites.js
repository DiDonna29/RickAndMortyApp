let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const charId = req.params.id;
  myFavorites = myFavorites.filter(character => character.id !== +charId);
  res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
