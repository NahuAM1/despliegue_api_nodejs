const express = require("express");
const productosRouter = require("./routes/productos");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();

const app = express();
app.use(express.json())


// Ruta base
app.get("/", (req, res) => {
  res.send("API de productos");
});


// Ruta base
app.get("/health", (req, res) => {
  res.send("OK");
});


// Rutas de productos
app.use("/api/productos", productosRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API de productos escuchando en el puerto ${PORT}`);
});

module.exports = app;
