const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  // Validar que email y password no estén vacíos
  if (!email || !password) {
    return res.status(400).json({ access: false, error: "Faltan datos" });
  }

  // Buscar el usuario en el arreglo
  const user = users.find(u => u.email === email && u.password === password);

  // Si el usuario no existe, devolver acceso denegado
  if (!user) {
    return res.status(403).json({ access: false });
  }

  // Si el usuario existe, devolver acceso permitido
    return res.status(200).json({ access: true });
    
};

module.exports = login;
