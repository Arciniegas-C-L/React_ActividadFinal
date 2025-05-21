import '../assets/css/Medicamentos.css'
import medicamentos from '../components/Json'

export default function Medicamentos() {
    return (
        <div className="medicamentos-container">
            <h1>Medicamentos Veterinarios</h1>
            <div className="medicamentos-grid">
                {medicamentos.map((medicamento) => (
                    <div key={medicamento.id} className="medicamento-card">
                        <div className="medicamento-header">
                            <h2>{medicamento.nombre}</h2>
                            <span className={`animal-tag ${medicamento.animal.toLowerCase()}`}>
                                {medicamento.animal}
                            </span>
                        </div>
                        <div className="medicamento-info">
                            <p><strong>Tipo:</strong> {medicamento.tipo}</p>
                            <p><strong>Descripción:</strong> {medicamento.descripcion}</p>
                            <p><strong>Dosis:</strong> {medicamento.dosis}</p>
                            <p className="precio"><strong>Precio:</strong> ${medicamento.precio.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
