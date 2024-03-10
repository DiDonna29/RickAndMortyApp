const express = require("express");
const router = require("./routers/index.js");
const app = express();
const PORT = 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allowed headers
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); // Allowed methods
  next();
});

// app.use((req, res, next) => {
//   req.url = `/rickandmorty${req.url}`;
//   next();
// });
app.use("/rickandmorty", router);

// app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});

// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const port = 3001;

// const server = http.createServer((req, res) => {
//   //logica del servidor
//   res.setHeader("Access-Control-Allow-Origin", "*"); //CORS

//   //RESPONSABILIDAD UNICA ES CREAR RUTAS, NO CONTENER LOGICA!!!

//   //RUTA PARA BUSCAR PERSONAJE CON ID
//   if (req.url.includes("/rickandmorty/character")) {
//     //POR QUE LOGICA DE OBTENER EL ID SE MANEJA AQUI????
//     return getCharById(req, res);
//   }

//   //CUALQUIER OTRA RUTA
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   return res.end("Hola te he escuchado!!!");
// });

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}/`);
//   //logica que se ejecuta cuando el servidor se levanta
// });
