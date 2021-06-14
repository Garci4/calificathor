const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//rutas

//crear pelicula
app.post("/new_pelicula", async (req, res) => {
  try {
    const { nombre, director, descripcion } = req.body;
    const newPelicula = await pool.query(
      "INSERT INTO peliculas (nombre, director, descripcion) VALUES ($1, $2, $3) RETURNING *",
      [nombre, director, descripcion]
    );
    res.json(newPelicula.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//devolver todas las peliculas
app.get("/peliculas", async (req, res) => {
  try {
    const peliculas = await pool.query("SELECT * FROM peliculas");
    res.json(peliculas.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//devolver una pelicula
app.get("/peliculas/:nombre", async (req, res) => {
  try {
    const { nombre } = req.params;
    console.log(nombre);
    const pelicula = await pool.query("SELECT * FROM peliculas WHERE nombre = $1", [
      nombre.toString()
    ]);
    res.json(pelicula.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//modificar una pelicula
app.put("/peliculas/:nomb", async (req, res) => {
  try {
    const { nomb } = req.params;
    const { nombre, director, descripcion } = req.body;
    const updatePelicula = await pool.query(
      "UPDATE peliculas SET nombre = $1, director = $2, descripcion = $3 WHERE nombre = $4",
      [nombre, director, descripcion, nomb]
    );
    res.json("actualizado!");
  } catch (err) {
    console.log(err.message);
  }
});

//borrar una pelicula
app.delete("/peliculas/:nombre", async (req, res) => {
  try {
    const { nombre } = req.params;
    console.log(nombre);
    const pelicula = await pool.query("DELETE FROM peliculas WHERE nombre = $1", [nombre]);
    res.json("PELICULA BORRADA");
  } catch (err) {
    console.log(err.message);
  }
});

//crear libro
//devolver todas los libros
//devolver un libro
//modificar un libro
//borrar un libro

//calificar algo

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
