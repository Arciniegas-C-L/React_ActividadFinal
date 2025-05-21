import { Link } from 'react-router-dom'
import '../assets/css/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>PetsFriends</h3>
                    <p>Tu veterinaria de confianza para el cuidado de tus mascotas. Ofrecemos servicios profesionales y atención personalizada para todos los animales domésticos.</p>
                </div>

                <div className="footer-section">
                    <h3>Servicios</h3>
                    <ul>
                        <li><Link to="/medicamentos">Medicamentos</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/citas">Citas Médicas</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Animales que Atendemos</h3>
                    <ul>
                        <li>Perros</li>
                        <li>Gatos</li>
                        <li>Conejos</li>
                        <li>Aves</li>
                        <li>Hamsters</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul className="contact-info">
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Calle Principal #123, Ciudad
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            (123) 456-7890
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            info@petsfriends.com
                        </li>
                        <li>
                            <i className="fas fa-clock"></i>
                            Lun-Sáb: 8:00 AM - 8:00 PM
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 PetsFriends. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
