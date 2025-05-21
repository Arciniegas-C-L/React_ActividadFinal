import { animales } from "../components/Json";
import "../assets/css/animales.css";

export default function Animales() {
    return (
        <div className="animales-container">
        <div className="animales">
            {animales.map((animal, index) => (
            <div
                key={animal.id}
                className={`animal-card ${index % 2 !== 0 ? "reverse" : ""}`}
            >
                <div className="animal-img-container">
                    <img src={animal.img} alt={animal.alt} />
                </div>
                <div className="animal-info">
                    <h3>{animal.nombre}</h3>
                    <p>{animal.descripcion}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
    );
}
