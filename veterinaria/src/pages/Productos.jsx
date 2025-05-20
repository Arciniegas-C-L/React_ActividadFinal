import React from "react";
import juguete_perro from "./imagenes/juguete_perro.jpg";
import juguete_gato from "../imagenes/juguete_gato.jpg";
import juguete_loro from "../imagenes/juguete_loro.jpg";
import juguete_conejo from "../imagenes/juguete_conejo.jpg";
import juguete_hamster from "../imagenes/juguete_hamster.jpg";

export const Productos = () => {
const productos = [
    {
        nombre: "Juguetes para Perros",
        precio: 40.0000,
        descripcion: "Juguetes de goma y plastico resistentes y duraderos.",
        imagen: juguete_perro,
    },
    {
        nombre: "Juguetes para Gatos",
        precio: 50.000,
        descripcion: "Juguetescon plumas, cuerdas y objetos que se mueven.",
        imagen:juguete_gato ,
    },
    {
        nombre: "Juguetes para Loros",
        precio: 20.000,
        descripcion: "Juguetes que cuelgan y se balancean.",
        imagen: juguete_loro,
    },
    {
        nombre: "Juguetes para Conejos",
        precio: 15.000,
        descripcion: "Juguetes con tuneles y escondites.",
        imagen: juguete_conejo,
    },
    {
        nombre: "Juguetes para Hamster",
        precio: 30.000,
        descripcion: "Juguetes para el entretenimiento de ellos",
        imagen: juguete_hamster,
    },
];
        return (
            <div>
                {productos.map( (producto) => (
                <div>
                    <h2>{producto.nombre}</h2>
                    <p>precio: ${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                    <img src={producto.imagen} alt={producto.nombre} /> 
                </div>
                        ))}
            </div>
            );
        };


