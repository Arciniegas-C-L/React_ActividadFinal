import { Link } from 'react-router-dom'
import '../assets/css/Home.css'

export default function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" className="titulo-header"><h1>PetsFriends</h1></Link>
            </div>
            <div className="menu">
                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/" onClick={() => scrollToSection('servicios')} className="nav-link">Servicios</Link></li>
                        <li className="nav-item"><Link to="/" onClick={() => scrollToSection('nosotros')} className="nav-link">Nosotros</Link></li>
                        <li><Link to="/animales" className='nav-link'>Animales</Link></li>
                        <li><Link to="/medicamentos" className='nav-link'>Medicamentos</Link></li>
                        <li><Link to="/productos" className='nav-link'>Productos</Link></li>
                        <li><Link to="/citas" className='nav-link'>Citas Medicas</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
