import React from "react";
import "../assets/css/Citas.css";

export const Citas = () => {
  return (
    <div className="citas-container">
      <h1>Reserva la cita para tu mascota</h1>

      <div className="cita-info">
        <h2>Mascota: Dulce</h2>
        <p>
          <strong>Dueño:</strong> Felipe Lerma
        </p>
        <p>
          <strong>Especie:</strong> Perro
        </p>
        <p>
          <strong>Raza:</strong> Pincher
        </p>
        <p>
          <strong>Fecha:</strong> 27/05/2025
        </p>
        <p>
          <strong>Hora:</strong> 3:00 PM
        </p>
        <p>
          <strong>Servicio:</strong> Consulta general
        </p>
      </div>

      <div className="cita-info">
        <h2>Mascota: Luna</h2>
        <p>
          <strong>Dueño:</strong> Fernanda Lopez
        </p>
        <p>
          <strong>Especie:</strong> Gato
        </p>
        <p>
          <strong>Raza:</strong> Siames
        </p>
        <p>
          <strong>Fecha:</strong> 28/05/2025
        </p>
        <p>
          <strong>Hora:</strong> 11:00 AM
        </p>
        <p>
          <strong>Servicio:</strong> Vacunación
        </p>
      </div>

      <div className="cita-info">
        <h2>Mascota: Rocky</h2>
        <p>
          <strong>Dueño:</strong> Sebastian Ramirez
        </p>
        <p>
          <strong>Especie:</strong>Conejo
        </p>
        <p>
          <strong>Raza:</strong> Enano holandes
        </p>
        <p>
          <strong>Fecha:</strong> 25/05/2025
        </p>
        <p>
          <strong>Hora:</strong> 1:00 PM
        </p>
        <p>
          <strong>Servicio:</strong> Chequeo General
        </p>
      </div>

      <p className="mensaje-final">
        Para agendar una nueva cita, comunícate con nosotros por teléfono o
        visita la veterinaria.
      </p>
    </div>
  );
};

export default Citas;
