import { servicios } from '../components/Json'
import Veterinaria from '../assets/images/HeroVeterinaria.jpg'
import '../assets/css/Home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='main-container'>
                <div className='hero-section'>
                    <div className='hero-content'>
                        <h1>Bienvenido a PetsFriends</h1>
                        <p>Te ayudamos con todo lo que necesite tu amiguito doméstico, desde atención médica hasta cuidados especiales y productos exclusivos.</p>
                        <p>Contamos con un equipo profesional que ama a los animales tanto como tú, y estamos listos para atenderte en cada etapa de la vida de tu mascota.</p>
                    </div>
                    <div className='hero-image'>
                        <img src={Veterinaria} alt="Veterinaria" />
                    </div>
                </div>

                <div className='services-section' id='servicios'>
                    <h3>Servicios</h3>
                    <p>Ofrecemos una amplia gama de servicios especializados diseñados para cubrir todas las necesidades de tu mascota en un solo lugar.</p>
                    <div className='services-grid'>
                        {servicios.map((servicio) => (
                            <div key={servicio.nombre} className='service-card'>
                                <h4>{servicio.nombre}</h4>
                                <img src={servicio.img} alt={servicio.alt} />
                                <p>{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='about-section' id='nosotros'>
                    <div>
                        <h2>Nosotros</h2>
                    </div>
                    <div className='texto-about'>
                        <p>Somos una veterinaria dedicada al bienestar integral de tu mascota. Con años de experiencia en el cuidado animal, nos especializamos en brindar atención personalizada y profesional.</p>
                        <p>En PetsFriends creemos que cada mascota merece un trato único, por eso ofrecemos soluciones integrales en salud, alimentación, higiene y entretenimiento para mejorar su calidad de vida.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
