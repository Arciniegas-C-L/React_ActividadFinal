import React from "react";
import juguete_perro from "../assets/imagenes/juguete_perro.jpg";
import juguete_gato from "../assets/imagenes/juguete_gato.jpg";
import juguete_loro from "../assets/imagenes/juguete_loro.jpg";
import juguete_conejo from "../assets/imagenes/juguete_conejo.jpg";
import juguete_hamster from "../assets/imagenes/juguete_hamster.jpg";
import cama_perro from "../assets/imagenes/cama_perro.jpg";
import cama_gato from "../assets/imagenes/cama_gato.jpg";
import cama_loro from "../assets/imagenes/cama_loro.jpg";
import cama_conejo from "../assets/imagenes/cama_conejo.jpg";
import cama_hamster from "../assets/imagenes/cama_hamster.jpg";
import "../assets/css/Productos.css";

export const Productos = () => {
  const productos = [
    {
      nombre: "Juguetes para Perros",
      precio: 40000,
      descripcion: "Juguetes de goma y plastico resistentes y duraderos.",
      imagen: juguete_perro,
    },
    {
      nombre: "Juguetes para Gatos",
      precio: 50000,
      descripcion: "Juguetes con plumas, cuerdas y objetos que se mueven.",
      imagen: juguete_gato,
    },
    {
      nombre: "Juguetes para Loros",
      precio: 20000,
      descripcion: "Juguetes que cuelgan y se balancean.",
      imagen: juguete_loro,
    },
    {
      nombre: "Juguetes para Conejos",
      precio: 15000,
      descripcion: "Juguetes con tuneles y escondites.",
      imagen: juguete_conejo,
    },
    {
      nombre: "Juguetes para Hamster",
      precio: 30000,
      descripcion: "Juguetes para el entretenimiento de ellos",
      imagen: juguete_hamster,
    },
  ];

  const camas = [
    {
      nombre: "Camas para perros",
      precio: 50000,
      descripcion: "Camas acolchadas para perros grandes y pequeños",
      imagen: cama_perro,
    },
    {
      nombre: "Camas para gatos",
      precio: 60000,
      descripcion: "Camas suaves y termicas ideales para gatos",
      imagen: cama_gato,
    },
    {
      nombre: "Camas para loros",
      precio: 40000,
      descripcion:
        "perchas acolchadas comodos para un descanso seguro en su jaula",
      imagen: cama_loro,
    },
    {
      nombre: "Camas para conejos",
      precio: 35000,
      descripcion:
        "Almohadas o tapetes acolchados que brindan comodidad y abrigo",
      imagen: cama_conejo,
    },
    {
      nombre: "Camas para Hamster",
      precio: 50000,
      descripcion:
        "Camas suaves y calidas hechas de tela o algodon para su madriguera",
      imagen: cama_hamster,
    },
  ];

  return (
    <div className="productos-container">
      <h1 className="titulo-productos">Nuestros Productos para tus mascotas</h1>
      <h2 className="titulos-juguetes">Juguetes para tus mascotas</h2>
      {productos.map((producto, index) => (
        <div className="producto-card" key={'juguete-${index}'}>
          <h2>{producto.nombre}</h2>
          <p className="precio">precio: ${producto.precio.toLocaleString()}</p>
          <p className="descripcion">{producto.descripcion}</p>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
      ))}
      <h2 className="titulo-productos">Camas para tus mascotas</h2>
      {camas.map((producto, index) => (
        <div className="producto-card" key={`cama-${index}`}>
          <h2>{producto.nombre}</h2>
          <p className="precio">precio: ${producto.precio.toLocaleString()}</p>
          <p className="descripcion">{producto.descripcion}</p>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
      ))}
    </div>
  );
};

export default Productos;
