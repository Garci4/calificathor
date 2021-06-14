CREATE DATABASE calificathor;

CREATE TABLE peliculas(
  pelicula_id SERIAL PRIMARY KEY,
  nombre varchar(255),
  director varchar(50),
  descripcion varchar(255),
  calificacion int,
  comentario varchar(255)
);

CREATE TABLE libros(
  libro_id SERIAL PRIMARY KEY,
  nombre varchar(255),
  autor varchar(50),
  descripcion varchar(255),
  calificacion int,
  comentario varchar(255)
);