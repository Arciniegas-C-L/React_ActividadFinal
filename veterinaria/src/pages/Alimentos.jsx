import React from 'react';
import comida_perro from"../assets/imagenes/comida_perro.jpg";
import comida_gato from"../assets/imagenes/comida_gato.webp";
import comida_loro from "../assets/imagenes/comida_loro.jpg";
import comida_conejo from "../assets/imagenes/comida_conejo.jpg";
import comida_hamster from "../assets/imagenes/comida_hamster.jpg";
import "../assets/css/Alimentos.css";


export const Alimentos = () => {
    const alimentos =[
        {
            nombre: "Croquetas para perros",
            precio: 40000,
            descripcion: "Croquetas balanceadas con proteinas, vitaminasy minerales.",
            imagen: comida_perro,
            disponibilidad:"Disponible",
        },
        {
            nombre:"Alimento para gato",
            precio: 30000,
            descripcion:"Comida seca con alto contenido proteico",
            imagen: comida_gato,
            disponibilidad: "Disponible",
        },
        {
            nombre:"Alimentos para loros",
            precio: 20000,
            descripcion: "Mezcla de semillas y frutas secas",
            imagen: comida_loro,
            disponibilidad: "Agotado",
        },
        {
            nombre:"Alimentos para conejos",
            precio:40000,
            descripcion:"Alimentos ricos en fibra para una buena digestion",
            imagen:comida_conejo,
            disponibilidad:"Disponible",
        },
        {
            nombre:"Alimentos para Hamster",
            precio:10000,
            descripcion:"Comida en grano y mezcla de semillas para energia y salud",
            imagen: comida_hamster,
            disponibilidad:"Agotado",
        }
    ];

    return (
        <div className="alimentos-container">
            <h1 className="titulo-alimentos">Alimentos para tus mascotas</h1>
            <div className="grupo_alimentos">
                {alimentos.map((producto, index) => (
                    <div className="alimento-card" key={`alimento-${index}`}>
                        <h2>{producto.nombre}</h2>
                        <p className="precio">Precio: ${producto.precio.toLocaleString()}</p>
                        <p className="descripcion">{producto.descripcion}</p>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <p className="disponibilidad">{producto.disponibilidad}</p>
                    </div>
                ))}
            </div>
        </div>
        );
    };

export default Alimentos;
