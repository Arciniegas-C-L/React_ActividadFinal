import Header from '../components/Header'
import {servicios} from '../components/JsonHome'
import Veterinaria from '../assets/images/HeroVeterinaria.jpg'
import '../assets/css/Home.css'

export default function Home() {
return (
    <div className='home'>
        <Header />
        <div>
            <div>
                <div>
                    <h3>Bienvenido a PetsFriends</h3>
                    <p>Te ayudamos con todo lo que necesecite tu amiguito domestico</p>
                </div>
                <div>
                    <img src={Veterinaria} alt="Veterinaria" />
                </div>
            </div>
            <div>
                <h3>Servicios</h3>
                <div>
                    {/* busqueda de los servicios en la constante */}
                    {servicios.map((servicio) => (
                        <div>
                            <h4>{servicio.nombre}</h4>
                            <p>{servicio.descripcion}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div>
                <h3>Nosotros</h3>
                <p>Somos una veterinaria que te ayuda con todo lo que necesites para ti y tu amiguito domestico cubriendo diferentes necesidades de salud, comodidades y diversion para tu hogar</p>
            </div>
            <div>
                <h3>Contactanos</h3>
                <p>Te ayudamos con todo lo que necesecite tu amiguito domestico</p>
                <p>Telefono: 1234567890</p>
                <p>Correo: PetsFriends@example.com</p>
                <p>Direccion: Calle 123, Ciudad Cercana</p>
            </div>
        </div>
    </div>
    )
}
